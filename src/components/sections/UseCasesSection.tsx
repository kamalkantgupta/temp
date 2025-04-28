
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface UseCasesSectionProps {
  title: string;
  items: string[];
  integrationBenefit: string;
}

const UseCasesSection = ({
  title,
  items,
  integrationBenefit,
}: UseCasesSectionProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            {integrationBenefit}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                  <p className="text-blue-50">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
