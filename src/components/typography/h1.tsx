import { PropsWithChildren } from "react";

const H1 = ({ children }: PropsWithChildren) => {
  return <h1 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h1>;
};

export default H1;
