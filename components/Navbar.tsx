"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import MobileSideBar from "./MobileSideBar";

const font = Poppins({ weight: "600", subsets: ["latin"] });
const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSideBar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            Companion Ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3 text-white">
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />

        <UserButton afterSignOutUrl="/sign-up" />
      </div>
    </div>
  );
};

export default Navbar;
