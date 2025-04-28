import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ClipboardList, 
  LineChart, 
  FileText, 
  Brain, 
  FileSpreadsheet, 
  Search,
  Zap,
  LineChart as LineChartIcon,
  ArrowRight,
  Check 
} from "lucide-react";

const WTSheets = () => {
  return (
    <>
      <Helmet>
        <title>WT-Sheets | AI-Powered Hiring Automation in Google Sheets</title>
        <meta 
          name="description" 
          content="Transform Google Sheets into a hiring powerhouse with WT-Sheets. Automate form creation, AI candidate screening, resume ranking & evaluation. Start free!" 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section with Glass Effect */}
          <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="absolute inset-0 bg-grid-bg opacity-5"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    WT-Sheets: Transform Google Sheets into a Hiring Powerhouse
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Automate candidate form creation, streamline AI-powered screening, rank resumes instantly, and make smarter hiring decisions – all within Google Sheets.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      Start Using for FREE
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="relative animate-fade-in-up delay-200">
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent backdrop-blur-xl border border-blue-200/20 dark:border-blue-500/20 shadow-2xl">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl transform rotate-6 -z-10"></div>
                    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl transform -rotate-3 -z-10"></div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md">
                        <div className="flex items-center space-x-3">
                          <FileSpreadsheet className="h-6 w-6 text-blue-500" />
                          <span className="font-medium">Job Requirements</span>
                        </div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">AI Analysis</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md">
                          <LineChart className="h-6 w-6 text-blue-500 mb-2" />
                          <span className="text-sm">FIT Score</span>
                        </div>
                        <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md">
                          <Brain className="h-6 w-6 text-blue-500 mb-2" />
                          <span className="text-sm">AI Screening</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-6 w-6 text-blue-500" />
                          <span className="font-medium">Resume Data</span>
                        </div>
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is WT-Sheets Section with Cards */}
          <section className="w-full py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is WT-Sheets?</h2>
                <Card className="p-8 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-purple-100 dark:border-purple-900/50">
                  <CardContent className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                    <p>
                      WT-Sheets seamlessly connects the familiarity of Google Sheets with powerful AI hiring tools (like our Resume Parser, FIT Score, Question & Evaluation APIs).
                    </p>
                    <Separator className="my-4" />
                    <p>
                      It automates tedious recruitment tasks – from creating smart application forms based on your job description to automatically screening, ranking, and evaluating candidates.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose Section with Visual Elements */}
          <section className="w-full py-20 bg-gradient-to-b from-purple-50/50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose WT-Sheets?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Recruiting top talent is complex. WT-Sheets simplifies it by combining the universal accessibility of Google Sheets with cutting-edge AI automation.
                </p>
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <p className="text-xl font-semibold">
                    Leverage AI Power within Your Familiar Google Sheets Workflow
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Grid with Animated Cards */}
          <section className="w-full py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features & Advantages</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: ClipboardList, name: "AI-Generated Hiring Forms", description: "Input a job description; our Question API auto-generates relevant screening questions. Get a shareable form link instantly." },
                  { icon: LineChartIcon, name: "Automated Resume Ranking (FIT Score)", description: "Our FIT Score API instantly scores resume alignment with the JD. Sort candidates by relevance directly in Sheets." },
                  { icon: FileText, name: "Intelligent Resume Data Extraction", description: "The Resume Parser API automatically extracts skills, experience, education, etc., structuring it neatly in your sheet." },
                  { icon: Brain, name: "AI-Powered Candidate Evaluation", description: "Our Evaluation API scores candidate responses to form questions, providing another layer of data for ranking." },
                  { icon: FileSpreadsheet, name: "Centralized Data in Google Sheets", description: "All candidate info, scores, and extracted data are automatically organized in one accessible Google Sheet." },
                  { icon: Search, name: "Advanced Search & Filtering", description: "Instantly filter and search candidates within Sheets using AI-extracted data points (skills, experience, scores)." },
                  { icon: Zap, name: "Boost Productivity by 2x", description: "Eliminate manual sorting, data entry, and initial screening tasks, significantly speeding up your hiring cycle." },
                  { icon: LineChartIcon, name: "Data-Driven Hiring Decisions", description: "Leverage objective AI scores and structured data for more informed and less biased candidate selection." }
                ].map((feature, idx) => (
                  <Card 
                    key={idx} 
                    className="group hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700"
                  >
                    <CardContent className="p-8">
                      <div className="mb-6 bg-purple-50 dark:bg-purple-900/30 p-4 rounded-xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{feature.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section with Timeline */}
          <section className="w-full py-20 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How WT-Sheets Streamlines Your Hiring</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {[
                  { id: 1, name: "Create a Smart Hiring Form", description: "Paste your job description. WT-Sheets uses the Question API to suggest relevant screening questions. Customize if needed and generate a shareable application form link." },
                  { id: 2, name: "Candidates Apply Seamlessly", description: "Applicants use the link to submit their resume and answer questions (e.g., Notice Period, CTC, Relocation, Reason for Change)." },
                  { id: 3, name: "AI Processing & Data Population", description: "Submitted data triggers AI analysis: FIT Score API ranks resume-JD match, Resume Parser API extracts key details, and Evaluation API scores answers. All results populate your Google Sheet automatically." },
                  { id: 4, name: "Review & Decide in Google Sheets", description: "Access your auto-updated Google Sheet. Sort by FIT Score, filter by skills, review extracted data and AI evaluations to quickly identify top candidates." }
                ].map((step) => (
                  <div 
                    key={step.id} 
                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-12 h-12 font-bold text-xl shadow-lg">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold ml-4">{step.name}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recruiter Dashboard Section with Feature List */}
          <section className="w-full py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Intelligent Hiring Dashboard in Google Sheets</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
                  WT-Sheets transforms a standard Google Sheet into a dynamic recruiter dashboard. All candidate data is automatically captured and structured, ready for immediate review and action.
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 shadow-xl">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Auto-updated candidate submissions.",
                      "Sortable FIT Score (JD vs. Resume alignment).",
                      "Clear 'Why Match' / 'Why Not Match' insights.",
                      "Extracted Skills, Experience, Education, Job History.",
                      "Candidate details (Contact, Resume Link, CTC, Notice Period, Relocation).",
                      "AI Evaluation Scores for question responses.",
                      "Dedicated fields for recruiter notes and feedback.",
                      "Powerful native Google Sheets filtering and search capabilities."
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-6 bg-purple-600 text-white rounded-lg text-center">
                    <p className="text-lg font-medium">
                      Gain instant visibility and boost efficiency by up to 2x by eliminating manual candidate sorting and data structuring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Drowning in Resumes. Start Hiring Smarter Today!</h2>
                <p className="text-xl text-purple-100 mb-8">
                  Elevate your recruitment workflow with the power of AI integrated directly into Google Sheets. Get started with WT-Sheets for free and experience a faster, smarter, data-driven hiring process.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Using WT-Sheets for FREE
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default WTSheets;
