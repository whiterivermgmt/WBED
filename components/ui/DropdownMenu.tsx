"use client";

import Link from "next/link";
import React from "react";
import { headerData } from "@/Constants/data";
import { Phone } from "lucide-react";

interface Service {
  title: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
}

interface DropdownProps {
  menuTitle: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ menuTitle }) => {
  let services: Service[] =
    headerData.find((item) => item.title === menuTitle)?.submenu || [];

  if (!services.length) return null;

  return (
    <div className="w-[520px] rounded-xl bg-gray-100/95 shadow-xl ring-1 ring-gray-900/10 overflow-hidden">
      <div className="p-4 grid grid-cols-2 gap-4">
        {services.map((service) => {
          const IconComponent = service.icon || Phone;
          return (
            <Link
              key={service.title}
              href={service.href}
              className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-gray-200 transition w-full"
            >
              <div className="flex w-10 h-10 items-center justify-center bg-gray-200 rounded-lg">
                <IconComponent className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">{service.title}</span>
                <span className="text-sm text-gray-600">
                  {service.description ?? "Professional services."}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
