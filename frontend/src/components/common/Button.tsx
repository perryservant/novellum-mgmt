import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn("border text-white rounded-lg", "w-fit py-1 px-4", className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);
