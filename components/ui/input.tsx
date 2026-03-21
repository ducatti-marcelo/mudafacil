import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ style, ...props }, ref) => {
    return (
      <input
        ref={ref}
        style={{
          display: "block",
          width: "100%",
          minHeight: "44px",
          padding: "10px 14px",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "1.5",
          color: "#0F172A",
          backgroundColor: "white",
          border: "1px solid #E2E8F0",
          borderRadius: "6px",
          outline: "none",
          transition: "all 0.2s",
          ...style,
        }}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
