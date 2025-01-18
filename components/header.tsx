import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { auth } from "@/auth";
import { SignOutButton } from "./logout-button";

export default async function Header() {
  const session = await auth();

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b">
      <Link href="/" className="text-2xl font-bold">
        🦆 DuckContent
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/dashboard">
          <Button variant="ghost">Dashboard</Button>
        </Link>
        {!session?.user ? (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        ) : (
          <SignOutButton />
        )}{" "}
        <ModeToggle />
      </nav>
    </header>
  );
}
