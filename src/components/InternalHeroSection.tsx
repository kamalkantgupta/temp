
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface InternalHeroProps {
  tagText: string;
  tagBgColor: string;
  tagTextColor: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  children?: React.ReactNode;
}

const InternalHeroSection = ({
  tagText,
  tagBgColor,
  tagTextColor,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  children
}: InternalHeroProps) => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div 
              className={`inline-flex px-4 py-1.5 rounded-full font-medium text-sm mb-2 ${tagBgColor} ${tagTextColor}`}
            >
              {tagText}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-500 hover:bg-purple-600">
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {secondaryCta && (
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalHeroSection;
