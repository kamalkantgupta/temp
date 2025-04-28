
import { cn } from "@/lib/utils";
import React from "react";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "relative rounded bg-gray-100 dark:bg-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-gray-900 dark:text-gray-200",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = "Code";
