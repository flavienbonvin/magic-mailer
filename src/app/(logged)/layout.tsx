import Header from "@/components/layout/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Mail",
  description: "Magic emails made easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mb-20 flex pt-10">{children}</main>
    </>
  );
}