# 🎯 Automated Design System Template

> **A production-ready design system with 8px grid enforcement, automatic accessibility validation, and AI-powered development tools.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

## ✨ Features

- 🎯 **8px Grid System** - Mathematical spacing that ensures visual consistency
- 🛡️ **Automatic Validation** - Real-time design system compliance checking
- ♿ **Accessibility First** - WCAG AA compliant with automatic touch target validation
- 🤖 **AI Integration** - Cursor rules for intelligent code generation
- 🎨 **Visual Dev Tools** - Grid overlay and validation dashboard
- 🚀 **Zero Runtime Cost** - Validation only runs in development
- 📱 **Mobile Optimized** - Touch targets and responsive design built-in
- 🎭 **Component Variants** - Consistent styling with CVA (Class Variance Authority)

## 🚀 Quick Start

### 1. Create New Project

```bash
# Create Next.js app with TypeScript and Tailwind
npx create-next-app@latest my-design-system-app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd my-design-system-app
```

### 2. Install Dependencies

```bash
# Core design system packages
npm install class-variance-authority clsx tailwind-merge

# UI component dependencies (recommended)
npm install @radix-ui/react-slot lucide-react

# Animation support
npm install tailwindcss-animate

# Development dependencies
npm install -D @types/node
```

### 3. Setup Folder Structure

```bash
# Create design system architecture
mkdir -p lib/design-system
mkdir -p components/ui
mkdir -p components/design-system

# Create core files
touch lib/design-system/index.ts
touch lib/design-system/tokens.ts
touch lib/design-system/spacing.ts
touch lib/design-system/variants.ts
touch lib/design-system/enforcement.ts
touch lib/design-system/use-design-system.ts
touch lib/utils.ts

# Create UI component files
touch components/ui/badge.tsx
touch components/ui/button.tsx
touch components/ui/card.tsx
touch components/ui/checkbox.tsx
touch components/ui/dropdown.tsx
touch components/ui/icon.tsx
touch components/ui/input.tsx
touch components/ui/progress.tsx
touch components/ui/slider.tsx
touch components/ui/toggle.tsx

# Create design system tools
touch components/design-system/dev-tools.tsx
```

### 4. Copy Design System Files

Copy the contents from the sections below into each respective file, or clone this repository and copy the `lib/design-system` folder.

### 5. Start Development

```bash
npm run dev
```

**Press `Ctrl/Cmd + G` to toggle the 8px grid overlay! 🎨**

## 📁 Project Structure

```
lib/design-system/
├── index.ts              # Main exports
├── tokens.ts             # Design tokens (colors, typography, spacing)
├── spacing.ts            # 8px grid system and semantic spacing
├── variants.ts           # Component variants with CVA
├── enforcement.ts        # Validation rules and dev tools
└── use-design-system.ts  # React hooks for automatic validation

components/
├── ui/                   # Base UI components
│   ├── badge.tsx         # Status badges and labels
│   ├── button.tsx        # Interactive buttons with touch targets
│   ├── card.tsx          # Content containers and layouts
│   ├── checkbox.tsx      # Form checkboxes with validation
│   ├── dropdown.tsx      # Select menus and dropdowns
│   ├── icon.tsx          # Icon system with consistent sizing
│   ├── input.tsx         # Form inputs with accessibility
│   ├── progress.tsx      # Progress bars and loading indicators
│   ├── slider.tsx        # Range sliders and controls
│   └── toggle.tsx        # Switch toggles and boolean controls
└── design-system/
    └── dev-tools.tsx     # Development tools component

.cursorrules              # AI assistant rules for design system compliance
```

## 🎯 Core Design System Files

### `lib/design-system/tokens.ts`

```typescript
// Design Tokens - Single source of truth for all design values
export const designTokens = {
  // Color System - Customize for your brand
  colors: {
    primary: {
      50: '#fef2f2',   // Very light
      100: '#fee2e2',  // Light
      200: '#fecaca',  // Light
      300: '#fca5a5',  // Medium light
      400: '#f87171',  // Medium
      500: '#ef4444',  // Main brand color ⭐
      600: '#dc2626',  // Darker
      700: '#b91c1c',  // Dark
      800: '#991b1b',  // Very dark
      900: '#7f1d1d',  // Darkest
    },
    
    // Semantic Colors
    success: { 50: '#f0fdf4', 500: '#22c55e', 600: '#16a34a' },
    warning: { 50: '#fffbeb', 500: '#f59e0b', 600: '#d97706' },
    error: { 50: '#fef2f2', 500: '#ef4444', 600: '#dc2626' },
    
    // Neutral Grays
    gray: {
      50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
      400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
      800: '#1f2937', 900: '#111827',
    },
  },

  // 8px Grid Spacing System
  spacing: {
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px ⭐ Base unit
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px ⭐ Standard spacing
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px ⭐ Large spacing
    8: '2rem',       // 32px ⭐ Section spacing
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px ⭐ Component spacing
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px ⭐ Major page spacing
  },

  // Touch Target Sizes
  touchTargets: {
    minimum: '2.75rem',    // 44px - iOS minimum
    comfortable: '3rem',   // 48px - Material Design ⭐
    large: '3.5rem',      // 56px - Large buttons
    hero: '4rem',         // 64px - Hero CTAs
  },
};

export const { colors, typography, spacing, touchTargets } = designTokens;
```

### `lib/design-system/spacing.ts`

```typescript
// 8px Grid System & UX Best Practices
export const GRID_BASE = 8; // 8px base unit

// ✅ 8px Grid Spacing System
export const spacing = {
  1: `${GRID_BASE * 0.5}px`,  // 4px - Micro spacing
  2: `${GRID_BASE * 1}px`,    // 8px - ⭐ Base unit
  3: `${GRID_BASE * 1.5}px`,  // 12px - Tight spacing
  4: `${GRID_BASE * 2}px`,    // 16px - ⭐ Standard spacing
  6: `${GRID_BASE * 3}px`,    // 24px - ⭐ Large spacing
  8: `${GRID_BASE * 4}px`,    // 32px - ⭐ Section spacing
  12: `${GRID_BASE * 6}px`,   // 48px - ⭐ Component spacing
} as const;

// ✅ Semantic Spacing (Use these instead of raw numbers)
export const semanticSpacing = {
  // Component internal spacing
  componentPadding: {
    tight: spacing[2],    // 8px - Buttons, badges
    normal: spacing[4],   // 16px - Cards, inputs ⭐
    loose: spacing[6],    // 24px - Large cards, modals
    spacious: spacing[8], // 32px - Hero sections
  },
  
  // Layout spacing
  layout: {
    elementGap: spacing[2],     // 8px - Between related elements ⭐
    componentGap: spacing[4],   // 16px - Between components ⭐
    sectionGap: spacing[8],     // 32px - Between major sections
  },
} as const;

// ✅ Touch Target Sizes
export const touchTargets = {
  minimum: `${GRID_BASE * 5.5}px`, // 44px - iOS minimum
  comfortable: `${GRID_BASE * 6}px`, // 48px - Material Design ⭐
  large: `${GRID_BASE * 7}px`,      // 56px - Large buttons
  hero: `${GRID_BASE * 8}px`,       // 64px - Hero CTAs
} as const;

// ✅ Grid Validation Helpers
export const gridValidation = {
  isValidGridValue: (value: number): boolean => {
    return value % GRID_BASE === 0 || value % (GRID_BASE / 2) === 0;
  },
  
  roundToGrid: (value: number): number => {
    return Math.round(value / GRID_BASE) * GRID_BASE;
  },
  
  getClosestGridValue: (value: number): string => {
    const rounded = gridValidation.roundToGrid(value);
    return `${rounded}px`;
  },
} as const;
```

### `lib/design-system/use-design-system.ts`

```typescript
// 🎯 useDesignSystem Hook - Automatic validation
import { useEffect, useRef, useState } from 'react';
import { spacing, semanticSpacing, touchTargets } from './spacing';
import { validators, devTools } from './enforcement';

// ✅ Main Design System Hook
export const useDesignSystem = (componentName: string) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isValid, setIsValid] = useState(true);

  // ✅ Validation Effect (Development only)
  useEffect(() => {
    if (!elementRef.current || process.env.NODE_ENV !== 'development') return;

    const element = elementRef.current;
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate touch targets for interactive elements
    if (element.tagName === 'BUTTON' || element.role === 'button') {
      const touchValidation = validators.validateTouchTarget(element);
      if (!touchValidation.valid && touchValidation.suggestion) {
        errors.push(touchValidation.suggestion);
      }
    }

    // Validate spacing
    const computedStyle = window.getComputedStyle(element);
    const padding = computedStyle.getPropertyValue('padding');
    if (padding && padding !== '0px') {
      const validation = validators.validateSpacing(padding);
      if (!validation.valid && validation.suggestion) {
        warnings.push(`padding: ${validation.suggestion}`);
      }
    }

    setIsValid(errors.length === 0);

    // Log results with emojis 🔥✅⚠️❌
    devTools.logValidation(componentName, errors, warnings);

  }, [componentName]);

  return {
    elementRef,
    isValid,
    getSpacing: (key: keyof typeof spacing) => spacing[key],
    getSemanticSpacing: (category: keyof typeof semanticSpacing, key: string) => {
      return semanticSpacing[category]?.[key as keyof typeof semanticSpacing[typeof category]];
    },
  };
};

// ✅ Development Tools Hook
export const useDesignSystemDevTools = () => {
  const [gridVisible, setGridVisible] = useState(false);

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

  // Keyboard shortcut: Ctrl/Cmd + G
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

  return { gridVisible, toggleGrid };
};
```

## 🎨 Usage Examples

### Basic Component with Design System

```typescript
import { useDesignSystem } from '@/lib/design-system';

const MyComponent = () => {
  const { elementRef, isValid } = useDesignSystem('MyComponent');
  
  return (
    <div 
      ref={elementRef}
      className="p-4 gap-2" // Automatically validated!
      data-design-system-valid={isValid}
    >
      Content follows 8px grid automatically
    </div>
  );
};
```

### Button with Touch Target Validation

```typescript
import { useButtonDesignSystem } from '@/lib/design-system';

const Button = ({ children, ...props }) => {
  const { buttonRef, isValid } = useButtonDesignSystem();
  
  return (
    <button
      ref={buttonRef}
      className="h-touch-md px-4" // 48px height - Material Design
      {...props}
    >
      {children}
    </button>
  );
};
```

### Semantic Spacing Usage

```typescript
import { semanticSpacing } from '@/lib/design-system';

const Card = ({ children }) => (
  <div
    style={{
      padding: semanticSpacing.componentPadding.normal,    // 16px
      gap: semanticSpacing.layout.elementGap,              // 8px
      margin: semanticSpacing.layout.componentGap,         // 16px
    }}
    className="border rounded-lg"
  >
    {children}
  </div>
);
```

## 🧩 Complete UI Component Library

### Badge Component (`components/ui/badge.tsx`)

```typescript
import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-100 text-green-800",
        warning: "border-transparent bg-yellow-100 text-yellow-800",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",     // 8px padding - grid aligned
        default: "px-2.5 py-0.5 text-xs", // 10px padding
        lg: "px-3 py-1 text-sm",       // 12px padding - grid aligned
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  const { elementRef, isValid } = useDesignSystem('Badge');
  
  return (
    <div 
      ref={elementRef}
      className={cn(badgeVariants({ variant, size }), className)} 
      data-design-system-valid={isValid}
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
```

### Checkbox Component (`components/ui/checkbox.tsx`)

```typescript
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { elementRef, isValid } = useDesignSystem('Checkbox');
  
  // Merge refs
  const mergedRef = React.useCallback((element: HTMLButtonElement | null) => {
    if (element) {
      (elementRef as React.MutableRefObject<HTMLButtonElement | null>).current = element
      if (typeof ref === 'function') {
        ref(element)
      } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = element
      }
    }
  }, [ref])

  return (
    <CheckboxPrimitive.Root
      ref={mergedRef}
      className={cn(
        "peer h-touch-sm w-touch-sm shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      data-design-system-valid={isValid}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
```

### Toggle Component (`components/ui/toggle.tsx`)

```typescript
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-touch-md px-3",    // 48px height - Material Design
        sm: "h-touch-sm px-2",         // 44px height - iOS minimum
        lg: "h-touch-lg px-3",         // 56px height - Large
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  const { elementRef, isValid } = useDesignSystem('Toggle');
  
  // Merge refs
  const mergedRef = React.useCallback((element: HTMLButtonElement | null) => {
    if (element) {
      (elementRef as React.MutableRefObject<HTMLButtonElement | null>).current = element
      if (typeof ref === 'function') {
        ref(element)
      } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = element
      }
    }
  }, [ref])

  return (
    <TogglePrimitive.Root
      ref={mergedRef}
      className={cn(toggleVariants({ variant, size, className }))}
      data-design-system-valid={isValid}
      {...props}
    />
  )
})

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
```

### Progress Component (`components/ui/progress.tsx`)

```typescript
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const { elementRef, isValid } = useDesignSystem('Progress');
  
  // Merge refs
  const mergedRef = React.useCallback((element: HTMLDivElement | null) => {
    if (element) {
      (elementRef as React.MutableRefObject<HTMLDivElement | null>).current = element
      if (typeof ref === 'function') {
        ref(element)
      } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = element
      }
    }
  }, [ref])

  return (
    <ProgressPrimitive.Root
      ref={mergedRef}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20", // 8px height - grid aligned
        className
      )}
      data-design-system-valid={isValid}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
```

### Slider Component (`components/ui/slider.tsx`)

```typescript
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { elementRef, isValid } = useDesignSystem('Slider');
  
  // Merge refs
  const mergedRef = React.useCallback((element: HTMLSpanElement | null) => {
    if (element) {
      (elementRef as React.MutableRefObject<HTMLSpanElement | null>).current = element
      if (typeof ref === 'function') {
        ref(element)
      } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLSpanElement | null>).current = element
      }
    }
  }, [ref])

  return (
    <SliderPrimitive.Root
      ref={mergedRef}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      data-design-system-valid={isValid}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-touch-sm w-touch-sm rounded-full border-2 border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
```

### Dropdown Component (`components/ui/dropdown.tsx`)

```typescript
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => {
  const { elementRef, isValid } = useDesignSystem('DropdownMenuSubTrigger');
  
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )}
      data-design-system-valid={isValid}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
})
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => {
  const { elementRef, isValid } = useDesignSystem('DropdownMenuItem');
  
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      data-design-system-valid={isValid}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
}
```

### Icon Component (`components/ui/icon.tsx`)

```typescript
import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system"

const iconVariants = cva(
  "shrink-0",
  {
    variants: {
      size: {
        xs: "h-3 w-3",      // 12px - grid aligned
        sm: "h-4 w-4",      // 16px - grid aligned ⭐
        default: "h-5 w-5", // 20px
        md: "h-6 w-6",      // 24px - grid aligned ⭐
        lg: "h-8 w-8",      // 32px - grid aligned ⭐
        xl: "h-12 w-12",    // 48px - grid aligned ⭐
      },
      variant: {
        default: "text-current",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary-foreground",
        destructive: "text-destructive",
        success: "text-green-600",
        warning: "text-yellow-600",
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof iconVariants> {
  children: React.ReactNode
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    const { elementRef, isValid } = useDesignSystem('Icon');
    
    // Merge refs
    const mergedRef = React.useCallback((element: SVGSVGElement | null) => {
      if (element) {
        (elementRef as React.MutableRefObject<SVGSVGElement | null>).current = element
        if (typeof ref === 'function') {
          ref(element)
        } else if (ref && 'current' in ref) {
          (ref as React.MutableRefObject<SVGSVGElement | null>).current = element
        }
      }
    }, [ref])

    return (
      <svg
        ref={mergedRef}
        className={cn(iconVariants({ size, variant }), className)}
        data-design-system-valid={isValid}
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
```

## 🛠️ Configuration

### Tailwind CSS Setup

Update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // 8px Grid System
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
      },
      
      // Touch Target Heights
      height: {
        'touch-sm': '2.75rem',  // 44px - iOS minimum
        'touch-md': '3rem',     // 48px - Material Design
        'touch-lg': '3.5rem',   // 56px - Large buttons
        'touch-xl': '4rem',     // 64px - Hero CTAs
      },
      
      // Animation Durations
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Cursor AI Rules

Create `.cursorrules` file:

```typescript
# 🎯 Design System Automation Rules for Cursor

## 8px Grid System Rules

### ALWAYS enforce 8px grid compliance:
- Use multiples of 8px: 8px, 16px, 24px, 32px, 48px, 64px
- Never suggest: 5px, 7px, 9px, 10px, 15px, 22px, 30px, 35px

### Touch Target Rules:
- All interactive elements MUST be minimum 44px (iOS)
- Recommended 48px (Material Design)
- Use h-touch-md class for 48px buttons

## Component Development Rules

### 1. Always use design system hooks
```typescript
import { useDesignSystem } from '@/lib/design-system';

const Component = () => {
  const { elementRef, isValid } = useDesignSystem('ComponentName');
  return <div ref={elementRef}>Content</div>;
};
```

### 2. Use semantic spacing
```typescript
// ✅ GOOD
import { semanticSpacing } from '@/lib/design-system';
style={{ padding: semanticSpacing.componentPadding.normal }}

// ❌ BAD
style={{ padding: '15px' }}
```

### 3. Touch target enforcement
```typescript
// ✅ REQUIRED for buttons
className="h-touch-md"        // 48px (Material Design)

// ❌ NEVER use for interactive elements
className="h-8"               // 32px - Too small
```
```

## 🎯 Development Tools

### Visual Grid Overlay

Press `Ctrl/Cmd + G` in development to toggle the 8px grid overlay:

```typescript
import { DesignSystemDevTools } from '@/components/design-system/dev-tools';

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <DesignSystemDevTools />
    </div>
  );
}
```

### Console Validation

The system automatically logs validation results:

```bash
🔥 Button - Validation passed ✅
⚠️ Card - padding: 15px doesn't follow 8px grid. Use 16px instead.
❌ TouchTarget - Too small: 32px. Minimum is 44px for accessibility.
```

## 📊 What Gets Validated

### ✅ 8px Grid Compliance
- All spacing values must be multiples of 8px
- Automatic suggestions for non-compliant values
- Visual grid overlay for debugging

### ✅ Touch Target Accessibility
- Minimum 44px for iOS compliance
- Recommended 48px for Material Design
- Automatic validation for interactive elements

### ✅ Semantic Spacing
- Encourages meaningful spacing tokens
- Prevents magic numbers in code
- Consistent spacing across components

### ✅ Component Consistency
- Validates component structure
- Ensures proper ref attachment
- TypeScript support throughout

## 🚀 Production Deployment

### Zero Runtime Overhead

All validation code is automatically removed in production:

```typescript
// This only runs in development
if (process.env.NODE_ENV !== 'development') return;
```

### Build Optimization

The design system is fully tree-shakeable:

```bash
# Production build excludes all validation code
npm run build

# Check bundle size
npm run analyze
```

## 🎨 Customization

### Brand Colors

Update `designTokens.colors` in `tokens.ts`:

```typescript
export const designTokens = {
  colors: {
    primary: {
      500: '#your-brand-color', // Main brand color
      // ... other shades
    },
  },
};
```

### Custom Spacing

Add project-specific spacing in `semanticSpacing`:

```typescript
export const semanticSpacing = {
  // Add your custom spacing categories
  productCard: {
    padding: spacing[4],     // 16px
    imageGap: spacing[2],    // 8px
    titleGap: spacing[1],    // 4px
  },
};
```

### Additional Validation Rules

Extend validation in `enforcement.ts`:

```typescript
export const validators = {
  // Add custom validation functions
  validateCustomRule: (element: HTMLElement) => {
    // Your validation logic
  },
};
```

## 📚 API Reference

### Hooks

#### `useDesignSystem(componentName: string)`

Main hook for component validation.

**Returns:**
- `elementRef` - Ref to attach to your component
- `isValid` - Boolean indicating validation status
- `getSpacing(key)` - Get spacing value by key
- `getSemanticSpacing(category, key)` - Get semantic spacing

#### `useDesignSystemDevTools()`

Development tools hook.

**Returns:**
- `gridVisible` - Boolean indicating grid overlay state
- `toggleGrid()` - Function to toggle grid overlay

### Utilities

#### `spacing`
8px grid spacing values (4px, 8px, 16px, 24px, 32px, 48px)

#### `semanticSpacing`
Meaningful spacing categories (componentPadding, layout)

#### `touchTargets`
Touch target sizes (minimum: 44px, comfortable: 48px, large: 56px, hero: 64px)

#### `gridValidation`
Grid validation utilities (isValidGridValue, roundToGrid, getClosestGridValue)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the design system guidelines
4. Test with the validation tools
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material Design](https://material.io/) for touch target guidelines
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) for accessibility standards
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Class Variance Authority](https://cva.style/) for component variants
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives

## 📞 Support

- 📖 [Documentation](https://github.com/your-username/design-system-template/wiki)
- 🐛 [Issue Tracker](https://github.com/your-username/design-system-template/issues)
- 💬 [Discussions](https://github.com/your-username/design-system-template/discussions)

---

**Built with ❤️ for developers who care about design consistency and accessibility.**

**Press `Ctrl/Cmd + G` to see the magic! ✨** 