import { MouseEventHandler } from "react";

export default function Button(props: {
  children?: JSX.Element | string | JSX.Element[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  [x: string]: any;
}) {
  const { children, onClick, ...otherProps } = props;
  return (
    <>
      <button onClick={onClick} {...otherProps}>
        {children}
      </button>
    </>
  );
}
