
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, FileSpreadsheet, Filter, FormInput, ListChecks, FileText, Search, BrainCircuit, BarChartBig } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const WTSheets = () => {
  return (
    <>
      <Helmet>
        <title>WT-Sheets | AI-Powered Hiring Automation in Google Sheets</title>
        <meta name="description" content="Transform Google Sheets into a hiring powerhouse with WT-Sheets. Automate form creation, AI candidate screening, resume ranking & evaluation. Start free!" />
        <meta name="keywords" content="Google Sheets, AI hiring, recruitment automation, hiring tools" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
                    WT-Sheets: Transform Google Sheets into a Hiring Powerhouse
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                    Automate candidate form creation, streamline AI-powered screening, rank resumes instantly, and make smarter hiring decisions – all within Google Sheets.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-700">
                      Start Using for FREE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 transform rotate-2">
                      <FileSpreadsheet className="w-full h-48 text-blue-500" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-100 dark:bg-blue-900 rounded-lg p-3 shadow-lg">
                      <BrainCircuit className="h-10 w-10 text-blue-500" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-blue-100 dark:bg-blue-900 rounded-lg p-3 shadow-lg">
                      <BarChartBig className="h-10 w-10 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is WT-Sheets Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What is WT-Sheets?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  WT-Sheets seamlessly connects the familiarity of Google Sheets with powerful AI hiring tools (like our Resume Parser, FIT Score, Question & Evaluation APIs). It automates tedious recruitment tasks – from creating smart application forms based on your job description to automatically screening, ranking, and evaluating candidates. Say goodbye to manual data entry and endless spreadsheet sorting, and hello to faster, data-driven hiring.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose WT-Sheets?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Recruiting top talent is complex. WT-Sheets simplifies it by combining the universal accessibility of Google Sheets with cutting-edge AI automation. This hybrid approach removes workflow bottlenecks, structures messy candidate data, and delivers actionable insights directly within your spreadsheet, empowering you to identify and hire the best candidates significantly faster.
                </p>
                <div className="inline-block bg-blue-100 dark:bg-blue-900/50 px-6 py-3 rounded-full text-blue-700 dark:text-blue-300 font-medium">
                  Leverage AI Power within Your Familiar Google Sheets Workflow
                </div>
              </div>
            </div>
          </section>

          {/* Key Features & Advantages */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features & Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FormInput className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI-Generated Hiring Forms</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Input a job description; our Question API auto-generates relevant screening questions. Get a shareable form link instantly.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <ListChecks className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Automated Resume Ranking</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our FIT Score API instantly scores resume alignment with the JD. Sort candidates by relevance directly in Sheets.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Resume Data Extraction</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The Resume Parser API automatically extracts skills, experience, education, etc., structuring it neatly in your sheet.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <BrainCircuit className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Candidate Evaluation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our Evaluation API scores candidate responses to form questions, providing another layer of data for ranking.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 5 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileSpreadsheet className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Centralized Data in Google Sheets</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      All candidate info, scores, and extracted data are automatically organized in one accessible Google Sheet.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 6 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Search className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Search & Filtering</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Instantly filter and search candidates within Sheets using AI-extracted data points (skills, experience, scores).
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 7 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <BarChartBig className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Boost Productivity by 2x</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Eliminate manual sorting, data entry, and initial screening tasks, significantly speeding up your hiring cycle.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 8 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Filter className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Hiring Decisions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Leverage objective AI scores and structured data for more informed and less biased candidate selection.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">How WT-Sheets Streamlines Your Hiring</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    <h3 className="font-semibold text-lg">Create a Smart Hiring Form</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Paste your job description. WT-Sheets uses the Question API to suggest relevant screening questions. Customize if needed and generate a shareable application form link.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    <h3 className="font-semibold text-lg">Candidates Apply Seamlessly</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Applicants use the link to submit their resume and answer questions (e.g., Notice Period, CTC, Relocation, Reason for Change).
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    <h3 className="font-semibold text-lg">AI Processing & Data Population</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Submitted data triggers AI analysis: FIT Score API ranks resume-JD match, Resume Parser API extracts key details, and Evaluation API scores answers. All results populate your Google Sheet automatically.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                    <h3 className="font-semibold text-lg">Review & Decide in Google Sheets</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access your auto-updated Google Sheet. Sort by FIT Score, filter by skills, review extracted data and AI evaluations to quickly identify top candidates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Recruiter Dashboard Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Your Intelligent Hiring Dashboard in Google Sheets</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center">
                  WT-Sheets transforms a standard Google Sheet into a dynamic recruiter dashboard. All candidate data is automatically captured and structured, ready for immediate review and action.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      "Auto-updated candidate submissions.",
                      "Sortable FIT Score (JD vs. Resume alignment).",
                      "Clear 'Why Match' / 'Why Not Match' insights.",
                      "Extracted Skills, Experience, Education, Job History.",
                      "Candidate details (Contact, Resume Link, CTC, Notice Period, Relocation).",
                      "AI Evaluation Scores for question responses.",
                      "Dedicated fields for recruiter notes and feedback.",
                      "Powerful native Google Sheets filtering and search capabilities."
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    Gain instant visibility and boost efficiency by up to 2x by eliminating manual candidate sorting and data structuring.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-16 bg-blue-600 dark:bg-blue-900">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stop Drowning in Resumes. Start Hiring Smarter Today!</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Elevate your recruitment workflow with the power of AI integrated directly into Google Sheets. Get started with WT-Sheets for free and experience a faster, smarter, data-driven hiring process.
              </p>
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Using WT-Sheets for FREE
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

export default WTSheets;
