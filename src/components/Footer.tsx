
import { Twitter, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <p className="text-gray-600 dark:text-gray-300">Contact: <a href="mailto:hello@whitetable.ai" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">hello@whitetable.ai</a></p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-300">Follow Us:</span>
              <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Use</a>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} WhiteTable.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
