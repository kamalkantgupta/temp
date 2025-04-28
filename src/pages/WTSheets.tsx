import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    WT-Sheets: Transform Google Sheets into a Hiring Powerhouse
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Automate candidate form creation, streamline AI-powered screening, rank resumes instantly, and make smarter hiring decisions – all within Google Sheets.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-purple-500 hover:bg-purple-600">
                      Start Using for FREE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-purple-100 dark:border-purple-900/30">
                    <img
                      src="/placeholder.svg"
                      alt="Graphic showing the Google Sheets logo integrating with AI icons for recruitment tasks like forms, ranking, and parsing."
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is WT-Sheets Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What is WT-Sheets?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  WT-Sheets seamlessly connects the familiarity of Google Sheets with powerful AI hiring tools (like our Resume Parser, FIT Score, Question & Evaluation APIs). It automates tedious recruitment tasks – from creating smart application forms based on your job description to automatically screening, ranking, and evaluating candidates. Say goodbye to manual data entry and endless spreadsheet sorting, and hello to faster, data-driven hiring.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose WT-Sheets?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Recruiting top talent is complex. WT-Sheets simplifies it by combining the universal accessibility of Google Sheets with cutting-edge AI automation. This hybrid approach removes workflow bottlenecks, structures messy candidate data, and delivers actionable insights directly within your spreadsheet, empowering you to identify and hire the best candidates significantly faster.
                </p>
                <div className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                  Leverage AI Power within Your Familiar Google Sheets Workflow.
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Features & Advantages</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* How It Works Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How WT-Sheets Streamlines Your Hiring</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {[
                  { id: 1, name: "Create a Smart Hiring Form", description: "Paste your job description. WT-Sheets uses the Question API to suggest relevant screening questions. Customize if needed and generate a shareable application form link." },
                  { id: 2, name: "Candidates Apply Seamlessly", description: "Applicants use the link to submit their resume and answer questions (e.g., Notice Period, CTC, Relocation, Reason for Change)." },
                  { id: 3, name: "AI Processing & Data Population", description: "Submitted data triggers AI analysis: FIT Score API ranks resume-JD match, Resume Parser API extracts key details, and Evaluation API scores answers. All results populate your Google Sheet automatically." },
                  { id: 4, name: "Review & Decide in Google Sheets", description: "Access your auto-updated Google Sheet. Sort by FIT Score, filter by skills, review extracted data and AI evaluations to quickly identify top candidates." }
                ].map((step) => (
                  <div key={step.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <span className="flex items-center justify-center bg-purple-500 text-white rounded-full w-10 h-10 font-bold text-lg">
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

          {/* Recruiter Dashboard Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">{recruiterDashboardData.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                  {recruiterDashboardData.description}
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recruiterDashboardData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-lg font-medium text-purple-600 dark:text-purple-400 text-center">
                    {recruiterDashboardData.benefit}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Stop Drowning in Resumes. Start Hiring Smarter Today!</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
                Elevate your recruitment workflow with the power of AI integrated directly into Google Sheets. Get started with WT-Sheets for free and experience a faster, smarter, data-driven hiring process.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Start Using WT-Sheets for FREE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </main>

        <Footer />
        <ThemePaletteSwitcher />
      </div>
    </>
  );
};

// Data for the recruiter dashboard section
const recruiterDashboardData = {
  title: "Your Intelligent Hiring Dashboard in Google Sheets",
  description: "WT-Sheets transforms a standard Google Sheet into a dynamic recruiter dashboard. All candidate data is automatically captured and structured, ready for immediate review and action.",
  features: [
    "Auto-updated candidate submissions.",
    "Sortable FIT Score (JD vs. Resume alignment).",
    "Clear 'Why Match' / 'Why Not Match' insights.",
    "Extracted Skills, Experience, Education, Job History.",
    "Candidate details (Contact, Resume Link, CTC, Notice Period, Relocation).",
    "AI Evaluation Scores for question responses.",
    "Dedicated fields for recruiter notes and feedback.",
    "Powerful native Google Sheets filtering and search capabilities."
  ],
  benefit: "Gain instant visibility and boost efficiency by up to 2x by eliminating manual candidate sorting and data structuring."
};

export default WTSheets;
