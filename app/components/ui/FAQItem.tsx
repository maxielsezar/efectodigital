"use client";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <div className="border-b border-gray-800 py-4">

      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className={`font-medium ${isOpen ? "text-gray-400" : ""}`}>
          {question}
        </span>

        <span className="text-white text-xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 text-sm">
          {answer}
        </p>
      </div>

    </div>
  );
}