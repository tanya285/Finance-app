import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Wealth logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Authentication */}
        <div className="flex items-center gap-4">

          {/* When user is NOT signed in */}
          <Show when="signed-out">
            <SignInButton>
              <Button variant="outline">
                Login
              </Button>
            </SignInButton>
          </Show>

          {/* When user IS signed in */}
          <Show when="signed-in">

            {/* Dashboard */}
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">
                  Dashboard
                </span>
              </Button>
            </Link>

            {/* Create Transaction */}
            <Link href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">
                  Create Transaction
                </span>
              </Button>
            </Link>

            {/* User */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />

          </Show>

        </div>
      </nav>
    </header>
  );
};

export default Header;