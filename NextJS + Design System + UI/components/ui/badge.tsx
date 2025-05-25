import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useDesignSystem } from "@/lib/design-system/use-design-system"

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
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(badgeVariants({ variant, size }), className)} 
      data-design-system-valid={isValid}
      {...props} 
    />
  )
}

export { Badge, badgeVariants } 