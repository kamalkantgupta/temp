
interface OverviewSectionProps {
  title: string;
  description: string;
}

const OverviewSection = ({
  title,
  description,
}: OverviewSectionProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
