"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <motion.div
            className="flex-1 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/locations/image.jpg" // Replace with any image from public/services/
              alt="About Copy Trolley"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-64 lg:h-80"
            />
          </motion.div>

          {/* Text + Button */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Copy Trolley has been proudly serving Bedford, Paoli, and surrounding areas with top-quality printing, design, and shipping services.
              We combine modern technology with a personal touch to ensure every project exceeds expectations.
            </p>
            <Link href="/about" className="inline-block mt-4 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition">
              Learn More
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
