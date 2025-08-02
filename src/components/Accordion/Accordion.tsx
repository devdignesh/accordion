import { AccordionItem } from "./AccordionItem";
import { faqs } from "../../data/faqs";

export const Accordion = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          questionId={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};
