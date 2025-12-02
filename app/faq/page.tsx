"use client";

import Container from '@/components/ui/Container';
import QuickEstimate from '@/components/ui/QuickEstimate';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of services do you offer?",
    answer: "We provide printing, shipping, graphic design, promotional products, signs, banners, and more."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, all our estimates are free. We will evaluate your project and provide a detailed written quote."
  },
  {
    question: "How can I submit my print files?",
    answer: "Files can be uploaded through our website, emailed, or delivered in person at our store locations."
  },
  {
    question: "What are your business hours?",
    answer: "Bedford: M-F 9am - 5:30pm. Paoli: M-F 9am - 4pm. Closed on weekends."
  },
  {
    question: "Do you offer design services?",
    answer: "Absolutely! Our graphic design team can create logos, layouts, and promotional materials tailored to your brand."
  },
  {
    question: "Can I ship packages through Copy Trolley?",
    answer: "Yes, we offer convenient FedEx shipping services for both personal and business needs."
  },
  {
    question: "Do you provide promotional products?",
    answer: "Yes, we offer a wide range of branded promotional items including apparel, pens, mugs, and more."
  },
  {
    question: "How quickly can I receive my order?",
    answer: "Turnaround time depends on the service and volume. Standard printing is often same-day or next-day; custom projects vary."
  },
  {
    question: "Do you offer large format printing?",
    answer: "Yes, we can print blueprints, posters, banners, and other large format projects with high-quality results."
  },
  {
    question: "Can you handle rush orders?",
    answer: "We try to accommodate rush orders whenever possible. Contact us to confirm availability and timelines."
  },
  {
    question: "Do you provide business cards and stationery?",
    answer: "Yes, we offer full business essentials including business cards, letterheads, envelopes, and more."
  },
  {
    question: "Can I pick up my order in-store?",
    answer: "Absolutely. Orders can be picked up at either our Bedford or Paoli locations once ready."
  },
  {
    question: "Do you offer custom signs and banners?",
    answer: "Yes, we create custom signs, banners, and vinyl graphics for events, promotions, and businesses."
  },
  {
    question: "How can I pay for services?",
    answer: "We accept cash, credit/debit cards, and other local payment methods. Contact us for details on large orders."
  },
  {
    question: "Do you offer photo restoration?",
    answer: "Yes, we can restore old or damaged photos to preserve memories in high-quality prints."
  },
  {
    question: "Is there parking available at your locations?",
    answer: "Yes, both our Bedford and Paoli stores have convenient parking for customers."
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="mt-16 mb-32">
      <h2 className="text-3xl font-semibold mb-10 text-center">FAQs</h2>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 bg-white border-t text-gray-700 leading-relaxed transition-all duration-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQPage;
