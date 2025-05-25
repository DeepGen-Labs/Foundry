// Design Tokens - Single source of truth for all design values
export const designTokens = {
  // Color System
  colors: {
    // Primary Brand Colors - NOW PURPLE! 💜
    primary: {
      50: '#faf5ff',   // Very light purple
      100: '#f3e8ff',  // Light purple
      200: '#e9d5ff',  // Light purple
      300: '#d8b4fe',  // Medium light purple
      400: '#c084fc',  // Medium purple
      500: '#a855f7',  // Main brand purple 💜
      600: '#9333ea',  // Darker purple
      700: '#7c3aed',  // Dark purple
      800: '#6b21a8',  // Very dark purple
      900: '#581c87',  // Darkest purple
    },
    
    // Secondary Brand Colors - Blue 💙
    secondary: {
      50: '#eff6ff',   // Very light blue
      100: '#dbeafe',  // Light blue
      200: '#bfdbfe',  // Light blue
      300: '#93c5fd',  // Medium light blue
      400: '#60a5fa',  // Medium blue
      500: '#3b82f6',  // Main secondary blue 💙
      600: '#2563eb',  // Darker blue
      700: '#1d4ed8',  // Dark blue
      800: '#1e40af',  // Very dark blue
      900: '#1e3a8a',  // Darkest blue
    },
    
    // Semantic Colors
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    
    // Comprehensive Gray System
    gray: {
      50: '#f9fafb',   // Almost white
      100: '#f3f4f6',  // Very light gray
      200: '#e5e7eb',  // Light gray
      300: '#d1d5db',  // Medium light gray
      400: '#9ca3af',  // Medium gray
      500: '#6b7280',  // Base gray
      600: '#4b5563',  // Dark gray
      700: '#374151',  // Darker gray
      800: '#1f2937',  // Very dark gray
      900: '#111827',  // Almost black
      950: '#030712',  // Darkest gray
    },

    // Alternative Gray Palettes
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },

    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },

    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    
    // Real Estate Specific - Updated with new purple primary
    realEstate: {
      sold: '#22c55e',    // Keep green for sold
      pending: '#f59e0b', // Keep amber for pending
      available: '#a855f7', // Now purple instead of red
      rent: '#8b5cf6',    // Keep purple for rent
    }
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  },

  // Spacing System (8pt grid)
  spacing: {
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  // Blur Effects
  blur: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },

  // Animation & Transitions
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    }
  },

  // Component Specific Tokens
  components: {
    button: {
      height: {
        sm: '2rem',    // 32px
        md: '2.5rem',  // 40px
        lg: '3rem',    // 48px
      },
      padding: {
        sm: '0.5rem 0.75rem',
        md: '0.625rem 1rem',
        lg: '0.75rem 1.5rem',
      }
    },
    input: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      }
    },
    propertyCard: {
      width: '320px',
      imageHeight: '200px',
      borderRadius: '0.5rem',
    }
  }
};

// Export individual token categories for easier imports
export const { colors, typography, spacing, borderRadius, shadows, blur, animation, components } = designTokens;

// CSS Custom Properties Generator
export const generateCSSCustomProperties = () => {
  const cssVars: Record<string, string> = {};
  
  // Convert design tokens to CSS custom properties
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'object') {
      Object.entries(colorValue).forEach(([shade, value]) => {
        cssVars[`--color-${colorName}-${shade}`] = value;
      });
    } else {
      cssVars[`--color-${colorName}`] = colorValue;
    }
  });

  Object.entries(spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  return cssVars;
}; 