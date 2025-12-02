"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { FaDollarSign, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import React from "react";

const CareersPage = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-red-50 py-20">
        <Container className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Careers at Copy Trolley
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We currently have no available positions. Please contact us to learn more about future opportunities or joining our team.
          </motion.p>
        </Container>
      </section>

      {/* Benefits Section */}
      <Container className="mt-24 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto space-y-12"
        >
          <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-105 transition">
              <FaDollarSign size={40} className="text-red-700" />
              <h4 className="font-semibold text-xl">Competitive Pay</h4>
              <p className="text-gray-700">We value our team and offer fair, competitive wages.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-105 transition">
              <FaChalkboardTeacher size={40} className="text-red-700" />
              <h4 className="font-semibold text-xl">Training & Growth</h4>
              <p className="text-gray-700">Opportunities to learn new skills and advance your career.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-105 transition">
              <FaUsers size={40} className="text-red-700" />
              <h4 className="font-semibold text-xl">Community & Teamwork</h4>
              <p className="text-gray-700">Be part of a team that supports each other and our community.</p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            className="inline-block mt-12 px-8 py-4 bg-red-700 text-white font-bold rounded-full shadow-lg hover:bg-red-800 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us About Future Openings
          </motion.a>
        </motion.div>
      </Container>
    </>
  );
};

export default CareersPage;
