import LoginForm from "@/components/features/home/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AUTH_COOKIE, PAGES } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const validCookie = cookies().has(AUTH_COOKIE);
  if (validCookie) {
    redirect(PAGES.DASHBOARD);
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-stone-50 to-green-50 dark:from-stone-900 dark:to-stone-950">
      <Card className="3xl:w-1/6 w-5/6 p-6 md:w-2/3 lg:w-2/6">
        <CardHeader>
          <CardTitle>Login to access</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
