import Header from "@/components/layout/header";
import { AUTH_COOKIE, PAGES } from "@/constants";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Magic Mail",
  description: "Magic emails made easy",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const validCookie = cookies().has(AUTH_COOKIE);
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
