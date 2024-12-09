import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  state?: "default" | "hover" | "disabled" | "active" | "loading";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Add custom className prop
}

const Button: React.FC<ButtonProps> = ({
  variant,
  state = "default",
  children,
  onClick,
  className = "", // Default to an empty string
}) => {
  // Define base styles
  const baseStyles =
    "small-font-size rounded-full px-6 py-2 font-semibold flex items-center justify-center transition-all duration-200";

  // Define variant styles
  const variantStyles =
    variant === "primary"
      ? "text-white bg-green-500"
      : "text-gray-700 bg-white border border-gray-300";

  // Define state styles
  const stateStyles = {
    default: "",
    hover: "hover:bg-green-600 hover:text-white",
    disabled: "opacity-50 cursor-not-allowed",
    active: "bg-green-700",
    loading: "opacity-75 cursor-wait",
  };

  // Combine styles
  const combinedStyles = `${baseStyles} ${variantStyles} ${stateStyles[state]} ${className}`;

  return (
    <button
      className={combinedStyles}
      onClick={state !== "disabled" ? onClick : undefined}
      disabled={state === "disabled"}
    >
      {state === "loading" && (
        <svg
          className="animate-spin mr-2 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4c-4.41 0-8 3.59-8 8z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
