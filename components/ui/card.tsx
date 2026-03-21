import * as React from "react";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        borderRadius: "8px",
        border: "1px solid #E2E8F0",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        ...style,
      }}
      className={className}
      {...props}
    />
  )
);
Card.displayName = "Card";

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ padding: "24px", ...style }}
      className={className}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, style, ...props }, ref) => (
    <h3
      ref={ref}
      style={{ fontSize: "20px", fontWeight: 600, lineHeight: "1.2", margin: 0, ...style }}
      className={className}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, style, ...props }, ref) => (
    <p
      ref={ref}
      style={{ fontSize: "14px", color: "#64748B", margin: 0, ...style }}
      className={className}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ padding: "0 24px 24px", ...style }}
      className={className}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      style={{ display: "flex", justifyContent: "flex-end", gap: "12px", padding: "0 24px 24px", ...style }}
      className={className}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
