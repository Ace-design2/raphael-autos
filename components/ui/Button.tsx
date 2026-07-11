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
      variantClasses = "bg-cooliocns-gold text-cooliocns-white hover:bg-[#b08d20] hover:scale-[1.02] focus-visible:outline-cooliocns-gold";
      textClasses = "text-cooliocns-white";
      break;
    case "solid-black":
      variantClasses = "bg-cooliocns-primary-color text-cooliocns-white hover:bg-[#222222] hover:scale-[1.02] focus-visible:outline-cooliocns-primary-color";
      textClasses = "text-cooliocns-white";
      break;
    case "outline-white":
      variantClasses = "border border-solid border-cooliocns-white text-cooliocns-white hover:bg-cooliocns-white hover:text-cooliocns-primary-color focus-visible:outline-cooliocns-white";
      textClasses = "text-cooliocns-white group-hover:text-cooliocns-primary-color transition-colors duration-300";
      break;
    case "outline-black":
      variantClasses = "border border-solid border-cooliocns-primary-color text-cooliocns-primary-color hover:bg-cooliocns-primary-color hover:text-cooliocns-white focus-visible:outline-cooliocns-primary-color";
      textClasses = "text-cooliocns-primary-color group-hover:text-cooliocns-white transition-colors duration-300";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`all-unset box-border inline-flex items-center justify-center gap-1.5 px-6 py-2.5 relative transition-all duration-300 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 group ${variantClasses} ${className}`}
      {...dataAttributes}
    >
      <span className={`relative w-fit font-body font-[number:var(--body-font-weight)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] ${textClasses}`}>
        {children || label}
      </span>
    </button>
  );
};

export default Button;
