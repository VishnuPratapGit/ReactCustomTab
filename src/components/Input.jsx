import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ type = "text", placeholder, className, ...props }, ref) => {
    return (
      <input
        id={useId()}
        ref={ref}
        placeholder={placeholder}
        type={type}
        {...props}
        className={`dark:bg-neutral-800 transition-opacity duration-800 border-2 border-neutral-600 dark:border-transparent focus:border-neutral-950  dark:focus:border-neutral-700 font-semibold font-quicksand placeholder-neutral-600 placeholder:text-sm p-1 px-3 leading-none outline-none ${className}`}
      />
    );
  }
);

export default Input;
