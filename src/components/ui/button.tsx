import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-mjaidri-primary text-mjaidri-light hover:bg-mjaidri-primary/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
        outline: "border border-mjaidri-primary bg-transparent text-mjaidri-primary hover:bg-mjaidri-primary hover:text-mjaidri-light",
        secondary: "bg-mjaidri-accent text-mjaidri-dark hover:bg-mjaidri-accent/80",
        ghost: "hover:bg-mjaidri-accent hover:text-mjaidri-dark",
        link: "text-mjaidri-primary underline-offset-4 hover:underline",
        luxury: "bg-gradient-luxury text-white font-semibold shadow-glow-gold hover:shadow-lg transition-all duration-300",
        soluna: "bg-gradient-soluna text-white font-semibold shadow-glow-gold hover:shadow-lg transition-all duration-300",
        barakah: "bg-gradient-barakah text-white font-semibold shadow-glow-emerald hover:shadow-lg transition-all duration-300",
        verde: "bg-gradient-verde text-white font-semibold shadow-glow-sage hover:shadow-lg transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }