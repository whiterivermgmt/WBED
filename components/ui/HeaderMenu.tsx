"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import { headerData } from "@/Constants/data";

const HeaderMenu: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathName = usePathname();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="hidden md:flex items-center relative z-50">
      {/* Outer pill container with gradient and rounded corners */}
      <div
        className="flex h-12 rounded-[28px] relative"
        style={{ background: "linear-gradient(to bottom, #999999, #2e2e2e)" }}
      >
        {headerData.map((item, index) => {
          const isActive = pathName === item.href;
          const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

          const roundedClass =
            index === 0 ? "rounded-l-[28px]" :
            index === headerData.length - 1 ? "rounded-r-[28px]" : "";

          return (
            <div
              key={item.title}
              className={`relative group ${roundedClass}`}
              onMouseEnter={() => hasSubmenu && setOpenIndex(index)}
              onMouseLeave={() => hasSubmenu && setOpenIndex(prev => (prev === index ? null : prev))}
            >
              {/* Inner pill background wrapper */}
             <div
  className={`h-12 flex items-center px-6 font-bold text-base ${roundedClass} overflow-hidden border border-transparent cursor-pointer transition-colors duration-200
    ${isActive ? "bg-[#f6efe5] text-[#c21a1a]" : "text-white"}
    group-hover:bg-[#f6efe5] group-hover:text-[#c21a1a]`}
>

                <Link
                  href={item.href}
                  className="flex items-center gap-2 h-full"
                >
                  <span>{item.title}</span>
                  {hasSubmenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200
                        ${isActive ? "rotate-180 text-red-600" : "text-white"}
                        group-hover:text-[#c21a1a]`}
                    />
                  )}
                </Link>
              </div>

              {/* Dropdown positioned relative to pill with shadow */}
              {hasSubmenu && (
                <div
                  className="absolute top-full left-0 z-20 rounded-lg shadow-lg w-full"
                  style={{
                    pointerEvents: openIndex === index ? "auto" : "none",
                    opacity: openIndex === index ? 1 : 0,
                    transform: openIndex === index ? "translateY(1px)" : "translateY(-10px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}
                >
                  <DropdownMenu menuTitle={item.title} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default HeaderMenu;
