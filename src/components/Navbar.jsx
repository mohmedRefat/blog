import { useState } from "react";
import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <ImageComponent
          src="Logo.png"
          alt="Logo"
          className="w-8 h-8"
          w={32}
          h={32}
        />
        <span>MYBlog</span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-[#F5EEDC] transition-all ease-in-out duration-300 ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="px-4 py-2 bg-[#27548A] rounded-3xl text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
     
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-[#27548A] text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
