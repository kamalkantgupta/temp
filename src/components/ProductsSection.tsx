
import { Button } from "@/components/ui/button";
import { FileText, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Powerful tools designed to streamline your hiring process and help you make better decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-1 rounded-xl overflow-hidden shadow-xl">
              <div className="bg-white p-8 rounded-lg h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Layers className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">WT-Sheets</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Transform Google Sheets into a powerful hiring platform. Automate candidate data collection, evaluate resumes with AI, and simplify your entire recruitment workflow—all within the familiar spreadsheet interface you already use.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded">Google Sheets Integration</span>
                  <span className="text-xs font-medium bg-green-50 text-green-700 px-2.5 py-0.5 rounded">AI Resume Parsing</span>
                  <span className="text-xs font-medium bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded">Candidate Management</span>
                </div>
                <Link to="/wt-sheets">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">Coming Soon</h3>
            </div>
            <p className="text-gray-700 mb-8">
              We're working on exciting new products to further enhance your hiring process. Stay tuned for updates!
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductsSection;
