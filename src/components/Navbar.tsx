
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
              <a href="#products" className="font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400">
                Products
              </a>
              <a href="#agents" className="font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400">
                AI Agents
              </a>
              <a href="#why" className="font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400">
                Why Us
              </a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/20">
                Contact Us
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Try WT-Sheets Now
              </Button>
            </div>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none dark:text-gray-300"
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
                className="font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a 
                href="#agents" 
                className="font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                AI Agents
              </a>
              <a 
                href="#why" 
                className="font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 w-full dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/20">
                Contact Us
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
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
