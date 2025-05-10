
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const HeroSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-10 bg-white dark:bg-gray-900 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl animate-fade-in-up">
            AI Agents Designed to Simplify Modern Hiring
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Smarter hiring starts here—with AI agents and tools designed for efficient search, structured evaluation, and faster decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button size="lg" className="bg-[var(--current-theme-color)] hover:bg-[var(--current-theme-hover)] text-white">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--current-theme-light)] text-[var(--current-theme-color)] hover:bg-[var(--current-theme-light)] dark:border-gray-700 dark:hover:bg-gray-800">
              Try WT-Sheets Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
