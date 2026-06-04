"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm font-light tracking-widest uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none rounded-full",
  {
    variants: {
      variant: {
        default: "text-[#2D3A4A] hover:scale-105",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm:  "h-8 text-xs px-4",
        lg:  "h-11 px-7",
        xl:  "h-12 px-9",
        xxl: "h-14 px-11",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "xxl" },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        "relative",
        liquidbuttonVariants({ variant, size, className })
      )}
      style={{
        background: 'rgba(255,255,255,0.35)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: [
          '0 2px 8px rgba(0,0,0,0.06)',
          'inset 0 1px 1px rgba(255,255,255,0.7)',
          'inset 0 -1px 1px rgba(0,0,0,0.04)',
          '0 0 0 1px rgba(106,154,184,0.18)',
        ].join(', '),
      }}
      {...props}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
    </Comp>
  )
}

export { LiquidButton, liquidbuttonVariants }
