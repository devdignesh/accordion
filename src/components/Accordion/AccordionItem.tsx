import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon } from "../../assets/icons/MinusIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { useState } from "react";

type AccordionItemProps = {
  questionId: number;
  question: string;
  answer: string;
};

export const AccordionItem = ({
  questionId,
  question,
  answer,
}: AccordionItemProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <motion.div
      layout
      className="border-b first:border-t border-gray-300 dark:border-zinc-700 overflow-hidden"
    >
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
      >
        <span className="text-lg font-medium max-w-[90%]">
          Q{questionId}. {question}
        </span>
        <span className="relative inline-block w-4 h-4 mr-2 sm:mr-4">
          <MinusIcon className="absolute top-0 left-0 w-4 h-4 text-gray-900 dark:text-gray-100" />
          <AnimatePresence mode="wait" initial={false}>
            {!open && (
              <motion.div
                key="plus"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-0 left-0"
              >
                <PlusIcon className="w-4 h-4 text-gray-900 dark:text-gray-100" />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-gray-600 dark:text-gray-300 max-w-[90%]"
          >
            <div className="pb-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
