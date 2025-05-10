
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set light theme by default
    document.documentElement.classList.remove("dark");
    
    // Apply the default color theme if none is set
    const savedColorTheme = localStorage.getItem("colorTheme");
    if (!savedColorTheme) {
      document.body.classList.add("blue-theme");
      localStorage.setItem("colorTheme", "blue");
      
      // Set CSS variables
      document.documentElement.style.setProperty('--current-theme-color', 'var(--blue-color)');
      document.documentElement.style.setProperty('--current-theme-hover', 'var(--blue-hover)');
      document.documentElement.style.setProperty('--current-theme-light', 'var(--blue-light)');
    } else {
      // Clear any existing theme classes first
      document.body.classList.remove(
        "blue-theme", 
        "teal-theme", 
        "orange-theme", 
        "purple-theme", 
        "green-theme"
      );
      // Add the saved theme
      document.body.classList.add(`${savedColorTheme}-theme`);
      
      // Set CSS variables
      document.documentElement.style.setProperty('--current-theme-color', `var(--${savedColorTheme}-color)`);
      document.documentElement.style.setProperty('--current-theme-hover', `var(--${savedColorTheme}-hover)`);
      document.documentElement.style.setProperty('--current-theme-light', `var(--${savedColorTheme}-light)`);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
