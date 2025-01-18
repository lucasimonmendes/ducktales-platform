import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b">
      <Link href="/" className="text-2xl font-bold">
        🦆 DuckContent
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/dashboard">
          <Button variant="ghost">Dashboard</Button>
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
