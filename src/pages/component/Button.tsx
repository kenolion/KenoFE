import { FunctionComponent, MouseEventHandler } from "react";

interface ButtonProp {
  text: String;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProp> = ({ text, onClick }) => {
  return <button onClick={onClick}></button>;
};

export default Button;
