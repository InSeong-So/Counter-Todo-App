import { InputHTMLAttributes, FunctionComponent } from 'react';

const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({ children, ...rest }) => (
  <input {...rest}>{children}</input>
);

export default Input;
