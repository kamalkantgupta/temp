
import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string;
  description?: string;
  steps: Step[];
  bgColor?: string;
}

const HowItWorksSection = ({
  title,
  description,
  steps,
  bgColor = "bg-purple-50 dark:bg-gray-900"
}: HowItWorksSectionProps) => {
  return (
    <section className={`w-full py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center bg-purple-500 text-white rounded-full w-10 h-10 font-bold text-lg">
                  {step.id}
                </span>
                <h3 className="text-xl font-bold ml-4">{step.name}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
