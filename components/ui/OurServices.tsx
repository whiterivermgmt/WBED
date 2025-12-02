"use client";

import React from "react";
import Link from "next/link";

interface Button {
  text: string;
  href: string;
  variant: "red" | "gray";
}

interface Service {
  title: string;
  image: string;
  description: string;
  buttons: Button[];
}

interface ServicesSectionProps {
  headerTitle?: string;
  headerSubtitle?: string;
  services?: Service[];
}

const copyTrolleyServices: Service[] = [
  {
    title: "Blueprints & Technical Printing",
    image: "/services/blueprint1.jpg",
    description:
      "High-quality blueprint printing for architects, engineers, and construction professionals.",
    buttons: [
      { text: "Blueprint Options", href: "/services/blueprints", variant: "red" },
      { text: "CAD Printing", href: "/services/blueprints", variant: "gray" },
    ],
  },
  {
    title: "Large Format Printing",
    image: "/services/printer.jpg",
    description:
      "Banners, posters, trade show displays, and more for businesses and events.",
    buttons: [
      { text: "Banners", href: "/services/large-format", variant: "red" },
      { text: "Posters", href: "/services/large-format", variant: "gray" },
    ],
  },
  {
    title: "Copy & Print",
    image: "/services/copy.jpg",
    description:
      "Fast and professional copying, black & white or color, for documents of all sizes.",
    buttons: [
      { text: "Copy Services", href: "/services/copyprint", variant: "red" },
      { text: "Print Options", href: "/services/copyprint", variant: "gray" },
    ],
  },
  {
    title: "Graphic Design",
    image: "/services/graphic.jpg",
    description:
      "Creative design solutions for logos, branding, marketing materials, and digital media.",
    buttons: [
      { text: "Design Services", href: "/services/graphic-design", variant: "red" },
      { text: "Illustrations", href: "/services/graphic-design", variant: "gray" },
    ],
  },
  {
    title: "Photo Restoration",
    image: "/services/repair.jpg",
    description:
      "Professional photo restoration, retouching, and digital enhancements.",
    buttons: [
      { text: "Restore Photos", href: "/services/photo-restoration", variant: "red" },
      { text: "Retouch & Edit", href: "/services/photo-restoration", variant: "gray" },
    ],
  },
  {
    title: "Signs",
    image: "/services/banner.jpg",
    description:
      "Custom signs for businesses, events, or personal use with vibrant, durable prints.",
    buttons: [
      { text: "Custom Signs", href: "/services/signs", variant: "red" },
      { text: "Sign Options", href: "/services/signs", variant: "gray" },
    ],
  },
  {
    title: "Banners",
    image: "/services/banner1.jpg",
    description:
      "Large banners for events, advertising, and promotions in various materials and sizes.",
    buttons: [
      { text: "Event Banners", href: "/services/banners", variant: "red" },
      { text: "Promotional Banners", href: "/services/banners", variant: "gray" },
    ],
  },
  {
    title: "Shipping & Packaging",
    image: "/services/machine.jpg",
    description:
      "Reliable shipping, packaging, and mailing services for your business or personal needs.",
    buttons: [
      { text: "Ship Packages", href: "/services/shipping", variant: "red" },
      { text: "Packaging Solutions", href: "/services/shipping", variant: "gray" },
    ],
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  headerTitle = "OUR SERVICES",
  headerSubtitle = "Copy Trolley provides professional printing, design, and shipping services to meet all your business and personal needs.",
  services = copyTrolleyServices,
}) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">{headerTitle}</h2>
          <p className="text-gray-500 text-lg">{headerSubtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onClick={() => {
                if (service.buttons[0]) {
                  window.location.href = service.buttons[0].href; // Navigate to first button link
                }
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-6">{service.description}</p>
                </div>

                {/* Buttons Container */}
                <div className="px-2 sm:px-0 mt-auto">
                  <div className="flex gap-4 justify-center">
                    {service.buttons.map((btn) => (
                      <Link
                        key={btn.text}
                        href={btn.href}
                        className={`flex-1 px-5 py-3 rounded-lg text-sm font-semibold text-white text-center transition-all duration-300 whitespace-nowrap ${
                          btn.variant === "red"
                            ? "bg-gradient-to-r from-red-700 to-red-500 hover:opacity-90"
                            : "bg-gray-400 hover:bg-gray-500"
                        }`}
                        onClick={(e) => e.stopPropagation()} // Prevent card click from overriding button
                      >
                        {btn.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
