import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Brain, 
  FileText, 
  ChevronRight,
  LineChart,
  Gauge,
  Target,
  BarChart,
  FileSpreadsheet,
  Zap,
  Settings,
  Cloud
} from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import ApiRequestsOverview from "@/components/sections/ApiRequestsOverview";
import UseCasesSection from "@/components/sections/UseCasesSection";
import OverviewSection from "@/components/sections/OverviewSection";

const FITScoreAgent = () => {
  const [demoEmail, setDemoEmail] = useState("");

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo requested with email:", demoEmail);
    setDemoEmail("");
    alert("Demo request submitted successfully!");
  };

  const features = [
    {
      icon: Gauge,
      name: "Instant Resume Screening & Scoring",
      description: "Evaluate candidate suitability in seconds, drastically reducing manual review time."
    },
    {
      icon: Target,
      name: "Objective FIT Score (0-100)",
      description: "Get a clear, consistent, AI-driven metric for resume relevance against job requirements."
    },
    {
      icon: BarChart,
      name: "Detailed Strength & Gap Analysis",
      description: "Understand *why* a candidate fits (or doesn't), pinpointing specific skills and experience alignment."
    },
    {
      icon: LineChart,
      name: "Automated Candidate Prioritization",
      description: "Quickly surface the most promising candidates based on their FIT Score."
    },
    {
      icon: FileSpreadsheet,
      name: "Evidence-Based Resume Insights",
      description: "See exactly which parts of the resume support the identified strengths and weaknesses."
    },
    {
      icon: Cloud,
      name: "Seamless API Integration",
      description: "Easily embed into your ATS, HR platform, or custom hiring tools via a developer-friendly REST API."
    },
    {
      icon: Zap,
      name: "Reduce Manual Screening Effort",
      description: "Free up recruiter time to focus on engaging qualified candidates, not sifting through irrelevant resumes."
    },
    {
      icon: Settings,
      name: "Flexible & Adaptable AI",
      description: "Our underlying AI models adapt to various job roles and industries for relevant scoring."
    }
  ];

  const steps = [
    {
      id: 1,
      name: "Create FIT Job ID",
      description: "Submit your Job Description (JD) text via API. The Agent processes it and returns a unique `fitJobId` representing that specific role's requirements.",
      apiDetails: "Input: Job Description (Text) -> Output: `fitJobId`",
      docLink: "/docs/fit-score#create-job"
    },
    {
      id: 2,
      name: "Evaluate Resume & Get FIT Score",
      description: "Send the `fitJobId` and the candidate's resume (URL or text content) to the evaluation endpoint. The Agent performs the AI match.",
      apiDetails: "Input: `fitJobId`, Resume (URL/Text) -> Output: FIT Score, Pros, Cons, Details",
      docLink: "/docs/fit-score#evaluate-resume"
    }
  ];

  const apiRequestsOverview = {
    title: "API at a Glance",
    apis: [
      {
        name: "1. Create FIT Job ID",
        description: "Analyzes the Job Description to establish matching criteria.",
        input: "Job Description (text)",
        output: "`fitJobId` (string)"
      },
      {
        name: "2. Evaluate Resume",
        description: "Scores a resume against the pre-processed Job Description.",
        input: "`fitJobId` (string), Resume (URL or text)",
        output: "FIT Score (int), Pros (list), Cons (list), Details (object)"
      }
    ],
    cta: {
      text: "Dive into the Documentation",
      link: "/docs/fit-score"
    }
  };

  const useCases = {
    title: "Powering Efficient Recruitment Workflows",
    items: [
      "ATS Platforms: Enhance built-in matching capabilities.",
      "HR & Recruitment Agencies: Accelerate candidate shortlisting.",
      "Job Boards: Offer enhanced job matching for seekers.",
      "Internal Hiring Tools: Improve talent discovery within organizations.",
      "Career Services & Resume Builders: Provide resume optimization feedback."
    ],
    integrationBenefit: "Easy to integrate AI APIs for ATS, hiring automation platforms, and job platforms."
  };

  return (
    <>
      <Helmet>
        <title>FIT Score Agent | AI Resume & Job Description Matching API</title>
        <meta 
          name="description" 
          content="Instantly match resumes to job descriptions with Whitetable's FIT Score Agent. Get AI-powered Fit Scores (0-100), strength/gap analysis via API. Perfect for ATS & HR Tech." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-grid-bg opacity-5"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Unlock Precision Hiring: The Whitetable FIT Score Agent
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Instantly score resume-to-job description matches with AI. Get objective FIT Scores (0-100) and detailed candidate insights to streamline screening and hire smarter, faster.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                      Get API Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      View API Docs
                    </Button>
                  </div>
                </div>
                <div className="relative animate-fade-in-up delay-200">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent backdrop-blur-xl border border-blue-200/20 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <FileText className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                          <span className="text-sm">Resume</span>
                        </div>
                        <div className="relative">
                          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <Brain className="h-8 w-8 text-blue-500" />
                          </div>
                          <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-ping"></div>
                        </div>
                        <div className="text-center">
                          <FileText className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                          <span className="text-sm">Job Description</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-xl blur-xl"></div>
                        <div className="relative bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-2">87</div>
                            <div className="text-gray-600 dark:text-gray-400">FIT Score</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <OverviewSection
            title="Stop Guessing, Start Scoring: AI-Powered Candidate Matching"
            description="Overwhelmed by resume volume? The Whitetable FIT Score Agent cuts through the noise. Our AI analyzes resumes against your specific job descriptions, delivering an objective FIT Score (0-100) plus actionable insights on candidate strengths and gaps. Automate screening, focus on top contenders, and make data-driven hiring decisions with confidence."
          />

          {/* API Overview Section */}
          <ApiRequestsOverview {...apiRequestsOverview} />

          {/* How It Works */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple Two-Step API Workflow</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {steps.map((step) => (
                  <div key={step.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <span className="flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 font-bold text-lg">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold ml-4">{step.name}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{step.description}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <code className="text-blue-700 dark:text-blue-300 text-sm">{step.apiDetails}</code>
                    </div>
                    <a href={step.docLink} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
                      View Documentation <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Integrate the FIT Score Agent?</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-blue-500" />
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

          {/* Use Cases */}
          <UseCasesSection {...useCases} />

          {/* Developer Focus */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Built for Seamless Integration</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Integrate powerful AI matching capabilities effortlessly. Our FIT Score Agent offers a straightforward RESTful API, clear documentation, and code examples to get you up and running quickly.
                </p>
                <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                  Explore API Documentation
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Candidate Screening Process Today</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Leverage AI to identify the best-fit candidates faster and more accurately. Integrate the Whitetable FIT Score Agent and revolutionize your recruitment workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Scoring - Get API Key
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-white hover:bg-blue-600">
                  Request a Demo
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ThemePaletteSwitcher />
      </div>
    </>
  );
};

export default FITScoreAgent;
