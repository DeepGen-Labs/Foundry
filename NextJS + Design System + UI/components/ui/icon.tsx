import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system/use-design-system"

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
    
    return (
      <svg
        ref={ref}
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