import { Accordion } from "./components/Accordion/Accordion";

function App() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Accordion />
        </div>
      </main>
    </>
  );
}

export default App;
