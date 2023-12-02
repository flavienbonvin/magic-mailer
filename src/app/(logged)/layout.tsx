import Header from "@/components/layout/header";
import { PAGES } from "@/constants";
import { hasValidCookie } from "@/lib/cookie";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Magic Mail",
  description: "Magic emails made easy",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const validCookie = hasValidCookie();
  if (!validCookie) {
    redirect(PAGES.LOGIN);
  }

  return (
    <>
      <Header />
      <main className="container mb-20 flex pt-10">{children}</main>
    </>
  );
}
