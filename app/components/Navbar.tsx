"use client"

import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { usePathname } from "next/navigation";

export function Navbar() {
  const location = usePathname();
  console.log(location);

  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className="md:cols-span-3">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Lupleg<span className="text-violet-500">UI</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
    </nav>
  );
}
