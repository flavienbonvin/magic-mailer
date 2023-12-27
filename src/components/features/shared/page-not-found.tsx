import H1 from "@/components/typography/h1";
import Muted from "@/components/typography/muted";
import { PropsWithChildren } from "react";

const PageNotFound = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-base font-semibold">404</p>
        <H1 className="pb-0">Page not found</H1>
        <Muted>Sorry, we couldn&apos;t find the page you&apos;re looking for.</Muted>
        <div className="mt-10 flex items-center justify-center gap-x-6">{children}</div>
      </div>
    </main>
  );
};

export default PageNotFound;
