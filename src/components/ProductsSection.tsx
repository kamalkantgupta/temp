
import { Button } from "@/components/ui/button";
import { Search, FileSpreadsheet, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-white dark:bg-gray-900 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI-Powered Hiring Products</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Leverage our cutting-edge AI tools to transform your hiring process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WT-Search Product */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[var(--current-theme-light)] dark:bg-[var(--current-theme-color)]/20 rounded-xl">
                  <Search className="h-8 w-8 text-[var(--current-theme-color)]" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl">WT-Search</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    AI-Powered Resume Search with Deep Filtering
                  </p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-gray-700 dark:text-gray-300">
                  Search through thousands of resumes using advanced filters—education, skills, domain expertise, B2B/B2C background, college tier, job titles, and more.
                </p>
              </div>
            </div>
            <div className="mt-auto p-6 pt-4 flex flex-col gap-3">
              <Link to="/">
                <Button className="w-full bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white">Learn More – Free</Button>
              </Link>
              <div className="text-center">
                <span className="text-gray-500 dark:text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* WT-Sheets Product */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[var(--current-theme-light)] dark:bg-[var(--current-theme-color)]/20 rounded-xl">
                  <FileSpreadsheet className="h-8 w-8 text-[var(--current-theme-color)]" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl">WT-Sheets</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Make Google Sheets Your Smartest Recruiter
                  </p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-gray-700 dark:text-gray-300">
                  Transform your spreadsheets into an AI-powered hiring workspace that slashes manual screening time by up to 90%.
                </p>
              </div>
            </div>
            <div className="mt-auto p-6 pt-4 flex flex-col gap-3">
              <Link to="/">
                <Button className="w-full bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white">Learn More – Free</Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full border-[var(--current-theme-light)] text-[var(--current-theme-color)] hover:bg-[var(--current-theme-light)] dark:border-gray-700 dark:hover:bg-gray-800">
                  Use Now – Free
                </Button>
              </Link>
            </div>
          </div>

          {/* IIE Network Product */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[var(--current-theme-light)] dark:bg-[var(--current-theme-color)]/20 rounded-xl">
                  <Users className="h-8 w-8 text-[var(--current-theme-color)]" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl">IIE Network</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    World's Most Efficient Hiring Platform
                  </p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-gray-700 dark:text-gray-300">
                  Discover interview-ready candidates quickly with our AI-matched network. Built for results, not resumes.
                </p>
              </div>
            </div>
            <div className="mt-auto p-6 pt-4 flex flex-col gap-3">
              <Link to="/">
                <Button className="w-full bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white">Learn More</Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full border-[var(--current-theme-light)] text-[var(--current-theme-color)] hover:bg-[var(--current-theme-light)] dark:border-gray-700 dark:hover:bg-gray-800">
                  Use Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
