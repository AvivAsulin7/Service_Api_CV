import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";
import { GREEN, RED, DELETE } from "../../../constants/constant";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  name?: string;
};

const Button: React.FC<ButtonProps> = ({ children, name, ...rest }) => {
  return (
    <button
      {...rest}
      className={`btn ${name == GREEN && "green"} ${name == RED && "red"}`}
    >
      {children}
    </button>
  );
};

export default Button;
