
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface KeyFeaturesSectionProps {
  title: string;
  description: string;
  features: Feature[];
  bgColor?: string;
}

const KeyFeaturesSection = ({
  title,
  description,
  features,
  bgColor = "bg-white dark:bg-gray-950"
}: KeyFeaturesSectionProps) => {
  return (
    <section className={`w-full py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
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

export default KeyFeaturesSection;
