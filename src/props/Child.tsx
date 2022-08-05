import { ReactNode } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;

  //This defines that the React component may have child prop
  children?: ReactNode;
}

//This is destructuring the particular property (color)
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      Hi there color: {color}
      Child: {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//This tells TypeScript that we are defining a React component,
//which will give us more properties and methods
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Child Component as React Component: {color}
      <br></br>
      Children: {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
