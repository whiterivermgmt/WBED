"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const QuickEstimate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const formData = new FormData(formRef.current);
    formData.append("access_key", "aabacac2-1a59-4fff-ba61-98a0d6c19ac9");
    formData.append("subject", "New Quick Estimate Submission");
    formData.append("redirect", "/thank-you");
    formData.append("captcha", "true");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        formRef.current.reset();
        setIsOpen(false);
      } else {
        alert("There was an issue sending your message. Please try again.");
        console.error("Web3Forms Error:", data);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Quick Estimate Section */}
      <section className="relative -mt-8 md:-mt-12 z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -8, boxShadow: "0px 25px 50px rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-6 px-4 bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[450px]"
        >
          {/* Left Side - Image */}
          <div className="md:w-1/2 w-full aspect-[16/9] md:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/gallery/gallery2.jpg"
              alt="Roofing Estimate"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Text & Buttons */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get Your Quick Estimate
            </h2>
            <p className="text-gray-600">
              Fill out a quick form and get a preliminary estimate for your roofing project.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-700 to-red-700 text-white rounded-lg transition-colors duration-300 hover:opacity-90 font-semibold cursor-pointer"
              >
                Quick Estimate
              </button>

              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg transition-colors duration-300 hover:bg-red-50 font-semibold cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal / Shadowbox */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Estimate Form</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
            >
              <input type="text" name="name" placeholder="Full Name" className="border px-4 py-2 rounded-lg w-full" required />
              <input type="email" name="email" placeholder="Email Address" className="border px-4 py-2 rounded-lg w-full" required />
              <input type="tel" name="phone" placeholder="Phone Number" className="border px-4 py-2 rounded-lg w-full" required />
              <input type="text" name="address" placeholder="Property Address" className="border px-4 py-2 rounded-lg w-full" required />
              <input type="text" name="roofType" placeholder="Roof Type (House, Commercial, etc.)" className="border px-4 py-2 rounded-lg w-full" />
              <input type="text" name="roofSize" placeholder="Approximate Roof Size (sq ft / stories)" className="border px-4 py-2 rounded-lg w-full" />
              <select name="serviceType" className="border px-4 py-2 rounded-lg w-full">
                <option>Service Type</option>
                <option>Repair</option>
                <option>Replace</option>
                <option>Inspection</option>
              </select>
              <input type="text" name="currentMaterial" placeholder="Current Roofing Material (if known)" className="border px-4 py-2 rounded-lg w-full" />
              <select name="tearOff" className="border px-4 py-2 rounded-lg w-full">
                <option>Full Tear-Off or Overlay?</option>
                <option>Yes - Full Tear-Off</option>
                <option>No - Overlay</option>
              </select>
              <input type="text" name="preferredMaterial" placeholder="Preferred Material / Color (if known)" className="border px-4 py-2 rounded-lg w-full" />
              <textarea name="damage" placeholder="Any Known Damage / Leaks / Decking Issues?" className="border px-4 py-2 rounded-lg w-full" rows={3} />
              <input type="file" name="files" className="border px-4 py-2 rounded-lg w-full" multiple />
              <textarea name="notes" placeholder="Additional Notes / Comments" className="border px-4 py-2 rounded-lg w-full" rows={3} />
              <input type="text" name="contactTime" placeholder="Preferred Contact Time" className="border px-4 py-2 rounded-lg w-full" />
              <input type="text" name="roofAge" placeholder="Age of Existing Roof" className="border px-4 py-2 rounded-lg w-full" />
              <input type="number" name="roofLayers" placeholder="Number of Layers on Roof" className="border px-4 py-2 rounded-lg w-full" />
              <select name="roofPitch" className="border px-4 py-2 rounded-lg w-full">
                <option>Roof Pitch</option>
                <option>Steep</option>
                <option>Moderate</option>
                <option>Flat</option>
              </select>
              <input type="text" name="specialFeatures" placeholder="Special Features (Skylights, Chimneys, etc.)" className="border px-4 py-2 rounded-lg w-full" />
              <select name="timeline" className="border px-4 py-2 rounded-lg w-full">
                <option>Desired Timeline</option>
                <option>ASAP</option>
                <option>Within a Month</option>
                <option>Flexible</option>
              </select>
              <input type="text" name="budget" placeholder="Budget Range (Optional)" className="border px-4 py-2 rounded-lg w-full" />

              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              {success && <p className="text-green-600 font-semibold mt-2">Message sent successfully!</p>}
            </form>
          </motion.div>
        </div>
      )}

      {/* Optional subtle floating animation for premium feel */}
      <style jsx>{`
        section > div {
          animation: floatUpDown 6s ease-in-out infinite;
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
};

export default QuickEstimate;
