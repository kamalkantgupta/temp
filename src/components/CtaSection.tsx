
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Hiring?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Experience how WhiteTable.ai's free, AI-powered hiring solutions can transform your recruitment process with intelligent automation and structured candidate insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white">
              Contact Us
            </Button>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-[var(--current-theme-light)] text-[var(--current-theme-color)] hover:bg-[var(--current-theme-light)] dark:border-gray-700 dark:hover:bg-gray-800">
                Try WT-Sheets Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
