
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-4 px-6 md:px-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <Logo />
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#products" className="font-medium text-gray-600 hover:text-[var(--current-theme-color)] transition-colors dark:text-gray-300 dark:hover:text-[var(--current-theme-color)]">
                Products
              </a>
              <a href="#agents" className="font-medium text-gray-600 hover:text-[var(--current-theme-color)] transition-colors dark:text-gray-300 dark:hover:text-[var(--current-theme-color)]">
                AI Agents
              </a>
              <a href="#why" className="font-medium text-gray-600 hover:text-[var(--current-theme-color)] transition-colors dark:text-gray-300 dark:hover:text-[var(--current-theme-color)]">
                Why Us
              </a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-[var(--current-theme-light)] text-[var(--current-theme-color)] hover:bg-[var(--current-theme-light)] dark:border-gray-700 dark:text-[var(--current-theme-color)] dark:hover:bg-gray-800">
                Contact Us
              </Button>
              <Button className="bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white">
                Try WT-Sheets Now
              </Button>
            </div>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-[var(--current-theme-color)] focus:outline-none dark:text-gray-300"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className="font-medium text-gray-600 hover:text-[var(--current-theme-color)] transition-colors dark:text-gray-300 dark:hover:text-[var(--current-theme-color)]"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a 
                href="#agents" 
                className="font-medium text-gray-600 hover:text-[var(--current-theme-color)] transition-colors dark:text-gray-300 dark:hover:text-[var(--current-theme-color)]"
                onClick={() => setIsOpen(false)}
              >
                AI Agents
              </a>
              <a 
                href="#why" 
                className="font-medium text-gray-600 hover:text-[var(--current-theme-color)] transition-colors dark:text-gray-300 dark:hover:text-[var(--current-theme-color)]"
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <Button variant="outline" className="border-[var(--current-theme-light)] text-[var(--current-theme-color)] hover:bg-[var(--current-theme-light)] w-full dark:border-gray-700 dark:text-[var(--current-theme-color)] dark:hover:bg-gray-800">
                Contact Us
              </Button>
              <Button className="bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white w-full">
                Try WT-Sheets Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
