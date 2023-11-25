import Header from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Mail",
  description: "Magic emails made easy",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mb-20 flex flex-col pt-10">{children}</main>
    </>
  );
}
