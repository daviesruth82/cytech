import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "transparent" | "dark";
}

export function Button({ variant = "dark", className = "", children, ...props }: ButtonProps) {
  
  const variants = {
    dark: "bg-black text-white hover:bg-gray-300",
    transparent: "bg-transparent text-black hover:bg-gray-100 border border-gray-300 dark:text-black dark:hover:bg-gray-800",
  };

  return (
    <button 
      className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}