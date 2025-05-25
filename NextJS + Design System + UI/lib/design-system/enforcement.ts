// 🛡️ Design System Enforcement & Validation
// Automatically enforce 8px grid and UX best practices

import { spacing, semanticSpacing, touchTargets, contentWidth, gridValidation, GRID_BASE } from './spacing';

// ✅ Grid Enforcement Rules
export const gridRules = {
  // Forbidden non-grid values
  forbiddenValues: [
    '5px', '7px', '9px', '10px', '11px', '13px', '14px', '15px', 
    '17px', '18px', '19px', '21px', '22px', '23px', '25px', '26px', '27px',
    '29px', '30px', '31px', '33px', '34px', '35px', '37px', '38px', '39px'
  ],
  
  // Allowed grid values
  allowedValues: Object.values(spacing),
  
  // Common mistakes to catch
  commonMistakes: {
    '10px': spacing[3],   // Should use 12px
    '15px': spacing[4],   // Should use 16px
    '18px': spacing[5],   // Should use 20px
    '22px': spacing[6],   // Should use 24px
    '30px': spacing[8],   // Should use 32px
    '35px': spacing[10],  // Should use 40px
  }
} as const;

// ✅ UX Best Practice Enforcement
export const uxRules = {
  // Minimum touch target enforcement
  touchTargets: {
    minimum: 44,      // iOS HIG minimum
    recommended: 48,  // Material Design recommendation
    
    validate: (size: number): { valid: boolean; suggestion?: string } => {
      if (size < 44) {
        return { 
          valid: false, 
          suggestion: `Touch target too small (${size}px). Minimum is 44px for accessibility.` 
        };
      }
      if (size < 48) {
        return { 
          valid: true, 
          suggestion: `Consider 48px for better usability (currently ${size}px).` 
        };
      }
      return { valid: true };
    }
  },
  
  // Text line length enforcement
  textWidth: {
    validate: (characters: number): { valid: boolean; suggestion?: string } => {
      if (characters < 45) {
        return { 
          valid: false, 
          suggestion: `Line too short (${characters}ch). Minimum is 45ch for readability.` 
        };
      }
      if (characters > 75) {
        return { 
          valid: false, 
          suggestion: `Line too long (${characters}ch). Maximum is 75ch for readability.` 
        };
      }
      return { valid: true };
    }
  },
  
  // Color contrast enforcement
  contrast: {
    minimums: {
      normal: 4.5,    // WCAG AA
      large: 3.0,     // WCAG AA large text
      enhanced: 7.0,  // WCAG AAA
    }
  }
} as const;

// ✅ Component Validation Functions
export const validators = {
  // Validate spacing follows 8px grid
  validateSpacing: (value: string): { valid: boolean; suggestion?: string } => {
    // Extract numeric value
    const numValue = parseFloat(value.replace(/px|rem|em/, ''));
    
    if (value.includes('rem')) {
      // Convert rem to px (assuming 16px base)
      const pxValue = numValue * 16;
      if (!gridValidation.isValidGridValue(pxValue)) {
        const nearest = gridValidation.getClosestGridValue(pxValue);
        return { 
          valid: false, 
          suggestion: `${value} doesn't follow 8px grid. Use ${nearest} instead.` 
        };
      }
    } else if (value.includes('px')) {
      if (!gridValidation.isValidGridValue(numValue)) {
        const nearest = gridValidation.getClosestGridValue(numValue);
        return { 
          valid: false, 
          suggestion: `${value} doesn't follow 8px grid. Use ${nearest} instead.` 
        };
      }
    }
    
    return { valid: true };
  },

  // Validate component follows design system
  validateComponent: (componentProps: Record<string, any>): ValidationResult => {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Check for hardcoded spacing values
    Object.entries(componentProps).forEach(([prop, value]) => {
      if (typeof value === 'string' && /^\d+(px|rem|em)$/.test(value)) {
        const validation = validators.validateSpacing(value);
        if (!validation.valid && validation.suggestion) {
          errors.push(`${prop}: ${validation.suggestion}`);
        }
      }
    });

    // Check for semantic spacing usage
    if (componentProps.className) {
      const hasHardcodedSpacing = /p-\d+|m-\d+|gap-\d+/.test(componentProps.className);
      if (hasHardcodedSpacing) {
        suggestions.push('Consider using semantic spacing from design system instead of hardcoded values.');
      }
    }

    return { errors, warnings, suggestions };
  },

  // Validate accessibility compliance
  validateAccessibility: (element: HTMLElement): ValidationResult => {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Check touch target size
    const rect = element.getBoundingClientRect();
    const minDimension = Math.min(rect.width, rect.height);
    
    if (element.tagName === 'BUTTON' || element.role === 'button') {
      const touchValidation = uxRules.touchTargets.validate(minDimension);
      if (!touchValidation.valid && touchValidation.suggestion) {
        errors.push(touchValidation.suggestion);
      }
    }

    // Check for focus styles
    const computedStyle = window.getComputedStyle(element);
    const hasFocusOutline = computedStyle.getPropertyValue('outline') !== 'none';
    const hasFocusRing = computedStyle.getPropertyValue('box-shadow').includes('focus');
    
    if (!hasFocusOutline && !hasFocusRing) {
      warnings.push('Element should have visible focus indicator for accessibility.');
    }

    return { errors, warnings, suggestions };
  }
};

// ✅ Auto-fix Suggestions
export const autoFix = {
  // Suggest design system spacing
  suggestSpacing: (value: string): string => {
    const numValue = parseFloat(value.replace(/px|rem|em/, ''));
    let pxValue = numValue;
    
    if (value.includes('rem')) {
      pxValue = numValue * 16;
    }
    
    return gridValidation.getClosestGridValue(pxValue);
  },

  // Convert hardcoded values to semantic spacing
  convertToSemantic: (value: string, context: 'padding' | 'margin' | 'gap'): string => {
    const pxValue = parseFloat(value.replace(/px|rem|em/, ''));
    
    // Find closest semantic spacing
    const spacingEntries = Object.entries(spacing);
    const closest = spacingEntries.reduce((prev, curr) => {
      const prevDiff = Math.abs(parseFloat(prev[1]) - pxValue);
      const currDiff = Math.abs(parseFloat(curr[1]) - pxValue);
      return prevDiff < currDiff ? prev : curr;
    });
    
    switch (context) {
      case 'padding':
        return `p-[${closest[1]}]`;
      case 'margin':
        return `m-[${closest[1]}]`;
      case 'gap':
        return `gap-[${closest[1]}]`;
      default:
        return closest[1];
    }
  },

  // Generate component fixes
  generateComponentFixes: (validationResult: ValidationResult): string[] => {
    const fixes: string[] = [];
    
    validationResult.errors.forEach(error => {
      if (error.includes("doesn't follow 8px grid")) {
        const match = error.match(/Use (\d+px) instead/);
        if (match) {
          fixes.push(`Replace with spacing value: ${match[1]}`);
        }
      }
    });
    
    return fixes;
  }
};

// ✅ Linting Rules Export
export const lintingRules = {
  // ESLint rule configuration
  eslintRules: {
    'design-system/no-hardcoded-spacing': {
      rule: 'error',
      message: 'Use design system spacing tokens instead of hardcoded values',
      forbidden: gridRules.forbiddenValues,
      suggestions: gridRules.commonMistakes
    },
    
    'design-system/semantic-spacing': {
      rule: 'warn',
      message: 'Consider using semantic spacing for better maintainability',
      semantic: Object.keys(semanticSpacing)
    },
    
    'design-system/touch-targets': {
      rule: 'error',
      message: 'Touch targets must be at least 44px for accessibility',
      minimum: touchTargets.minimum
    }
  },

  // Stylelint rule configuration
  stylelintRules: {
    'design-system/grid-values': {
      rule: 'error',
      message: 'Values must follow 8px grid system',
      allowed: gridRules.allowedValues
    }
  }
};

// ✅ Runtime Validation Hook
export const useDesignSystemValidation = () => {
  const validateElement = (element: HTMLElement): ValidationResult => {
    return validators.validateAccessibility(element);
  };

  const validateSpacing = (value: string): { valid: boolean; suggestion?: string } => {
    return validators.validateSpacing(value);
  };

  const suggestFix = (value: string): string => {
    return autoFix.suggestSpacing(value);
  };

  return { validateElement, validateSpacing, suggestFix };
};

// ✅ Type definitions
export interface ValidationResult {
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

export interface GridValidationOptions {
  strict?: boolean;          // Enforce strict 8px multiples
  allowHalfPixels?: boolean; // Allow 4px values
  context?: 'spacing' | 'sizing' | 'typography';
}

// ✅ Development Tools
export const devTools = {
  // Visual grid overlay for development
  createGridOverlay: (): HTMLElement => {
    const overlay = document.createElement('div');
    overlay.id = 'design-system-grid';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      background-image: 
        linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
      background-size: ${GRID_BASE}px ${GRID_BASE}px;
      opacity: 0.3;
    `;
    return overlay;
  },

  // Log validation results
  logValidation: (componentName: string, result: ValidationResult): void => {
    if (result.errors.length > 0) {
      console.group(`🚨 ${componentName} - Design System Errors`);
      result.errors.forEach(error => console.error('❌', error));
      console.groupEnd();
    }
    
    if (result.warnings.length > 0) {
      console.group(`⚠️ ${componentName} - Design System Warnings`);
      result.warnings.forEach(warning => console.warn('⚠️', warning));
      console.groupEnd();
    }
    
    if (result.suggestions.length > 0) {
      console.group(`💡 ${componentName} - Design System Suggestions`);
      result.suggestions.forEach(suggestion => console.info('💡', suggestion));
      console.groupEnd();
    }
  }
};

export default {
  gridRules,
  uxRules,
  validators,
  autoFix,
  lintingRules,
  useDesignSystemValidation,
  devTools
}; 