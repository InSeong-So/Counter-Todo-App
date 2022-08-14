import { ButtonHTMLAttributes, FunctionComponent } from 'react';

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <button {...rest}>{children}</button>
);

export default Button;
