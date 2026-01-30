import useMediaQuery from "@/utils/useMediaQuery";
import { cn } from "@/utils/utils";
import { useState } from "react";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const matches = useMediaQuery("(min-width:1024px)") && false;

  return (
    <nav className="absolute flex h-28 w-full items-center justify-between p-8">
      {/* <div className="flex h-full w-12 items-center justify-center rounded-full bg-blue-800 text-white">
        <a href="/" className="h-5">
          EZ
        </a>
      </div> */}
      <div></div>
      {matches ? (
        <div className="flex h-full items-center gap-16 pr-16">
          <a className="cursor-pointer rounded-full bg-red-300 px-6 py-3 font-bold text-red-900 transition-transform hover:scale-110">
            Projects
          </a>
          <a className="cursor-pointer rounded-full bg-yellow-200 px-6 py-3 font-bold text-yellow-900 transition-transform hover:scale-110">
            About
          </a>
          <a className="cursor-pointer rounded-full bg-green-200 px-6 py-3 font-bold text-green-900 transition-transform hover:scale-110">
            Blog
          </a>
        </div>
      ) : (
        <div
          onClick={() => setNavOpen((isOpen) => !isOpen)}
          className="group z-50 flex h-full w-8 cursor-pointer flex-col justify-center gap-1.5"
        >
          <span className="h-0.5 w-full bg-black transition-all group-hover:bg-red-500" />
          <span className="h-0.5 w-3/4 bg-black transition-all group-hover:bg-yellow-500" />
          <span className="h-0.5 w-1/2 bg-black transition-all group-hover:bg-green-500" />
        </div>
      )}
      <div
        className={cn(
          "absolute inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-white/60 backdrop-blur backdrop-saturate-50 transition-opacity duration-300",
          "pointer-events-none opacity-0",
          navOpen && !matches && "pointer-events-auto opacity-100",
        )}
      >
        <div className="flex flex-col items-center gap-16">
          <a
            href="/"
            className={cn(
              "ease cursor-pointer rounded-full bg-red-300 px-6 py-3 font-medium text-red-900",
              "scale-0 transition-transform delay-200 duration-200",
              navOpen && !matches && "scale-100",
            )}
          >
            Home
          </a>
          <a
            href="/blogs/01-30-2026"
            className={cn(
              "ease cursor-pointer rounded-full bg-yellow-300 px-6 py-3 font-medium text-yellow-900",
              "scale-0 transition-transform delay-300 duration-200",
              navOpen && !matches && "scale-100",
            )}
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
