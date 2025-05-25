// 🎯 useDesignSystem Hook
// Automatically validates and enforces design system compliance

import React, { useEffect, useRef, useState } from 'react';
import { spacing, semanticSpacing, touchTargets } from './spacing';
import { validators, autoFix, devTools } from './enforcement';
import type { ValidationResult } from './enforcement';

// ✅ Main Design System Hook
export const useDesignSystem = (
  componentName: string,
  options: {
    validateSpacing?: boolean;
    validateAccessibility?: boolean;
    validateTouchTargets?: boolean;
    showGridOverlay?: boolean;
    logValidation?: boolean;
    autoFixEnabled?: boolean;
  } = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    errors: [],
    warnings: [],
    suggestions: []
  });
  const [isValid, setIsValid] = useState(true);

  const {
    validateSpacing = true,
    validateAccessibility = true,
    validateTouchTargets = true,
    showGridOverlay = false,
    logValidation = process.env.NODE_ENV === 'development',
    autoFixEnabled = false
  } = options;

  // ✅ Validation Effect
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Validate accessibility
    if (validateAccessibility) {
      const accessibilityResult = validators.validateAccessibility(element);
      errors.push(...accessibilityResult.errors);
      warnings.push(...accessibilityResult.warnings);
      suggestions.push(...accessibilityResult.suggestions);
    }

    // Validate touch targets
    if (validateTouchTargets && (element.tagName === 'BUTTON' || element.role === 'button')) {
      const rect = element.getBoundingClientRect();
      const minSize = Math.min(rect.width, rect.height);
      
      if (minSize < 44) {
        errors.push(`Touch target too small: ${minSize}px. Minimum is 44px for accessibility.`);
      } else if (minSize < 48) {
        suggestions.push(`Consider 48px for better usability (currently ${minSize}px).`);
      }
    }

    // Validate spacing (check computed styles)
    if (validateSpacing) {
      const computedStyle = window.getComputedStyle(element);
      const spacingProperties = ['padding', 'margin', 'gap'];
      
      spacingProperties.forEach(prop => {
        const value = computedStyle.getPropertyValue(prop);
        if (value && value !== '0px') {
          const validation = validators.validateSpacing(value);
          if (!validation.valid && validation.suggestion) {
            warnings.push(`${prop}: ${validation.suggestion}`);
          }
        }
      });
    }

    const result: ValidationResult = { errors, warnings, suggestions };
    setValidationResult(result);
    setIsValid(errors.length === 0);

    // Log validation results in development
    if (logValidation && (errors.length > 0 || warnings.length > 0 || suggestions.length > 0)) {
      devTools.logValidation(componentName, result);
    }

    // Auto-fix suggestions (development only)
    if (autoFixEnabled && process.env.NODE_ENV === 'development') {
      const fixes = autoFix.generateComponentFixes(result);
      if (fixes.length > 0) {
        console.group(`🔧 ${componentName} - Auto-fix Suggestions`);
        fixes.forEach(fix => console.info('🔧', fix));
        console.groupEnd();
      }
    }

  }, [componentName, validateSpacing, validateAccessibility, validateTouchTargets, logValidation, autoFixEnabled]);

  // ✅ Grid Overlay Effect
  useEffect(() => {
    if (!showGridOverlay || process.env.NODE_ENV !== 'development') return;

    const overlay = devTools.createGridOverlay();
    document.body.appendChild(overlay);

    return () => {
      const existingOverlay = document.getElementById('design-system-grid');
      if (existingOverlay) {
        existingOverlay.remove();
      }
    };
  }, [showGridOverlay]);

  return {
    elementRef,
    validationResult,
    isValid,
    // Utility functions
    getSpacing: (key: keyof typeof spacing) => spacing[key],
    getSemanticSpacing: (category: keyof typeof semanticSpacing, key: string) => {
      return semanticSpacing[category]?.[key as keyof typeof semanticSpacing[typeof category]];
    },
    getTouchTarget: (size: keyof typeof touchTargets) => touchTargets[size],
    // Validation helpers
    validateElement: (element: HTMLElement) => validators.validateAccessibility(element),
    suggestSpacingFix: (value: string) => autoFix.suggestSpacing(value),
  };
};

// ✅ Specialized Hooks for Common Components

// Button Hook with Touch Target Validation
export const useButtonDesignSystem = (buttonProps: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: string;
}) => {
  const { elementRef, validationResult, isValid } = useDesignSystem('Button', {
    validateTouchTargets: true,
    validateAccessibility: true,
  });

  // Get recommended touch target size
  const getRecommendedSize = () => {
    switch (buttonProps.size) {
      case 'sm': return touchTargets.minimum;
      case 'md': return touchTargets.comfortable;
      case 'lg': return touchTargets.large;
      case 'xl': return touchTargets.hero;
      default: return touchTargets.comfortable;
    }
  };

  return {
    buttonRef: elementRef,
    isValid,
    validationResult,
    recommendedSize: getRecommendedSize(),
    // Button-specific spacing
    getButtonSpacing: (size: 'sm' | 'md' | 'lg' | 'xl') => {
      switch (size) {
        case 'sm': return semanticSpacing.componentPadding.tight;
        case 'md': return semanticSpacing.componentPadding.normal;
        case 'lg': return semanticSpacing.componentPadding.loose;
        case 'xl': return semanticSpacing.componentPadding.spacious;
        default: return semanticSpacing.componentPadding.normal;
      }
    }
  };
};

// Property Card Hook with Real Estate Specific Validation
export const usePropertyCardDesignSystem = () => {
  const { elementRef, validationResult, isValid } = useDesignSystem('PropertyCard', {
    validateSpacing: true,
    validateAccessibility: true,
  });

  return {
    cardRef: elementRef,
    isValid,
    validationResult,
    // Property card specific spacing
    spacing: {
      padding: semanticSpacing.propertyCard.padding,
      gap: semanticSpacing.propertyCard.gap,
      margin: semanticSpacing.propertyCard.margin,
      imageMargin: semanticSpacing.propertyCard.imageMargin,
    }
  };
};

// Chat Interface Hook
export const useChatDesignSystem = () => {
  const { elementRef, validationResult, isValid } = useDesignSystem('ChatInterface', {
    validateSpacing: true,
    validateAccessibility: true,
  });

  return {
    chatRef: elementRef,
    isValid,
    validationResult,
    // Chat specific spacing
    spacing: {
      messagePadding: semanticSpacing.chat.messagePadding,
      messageGap: semanticSpacing.chat.messageGap,
      inputPadding: semanticSpacing.chat.inputPadding,
      sidebarPadding: semanticSpacing.chat.sidebarPadding,
    }
  };
};

// ✅ Development Tools Hook
export const useDesignSystemDevTools = () => {
  const [gridVisible, setGridVisible] = useState(false);
  const [validationEnabled, setValidationEnabled] = useState(process.env.NODE_ENV === 'development');

  const toggleGrid = () => {
    if (gridVisible) {
      const overlay = document.getElementById('design-system-grid');
      if (overlay) overlay.remove();
    } else {
      const overlay = devTools.createGridOverlay();
      document.body.appendChild(overlay);
    }
    setGridVisible(!gridVisible);
  };

  const validateAllComponents = () => {
    const buttons = document.querySelectorAll('button, [role="button"]');
    const inputs = document.querySelectorAll('input, textarea, select');
    const cards = document.querySelectorAll('[data-component="property-card"], .card');

    console.group('🔍 Design System Validation Report');
    
    buttons.forEach((button, index) => {
      const rect = button.getBoundingClientRect();
      const minSize = Math.min(rect.width, rect.height);
      if (minSize < 44) {
        console.warn(`Button ${index + 1}: Touch target too small (${minSize}px)`);
      }
    });

    cards.forEach((card, index) => {
      const styles = window.getComputedStyle(card as HTMLElement);
      const padding = styles.getPropertyValue('padding');
      console.info(`Card ${index + 1}: Padding = ${padding}`);
    });

    console.groupEnd();
  };

  // Keyboard shortcut for grid toggle (Ctrl/Cmd + G)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'g' && process.env.NODE_ENV === 'development') {
        e.preventDefault();
        toggleGrid();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gridVisible]);

  return {
    gridVisible,
    validationEnabled,
    toggleGrid,
    setValidationEnabled,
    validateAllComponents,
    // Quick spacing helpers
    getQuickSpacing: () => ({
      xs: spacing[1],    // 4px
      sm: spacing[2],    // 8px  
      md: spacing[4],    // 16px
      lg: spacing[6],    // 24px
      xl: spacing[8],    // 32px
    })
  };
};

// ✅ HOC for automatic design system validation
export function withDesignSystem<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string,
  validationOptions?: Parameters<typeof useDesignSystem>[1]
) {
  const WrappedComponent = React.forwardRef<HTMLElement, P>((props, ref) => {
    const { elementRef, validationResult, isValid } = useDesignSystem(componentName, validationOptions);

    // Merge refs safely
    const mergedRef = React.useCallback((element: HTMLElement | null) => {
      if (element && elementRef.current !== element) {
        (elementRef as React.MutableRefObject<HTMLElement | null>).current = element;
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref && 'current' in ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = element;
        }
      }
    }, [ref]);

    return React.createElement(Component, {
      ...props,
      ref: mergedRef,
      'data-design-system-valid': isValid,
      'data-design-system-component': componentName,
    } as P & { ref: React.Ref<HTMLElement> });
  });

  WrappedComponent.displayName = `withDesignSystem(${componentName})`;
  return WrappedComponent;
}

export default useDesignSystem; 