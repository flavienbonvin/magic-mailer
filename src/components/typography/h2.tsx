import clsx from "clsx";
import { PropsWithChildren } from "react";

interface H1Props extends PropsWithChildren {
  className?: string;
}

const H2 = ({ className, children }: H1Props) => {
  return (
    <h2 className={clsx("mb-4 text-2xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  );
};

export default H2;
