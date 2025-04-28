
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Check } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import ApiRequestsOverview from "@/components/sections/ApiRequestsOverview";
import UseCasesSection from "@/components/sections/UseCasesSection";

const FITScoreAgent = () => {
  const apiRequestsOverview = {
    title: "Simple Two-Step API Workflow",
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
      "ATS Platforms: Enhance built-in matching capabilities",
      "HR & Recruitment Agencies: Accelerate candidate shortlisting",
      "Job Boards: Offer enhanced job matching for seekers",
      "Internal Hiring Tools: Improve talent discovery within organizations",
      "Career Services & Resume Builders: Provide resume optimization feedback"
    ],
    integrationBenefit: "Easy to integrate AI APIs for ATS, hiring automation platforms, and job platforms"
  };

  return (
    <>
      <Helmet>
        <title>FIT Score Agent | AI Resume & Job Description Matching API</title>
        <meta 
          name="description" 
          content="Instantly match resumes to job descriptions with Whitetable's FIT Score Agent. Get AI-powered Fit Scores (0-100), strength/gap analysis via API." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                    Score Resume-to-Job Matches with AI
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Get objective FIT Scores (0-100) and detailed candidate insights to streamline screening and hire smarter, faster.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Get API Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      View API Docs
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-100">
                            <Check className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium">Resume Uploaded</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-100">
                            <Check className="h-5 w-5 text-purple-600" />
                          </div>
                          <span className="text-sm font-medium">Job Description Added</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-xl blur-xl"></div>
                        <div className="relative bg-white p-6 rounded-xl shadow-sm border border-purple-100">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-purple-600 mb-2">87</div>
                            <div className="text-gray-600">FIT Score</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Overview Section */}
          <ApiRequestsOverview {...apiRequestsOverview} />

          {/* Use Cases Section */}
          <UseCasesSection {...useCases} />

          {/* Final CTA */}
          <section className="w-full py-16 bg-purple-600">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Transform Your Candidate Screening Process Today</h2>
              <p className="text-purple-100 text-xl max-w-2xl mx-auto mb-8">
                Leverage AI to identify the best-fit candidates faster and more accurately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-purple-600 hover:bg-purple-50">
                  Start Scoring - Get API Key
                </Button>
                <Button size="lg" variant="outline" className="border-purple-300 text-white hover:bg-purple-700">
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
