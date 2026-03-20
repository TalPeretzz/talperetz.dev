import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonOwnProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  fullWidth?: boolean;
};

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#2C3E50] text-white hover:bg-[#34495E] active:scale-95",
  secondary:
    "border border-[#2C3E50] text-[#2C3E50] bg-white hover:bg-[#F1F5F9] active:scale-95",
  ghost:
    "text-[#2C3E50] hover:underline underline-offset-4 decoration-1",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-8 py-4 text-sm",
  lg: "px-16 py-8 text-lg",
};

export default function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-bold uppercase tracking-widest transition-all duration-300 ease-in-out font-[family-name:var(--font-headline)]",
        "focus-visible:outline-2 focus-visible:outline-[#2C3E50] focus-visible:outline-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <span className="material-symbols-outlined text-lg" aria-hidden="true">
          {icon}
        </span>
      )}
    </Component>
  );
}
