"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <span className={`${isActive && "font-bold text-red-600"}`}>
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
