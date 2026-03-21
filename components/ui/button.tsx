import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";

    // Base styles
    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      borderRadius: "6px",
      fontWeight: 500,
      fontSize: "14px",
      transition: "all 0.2s",
      cursor: "pointer",
      border: "none",
      outline: "none",
    };

    // Size styles
    const sizeStyles: Record<string, React.CSSProperties> = {
      default: { padding: "10px 16px" },
      sm: { padding: "6px 12px", fontSize: "12px" },
      lg: { padding: "12px 24px", fontSize: "16px" },
      icon: { width: "40px", height: "40px", padding: 0 },
    };

    // Variant styles
    const variantStyles: Record<string, React.CSSProperties> = {
      default: {
        backgroundColor: "#2563EB",
        color: "#FFFFFF",
      },
      destructive: {
        backgroundColor: "#DC2626",
        color: "#FFFFFF",
      },
      outline: {
        backgroundColor: "transparent",
        color: "#2563EB",
        border: "1px solid #E2E8F0",
      },
      secondary: {
        backgroundColor: "#F1F5F9",
        color: "#0F172A",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "#2563EB",
      },
      link: {
        backgroundColor: "transparent",
        color: "#2563EB",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
      },
    };

    // Merge styles
    const finalStyle: React.CSSProperties = {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };

    // Handle disabled state
    if (props.disabled) {
      finalStyle.opacity = 0.5;
      finalStyle.cursor = "not-allowed";
    }

    return (
      <Comp
        ref={ref}
        style={finalStyle}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
