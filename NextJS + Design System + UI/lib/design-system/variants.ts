import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button Variants - Consistent button styling across the app
export const buttonVariants = cva(
  // Base styles that apply to all buttons
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-600 text-white shadow hover:bg-green-700",
        warning: "bg-yellow-500 text-white shadow hover:bg-yellow-600",
        realEstate: "bg-red-600 text-white shadow hover:bg-red-700",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded px-2 text-xs",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Card Variants - Property cards, chat bubbles, etc.
export const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        elevated: "shadow-md hover:shadow-lg transition-shadow",
        interactive: "cursor-pointer hover:bg-accent/50 transition-colors",
        property: "overflow-hidden hover:shadow-lg transition-all duration-200",
        chat: "border-none shadow-none",
      },
      size: {
        sm: "p-3",
        default: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
      spacing: {
        none: "p-0",
        tight: "p-2",
        normal: "p-4",
        loose: "p-6",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Input Variants - Forms, search, chat input
export const inputVariants = cva(
  "flex w-full border border-input bg-background text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "rounded-md",
        chat: "rounded-lg border-0 shadow-none focus-visible:ring-1",
        search: "rounded-full pl-10",
        minimal: "border-0 border-b-2 rounded-none bg-transparent",
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm",
        default: "h-9 px-3 py-1",
        lg: "h-11 px-4 py-2",
        xl: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Badge Variants - Status indicators, tags, labels
export const badgeVariants = cva(
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
        info: "border-transparent bg-blue-100 text-blue-800",
        // Real Estate Specific
        forSale: "border-transparent bg-red-100 text-red-800",
        forRent: "border-transparent bg-purple-100 text-purple-800",
        sold: "border-transparent bg-green-100 text-green-800",
        pending: "border-transparent bg-yellow-100 text-yellow-800",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        default: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3 py-1",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Avatar Variants - User profiles, agent photos
export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
      border: {
        none: "",
        default: "ring-2 ring-background",
        thick: "ring-4 ring-background",
      }
    },
    defaultVariants: {
      size: "default",
      border: "none",
    },
  }
);

// Typography Variants - Consistent text styling
export const typographyVariants = cva(
  "",
  {
    variants: {
      variant: {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        blockquote: "mt-6 border-l-2 pl-6 italic",
        code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
      },
    },
  }
);

// Property Card Specific Variants
export const propertyCardVariants = cva(
  "overflow-hidden transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md",
        featured: "bg-white border-2 border-red-200 rounded-lg shadow-md hover:shadow-lg",
        compact: "bg-white border border-gray-200 rounded-md shadow-sm",
      },
      size: {
        sm: "max-w-xs",
        default: "max-w-sm",
        lg: "max-w-md",
        full: "w-full",
      },
      interactive: {
        none: "",
        hover: "hover:scale-[1.02] cursor-pointer",
        click: "active:scale-[0.98] cursor-pointer",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      interactive: "hover",
    },
  }
);

// Status Variants - For property status, user status, etc.
export const statusVariants = cva(
  "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
  {
    variants: {
      status: {
        available: "bg-green-100 text-green-800",
        pending: "bg-yellow-100 text-yellow-800", 
        sold: "bg-gray-100 text-gray-800",
        rented: "bg-purple-100 text-purple-800",
        offline: "bg-red-100 text-red-800",
        online: "bg-green-100 text-green-800",
        busy: "bg-yellow-100 text-yellow-800",
        away: "bg-gray-100 text-gray-800",
      }
    },
  }
);

// Export types for TypeScript autocomplete
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
export type InputVariants = VariantProps<typeof inputVariants>;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export type AvatarVariants = VariantProps<typeof avatarVariants>;
export type TypographyVariants = VariantProps<typeof typographyVariants>;
export type PropertyCardVariants = VariantProps<typeof propertyCardVariants>;
export type StatusVariants = VariantProps<typeof statusVariants>;

// Helper function to combine variants with custom classes
export const createVariant = (baseVariant: any, customClasses?: string) => {
  return (props: any) => cn(baseVariant(props), customClasses);
}; 