import clsx from "clsx";
import { PropsWithChildren } from "react";

interface H1Props extends PropsWithChildren {
  className?: string;
}

const H1 = ({ className, children }: H1Props) => {
  return (
    <h1
      className={clsx("scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0", className)}
    >
      {children}
    </h1>
  );
};

export default H1;
