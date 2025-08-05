import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white px-2 sm:px-4 py-16">
      <div className="w-full max-w-2xl mx-auto p-4">{children}</div>
    </main>
  );
};

export default AppLayout;
