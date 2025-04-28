
import { Button } from "@/components/ui/button";
import { FileText, Star, HelpCircle, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const AIAgentsSection = () => {
  const agents = [
    {
      id: 1,
      icon: <FileText className="h-8 w-8" />,
      title: "Resume Parser Agent",
      subtitle: "Structure Every Resume, Instantly",
      description: "Automatically extract candidate details—skills, experience, education, employment history—and convert raw resumes into clean, searchable data.",
      cta: "Learn More – Free",
      link: "/resume-parser-agent",
      badge: null,
      color: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        text: "text-blue-500",
        button: "text-blue-600 hover:bg-blue-50 border-blue-300"
      }
    },
    {
      id: 2,
      icon: <Star className="h-8 w-8" />,
      title: "FIT Score Agent",
      subtitle: "Evaluate Candidate Fit at a Glance",
      description: "Instantly score how well each resume aligns with your job description, so you can focus on top-quality candidates from the start.",
      cta: "Learn More – Free",
      link: "/fit-score-agent",
      badge: null,
      color: {
        bg: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-500",
        button: "text-purple-600 hover:bg-purple-50 border-purple-300"
      }
    },
    {
      id: 3,
      icon: <HelpCircle className="h-8 w-8" />,
      title: "Question API",
      subtitle: "Generate Intelligent, Role-Specific Hiring Questions",
      description: "Provide your job description, and our AI creates contextual screening questions to help evaluate candidate suitability.",
      cta: "Learn More – Free",
      link: "/question-api",
      badge: "Beta",
      color: {
        bg: "bg-teal-50",
        border: "border-teal-100",
        text: "text-teal-500",
        button: "text-teal-600 hover:bg-teal-50 border-teal-300"
      }
    },
    {
      id: 4,
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Evaluation API",
      subtitle: "Objectively Score Candidate Responses",
      description: "Let AI evaluate and rank candidate answers based on clarity, relevance, and overall fit—speeding up your decision-making process.",
      cta: "Learn More – Free",
      link: "/",
      badge: "Coming Soon",
      color: {
        bg: "bg-orange-50",
        border: "border-orange-100",
        text: "text-orange-500",
        button: "text-orange-600 hover:bg-orange-50 border-orange-300"
      }
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-10 bg-gray-50 relative overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Agents</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the Agents Powering Your Hiring Automation.
            Our modular AI agents plug directly into your workflow, automating the most time-consuming parts of recruitment—all completely free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <div 
              key={agent.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up flex flex-col h-full border border-gray-100" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 flex items-center gap-4 border-b">
                <div className={`p-3 rounded-xl ${agent.color.bg} ${agent.color.border} flex items-center justify-center`}>
                  <div className={agent.color.text}>
                    {agent.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-800">{agent.title}</h3>
                    {agent.badge && (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${agent.color.bg} ${agent.color.text}`}>
                        {agent.badge === "Beta" ? "🧪" : "🚧"} {agent.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm mt-1">
                    {agent.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-gray-700 leading-relaxed">
                  {agent.description}
                </p>
              </div>
              
              <div className="p-5 border-t bg-gray-50">
                <Link to={agent.link}>
                  <Button 
                    variant="outline" 
                    className={`text-sm py-1.5 px-4 h-auto ${agent.color.button}`}
                  >
                    {agent.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
