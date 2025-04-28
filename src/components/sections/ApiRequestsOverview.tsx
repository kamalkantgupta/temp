
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCode, ArrowRight } from "lucide-react";

interface ApiRequest {
  name: string;
  description: string;
  input: string;
  output: string;
}

interface ApiRequestsOverviewProps {
  title: string;
  apis: ApiRequest[];
  cta: {
    text: string;
    link: string;
  };
}

const ApiRequestsOverview = ({
  title,
  apis,
  cta,
}: ApiRequestsOverviewProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apis.map((api, index) => (
            <Card key={index} className="overflow-hidden border-blue-100 dark:border-blue-900/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{api.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{api.description}</p>
                    <div className="space-y-2 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Input:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{api.input}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Output:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{api.output}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            asChild
          >
            <a href={cta.link}>
              {cta.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApiRequestsOverview;
