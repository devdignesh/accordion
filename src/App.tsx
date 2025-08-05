import { Accordion } from "./components/Accordion/Accordion";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppLayout>
          <Header />
          <Accordion />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
