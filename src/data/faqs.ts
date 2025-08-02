export const faqs = [
  {
    id: 1,
    question: "What is the purpose of this project?",
    answer:
      "This project demonstrates a clean, responsive accordion built with React, TypeScript, TailwindCSS, and Framer Motion. It mimics a real-world UI component often used in FAQs or collapsible content. The focus is on accessibility, animation, and visual polish.",
  },
  {
    id: 2,
    question: "How was the animation handled in the accordion?",
    answer:
      "We used Framer Motion to animate both the accordion panel and the vertical line of the plus icon. This provides smooth transitions for expand/collapse and enhances the interactive experience without performance compromise.",
  },
  {
    id: 3,
    question: "Is the component mobile responsive?",
    answer:
      "Yes, the accordion layout adapts to various screen sizes using Tailwind’s responsive utility classes. Mobile users get a compact layout while desktop users see a wider, spaced design.",
  },
  {
    id: 4,
    question: "How is dark mode implemented?",
    answer:
      "Dark mode is supported using Tailwind’s `dark:` variant classes. It automatically adapts based on the system theme or can be toggled manually if needed. All text and border styles are adjusted for visibility.",
  },
  {
    id: 5,
    question: "Can this accordion be reused in other projects?",
    answer:
      "Absolutely. The component is modular and accepts data as props. You can easily reuse it in other apps, replace the icons, or adjust the animations to fit different design systems or branding.",
  },
];
