import { redirect } from "next/navigation"; 
import { createClient } from "@/lib/supabase/server";
import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

export default async function LoginPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6">
      <div className="w-full max-w-lg rounded-xl border bg-background p-10 shadow-sm">
        <div className="mb-6 flex flex-col items-center">

  <Image
    src="/logo/logo.svg"
    alt="Logo Sanggar Pelita Medan"
    width={90}
    height={90}
    priority
    className="h-auto"
  />

</div>
        <h1 className="text-center text-3xl font-bold">
        Sanggar Pelita Medan
        </h1>

        <p className="mt-2 text-center text-muted-foreground">
          Community Management System
        </p>

        <LoginForm />
      </div>
    </main>
  );
}