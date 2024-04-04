import React from "react";
import { Link } from "react-router-dom";

// Define your styles directly in the component
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  let baseStyle = "rounded px-5 py-2 font-medium focus:outline-none";
  let sizeStyle =
    buttonSize === "btn--large" ? "text-lg px-6 py-3" : "text-base px-5 py-2";
  let styleStyle =
    buttonStyle === "btn--primary"
      ? "bg-white text-gray-800 border border-white"
      : "bg-transparent text-white border border-white";

  const classes = `${baseStyle} ${sizeStyle} ${styleStyle}`;

  return (
    <Link to="/sign-up" className="block text-center">
      <button className={classes} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};
