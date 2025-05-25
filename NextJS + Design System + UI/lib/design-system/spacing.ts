// 8px Grid System & UX Best Practices
// Following Material Design and Apple HIG guidelines

export const GRID_BASE = 8; // 8px base unit

// ✅ 8px Grid Spacing System
export const spacing = {
  // Micro spacing (for fine-tuning)
  px: '1px',
  0.5: `${GRID_BASE * 0.25}px`, // 2px - Use sparingly for borders
  
  // Core 8px grid (ALWAYS use these for layouts)
  1: `${GRID_BASE * 0.5}px`,  // 4px - Micro spacing
  2: `${GRID_BASE * 1}px`,    // 8px - ⭐ Base unit
  3: `${GRID_BASE * 1.5}px`,  // 12px - Tight spacing
  4: `${GRID_BASE * 2}px`,    // 16px - ⭐ Standard spacing
  5: `${GRID_BASE * 2.5}px`,  // 20px - Medium spacing
  6: `${GRID_BASE * 3}px`,    // 24px - ⭐ Large spacing
  8: `${GRID_BASE * 4}px`,    // 32px - ⭐ Section spacing
  10: `${GRID_BASE * 5}px`,   // 40px - Large section spacing
  12: `${GRID_BASE * 6}px`,   // 48px - ⭐ Component spacing
  16: `${GRID_BASE * 8}px`,   // 64px - Major section spacing
  20: `${GRID_BASE * 10}px`,  // 80px - Page section spacing
  24: `${GRID_BASE * 12}px`,  // 96px - ⭐ Major page spacing
  32: `${GRID_BASE * 16}px`,  // 128px - Hero spacing
  40: `${GRID_BASE * 20}px`,  // 160px - Large hero spacing
} as const;

// ✅ UX Best Practice: Semantic Spacing
// Use these instead of raw numbers for better meaning
export const semanticSpacing = {
  // Component internal spacing
  componentPadding: {
    tight: spacing[2],    // 8px - Buttons, badges
    normal: spacing[4],   // 16px - Cards, inputs
    loose: spacing[6],    // 24px - Large cards, modals
    spacious: spacing[8], // 32px - Hero sections
  },
  
  // Layout spacing
  layout: {
    sectionGap: spacing[8],     // 32px - Between major sections
    componentGap: spacing[4],   // 16px - Between related components
    elementGap: spacing[2],     // 8px - Between related elements
    microGap: spacing[1],       // 4px - Between tightly related items
  },
  
  // Real Estate specific spacing
  propertyCard: {
    padding: spacing[4],        // 16px - Internal card padding
    gap: spacing[3],           // 12px - Between card elements
    margin: spacing[4],        // 16px - Between cards
    imageMargin: spacing[2],   // 8px - Around property images
  },
  
  // Chat interface spacing  
  chat: {
    messagePadding: spacing[3], // 12px - Message bubble padding
    messageGap: spacing[2],     // 8px - Between messages
    inputPadding: spacing[4],   // 16px - Chat input padding
    sidebarPadding: spacing[6], // 24px - Sidebar padding
  },
} as const;

// ✅ UX Best Practice: Touch Target Sizes
// Following Apple HIG (44pt) and Material Design (48dp) guidelines
export const touchTargets = {
  minimum: `${GRID_BASE * 5.5}px`, // 44px - iOS minimum
  comfortable: `${GRID_BASE * 6}px`, // 48px - Material Design
  large: `${GRID_BASE * 7}px`,      // 56px - Large buttons
  hero: `${GRID_BASE * 8}px`,       // 64px - Hero CTAs
} as const;

// ✅ UX Best Practice: Content Width Constraints
export const contentWidth = {
  text: {
    optimal: '65ch',  // 45-75 characters for readability
    maximum: '75ch',  // Never exceed this for body text
    minimum: '45ch',  // Minimum before line breaks become awkward
  },
  
  layout: {
    mobile: `${GRID_BASE * 40}px`,    // 320px - Mobile breakpoint
    tablet: `${GRID_BASE * 96}px`,    // 768px - Tablet breakpoint  
    desktop: `${GRID_BASE * 160}px`,  // 1280px - Desktop max-width
    wide: `${GRID_BASE * 200}px`,     // 1600px - Wide screen max-width
  },
  
  propertyGrid: {
    cardMinWidth: `${GRID_BASE * 40}px`, // 320px - Minimum card width
    cardMaxWidth: `${GRID_BASE * 50}px`, // 400px - Maximum card width
    gridGap: spacing[4],                 // 16px - Grid gap
  }
} as const;

// ✅ 8px Grid Validation Helpers
export const gridValidation = {
  // Check if a value follows 8px grid
  isValidGridValue: (value: number): boolean => {
    return value % GRID_BASE === 0 || value % (GRID_BASE / 2) === 0;
  },
  
  // Round to nearest grid value
  roundToGrid: (value: number): number => {
    return Math.round(value / GRID_BASE) * GRID_BASE;
  },
  
  // Convert rem to px for grid validation
  remToPx: (rem: number): number => {
    return rem * 16; // Assuming 16px base font size
  },
  
  // Get closest grid value
  getClosestGridValue: (value: number): string => {
    const rounded = gridValidation.roundToGrid(value);
    return `${rounded}px`;
  },
} as const;

// ✅ UX Best Practice: Responsive Breakpoints (8px grid aligned)
export const breakpoints = {
  xs: `${GRID_BASE * 40}px`,   // 320px - Small phones
  sm: `${GRID_BASE * 60}px`,   // 480px - Large phones
  md: `${GRID_BASE * 96}px`,   // 768px - Tablets
  lg: `${GRID_BASE * 128}px`,  // 1024px - Small desktops
  xl: `${GRID_BASE * 160}px`,  // 1280px - Large desktops
  '2xl': `${GRID_BASE * 200}px`, // 1600px - Extra large screens
} as const;

// ✅ UX Best Practice: Z-Index Scale
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
  maximum: 9999,
} as const;

// ✅ Accessibility: Focus Ring Specifications
export const accessibility = {
  focusRing: {
    width: '2px',
    offset: '2px',
    color: 'hsl(var(--primary))',
    style: 'solid',
  },
  
  minimumContrast: {
    normal: 4.5,  // WCAG AA
    large: 3,     // WCAG AA for large text
    enhanced: 7,  // WCAG AAA
  },
  
  animationDuration: {
    fast: '150ms',     // Quick micro-interactions
    normal: '250ms',   // Standard transitions
    slow: '350ms',     // Content changes
    respectsMotion: 'prefers-reduced-motion: reduce', // Accessibility
  }
} as const;

// ✅ Export utility functions
export const spacingUtils = {
  // Create padding classes
  padding: (size: keyof typeof spacing) => `p-[${spacing[size]}]`,
  paddingX: (size: keyof typeof spacing) => `px-[${spacing[size]}]`,
  paddingY: (size: keyof typeof spacing) => `py-[${spacing[size]}]`,
  
  // Create margin classes
  margin: (size: keyof typeof spacing) => `m-[${spacing[size]}]`,
  marginX: (size: keyof typeof spacing) => `mx-[${spacing[size]}]`,
  marginY: (size: keyof typeof spacing) => `my-[${spacing[size]}]`,
  
  // Create gap classes
  gap: (size: keyof typeof spacing) => `gap-[${spacing[size]}]`,
  gapX: (size: keyof typeof spacing) => `gap-x-[${spacing[size]}]`,
  gapY: (size: keyof typeof spacing) => `gap-y-[${spacing[size]}]`,
};

// ✅ Type exports for TypeScript
export type SpacingKey = keyof typeof spacing;
export type SemanticSpacingKey = keyof typeof semanticSpacing;
export type BreakpointKey = keyof typeof breakpoints; 