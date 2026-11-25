import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cv" element={<CV />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </ThemeProvider>
);

export default App;
