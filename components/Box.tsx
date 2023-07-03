"use client";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-neutral-900 text-white  rounded-md h-fit w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
