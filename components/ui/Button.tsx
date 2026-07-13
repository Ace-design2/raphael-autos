import React from "react";

type ButtonVariant = "solid-gold" | "solid-black" | "outline-white" | "outline-black";

type ButtonProps = {
  label?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  "data-id"?: string;
  "data-model-id"?: string;
};

export const Button = ({
  label = "Button",
  variant = "solid-gold",
  type = "button",
  onClick,
  disabled = false,
  className = "",
  children,
  ...dataAttributes
}: ButtonProps): React.JSX.Element => {
  // Determine variant classes
  let variantClasses = "";
  let textClasses = "";

  switch (variant) {
    case "solid-gold":
      variantClasses = "bg-[#c9a227] text-white hover:bg-[#a6821b] focus-visible:outline-[#c9a227]";
      textClasses = "text-inherit";
      break;
    case "solid-black":
      variantClasses = "bg-[#111111] text-white hover:bg-[#222222] focus-visible:outline-[#111111]";
      textClasses = "text-inherit";
      break;
    case "outline-white":
      variantClasses = "border border-solid border-white text-white hover:bg-white hover:text-[#111111] focus-visible:outline-white";
      textClasses = "text-inherit";
      break;
    case "outline-black":
      variantClasses = "border border-solid border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white focus-visible:outline-[#111111]";
      textClasses = "text-inherit";
      break;
  }

  const hasPx = className.includes("px-") || className.includes("p-");
  const hasPy = className.includes("py-") || className.includes("p-");
  const defaultPadding = `${hasPx ? "" : "px-6"} ${hasPy ? "" : "py-2"}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`box-border inline-flex items-center justify-center gap-1 ${defaultPadding} relative transition-all duration-300 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap ${variantClasses} ${className}`}
      {...dataAttributes}
    >
      <span className={`relative w-fit mt-[-1.00px] font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] transition-colors duration-300 whitespace-nowrap ${textClasses}`}>
        {children || label}
      </span>
    </button>
  );
};

export default Button;
