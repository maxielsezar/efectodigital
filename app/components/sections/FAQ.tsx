"use client";

import { useState } from "react";
import FAQItem from "@/app/components/ui/FAQItem";
import { faqs } from "@/app/data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 text-center">

      <h2 className="text-3xl font-bold mb-4">
        Preguntas frecuentes
      </h2>

      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        Respondemos las dudas más comunes para que tomes la mejor decisión.
      </p>

      <div className="max-w-2xl mx-auto text-left">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

    </section>
  );
}