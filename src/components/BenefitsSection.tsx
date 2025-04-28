
import { Zap, BarChart2, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Rapid, Data-Driven Decisions",
      description: "Our AI agents cut through busywork, delivering structured candidate data and automated evaluations in seconds.",
      icon: <BarChart2 className="h-6 w-6" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Seamless Integration",
      description: "Use our free tools right where your team works, whether it's within your existing spreadsheets or integrated into your broader recruitment workflow.",
      icon: <Zap className="h-6 w-6" />,
      color: "purple"
    },
    {
      id: 3,
      title: "Slash Manual Screening",
      description: "Spend less time sorting resumes and more time making confident, data-backed hiring decisions.",
      icon: <Clock className="h-6 w-6" />,
      color: "teal"
    },
    {
      id: 4,
      title: "Tailored for Modern Recruitment",
      description: "Perfect for startups, lean recruitment teams, and agencies looking to hire smarter and faster—with powerful tools available at zero cost.",
      icon: <Award className="h-6 w-6" />,
      color: "orange"
    }
  ];

  const handleTryDemo = () => {
    toast("Demo request submitted! We'll contact you soon.", {
      description: "Thank you for your interest in WhiteTable.ai",
    });
  };

  return (
    <section className="w-full py-24 px-6 md:px-10 bg-white relative overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WhiteTable.ai?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Empower your hiring with tools engineered for precision, speed, and simplicity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 bg-${benefit.color}-50 p-3 rounded-xl shadow-sm border-${benefit.color}-100 border`}>
                  <div className={`text-${benefit.color}-500`}>{benefit.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-md border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to transform your hiring process?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our AI-powered tools help teams of all sizes find and evaluate candidates with unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base py-2 h-auto">
                Try WT-Sheets For Free
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base py-2 h-auto"
                onClick={handleTryDemo}
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
