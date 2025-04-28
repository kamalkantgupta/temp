
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-10 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Hiring?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Experience how WhiteTable.ai's free, AI-powered hiring solutions can transform your recruitment process with intelligent automation and structured candidate insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              Contact Us
            </Button>
            <Link to="/wt-sheets">
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/20">
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
