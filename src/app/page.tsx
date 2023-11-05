import LoginForm from "@/components/features/home/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-stone-50 to-green-50">
      <Card className="w-4/6 p-6">
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
