"use client";

import { LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`border-b w-full transition-all duration-300 ${isSticky ? "fixed top-0 bg-white shadow-md" : "relative"}`}>
        <div
          className="
            mx-auto px-4 py-3
            sm:max-w-[540px]
            md:max-w-[720px]
            lg:max-w-[960px]
            xl:max-w-[1140px]
          "
        >
          <nav className="flex justify-between items-center">
            <div className="text-lg font-bold">FM</div>
            <div className="flex space-x-4 items-center">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Home
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                About
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                FAQ
              </a>
              <Button variant="outline" className="flex items-center space-x-2 rounded-2xl">
              <LogIn size={16} /><Link href="/login">Login</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
