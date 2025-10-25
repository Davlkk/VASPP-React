import React from "react";

interface BlueButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function BlueButton({
  children,
  className,
  type = "button",
  disabled = false,
}: BlueButtonProps) {
  return (
    <button
      className={`p-3 rounded-md text-white text-lg font-medium bg-gradient-to-b from-[#001DD9]/40 to-[#000E6B]/10 hover:from-[#001DD9]/60 hover:to-[#000E6B]/30 transition-all duration-300 ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BlueButton;
