
import { Brain, Target, BarChart, ArrowRightCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface OverviewSectionProps {
  title: string;
  description: string;
}

const OverviewSection = ({
  title,
  description,
}: OverviewSectionProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze resumes against job requirements"
    },
    {
      icon: Target,
      title: "Precise Scoring",
      description: "Get accurate 0-100 FIT scores for each candidate"
    },
    {
      icon: BarChart,
      title: "Detailed Insights",
      description: "Understand strengths and gaps with comprehensive reports"
    },
    {
      icon: ArrowRightCircle,
      title: "Faster Decisions",
      description: "Reduce screening time by up to 75% with automated matching"
    }
  ];

  return (
    <section className="w-full py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-purple-50/50 dark:bg-purple-900/5 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
