import Link from "next/link";
import React from "react";

interface HeaderProps {
  title: string;
  buttonHref: string;
  buttonText: string;
}

const Header: React.FC<HeaderProps> = ({ title, buttonHref, buttonText }) => {
  return (
    <header className="flex justify-between mb-5">
      <h1 className="text-2xl">{title}</h1>
      <Link
        href={buttonHref}
        className="border border-slate-300 
      text-slate-300 px-2 py-1 
      rounded hover:bg-slate-700 
      focus-within:bg-slate-700 outline-none"
      >
        {buttonText}
      </Link>
    </header>
  );
};

export default Header;
