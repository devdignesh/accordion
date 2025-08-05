import { AccordionItem } from "./AccordionItem";
import { faqs } from "../../data/faqs";

export const Accordion = () => {
  return (
    <div className="mt-10">
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
