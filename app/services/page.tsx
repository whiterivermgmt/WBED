"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Blueprints & Large Format",
    slug: "blueprintslargeformat",
    description: "High-quality large format printing and blueprints for professionals and businesses.",
    image: "/services/blueprint1.jpg",
  },
  {
    title: "Business Essentials",
    slug: "businessessentials",
    description: "Everything your business needs: letterheads, business cards, envelopes, and more.",
    image: "/services/paper.jpg",
  },
  {
    title: "Copy & Print",
    slug: "copyprint",
    description: "Fast, reliable copy and print services for small and large volumes.",
    image: "/services/copy.jpg",
  },
  {
    title: "FedEx Shipping",
    slug: "fedexshipping",
    description: "Convenient FedEx shipping services right at your local Copy Trolley.",
    image: "/services/van.jpg",
  },
  {
    title: "Graphic Design",
    slug: "graphicdesign",
    description: "Custom graphic design services to bring your ideas to life.",
    image: "/services/graphic.jpg",
  },
  {
    title: "Photo Restoration",
    slug: "photorestoration",
    description: "Restore old or damaged photos with expert care and precision.",
    image: "/services/repair.jpg",
  },
  {
    title: "Promotional Products",
    slug: "promotionalproducts",
    description: "Create branded promotional products to boost your business visibility.",
    image: "/services/offset.jpg",
  },
  {
    title: "Signs & Banners",
    slug: "signsbanners",
    description: "Custom signs and banners for events, businesses, and advertising.",
    image: "/services/banner.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            From printing to design, we offer a full suite of services to help your business look its best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
