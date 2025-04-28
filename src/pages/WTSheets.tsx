
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import InternalHeroSection from "@/components/InternalHeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { ClipboardList, FileSpreadsheet, FileText, Check, Brain, Database, Search, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Upload, MessageCircle, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const wtSheetsData = {
  heroSection: {
    headline: "WT-Sheets: Transform Google Sheets into a Hiring Powerhouse",
    subheadline: "Automate candidate form creation, streamline AI-powered screening, rank resumes instantly, and make smarter hiring decisions – all within Google Sheets.",
    primaryCta: {
      text: "Start Using for FREE",
      link: "/signup"
    }
  },
  keyFeatures: [
    {
      icon: ClipboardList,
      name: "AI-Generated Hiring Forms",
      description: "Input a job description; our Question API auto-generates relevant screening questions. Get a shareable form link instantly."
    },
    {
      icon: FileText,
      name: "Automated Resume Ranking (FIT Score)",
      description: "Our FIT Score API instantly scores resume alignment with the JD. Sort candidates by relevance directly in Sheets."
    },
    {
      icon: Brain,
      name: "Intelligent Resume Data Extraction",
      description: "The Resume Parser API automatically extracts skills, experience, education, etc., structuring it neatly in your sheet."
    },
    {
      icon: Activity,
      name: "AI-Powered Candidate Evaluation",
      description: "Our Evaluation API scores candidate responses to form questions, providing another layer of data for ranking."
    },
    {
      icon: FileSpreadsheet,
      name: "Centralized Data in Google Sheets",
      description: "All candidate info, scores, and extracted data are automatically organized in one accessible Google Sheet."
    },
    {
      icon: Search,
      name: "Advanced Search & Filtering",
      description: "Instantly filter and search candidates within Sheets using AI-extracted data points (skills, experience, scores)."
    }
  ],
  howItWorks: [
    {
      id: 1,
      name: "Create a Smart Hiring Form",
      description: "Paste your job description. WT-Sheets uses the Question API to suggest relevant screening questions. Customize if needed and generate a shareable application form link."
    },
    {
      id: 2,
      name: "Candidates Apply Seamlessly",
      description: "Applicants use the link to submit their resume and answer questions (e.g., Notice Period, CTC, Relocation, Reason for Change)."
    },
    {
      id: 3,
      name: "AI Processing & Data Population",
      description: "Submitted data triggers AI analysis: FIT Score API ranks resume-JD match, Resume Parser API extracts key details, and Evaluation API scores answers. All results populate your Google Sheet automatically."
    },
    {
      id: 4,
      name: "Review & Decide in Google Sheets",
      description: "Access your auto-updated Google Sheet. Sort by FIT Score, filter by skills, review extracted data and AI evaluations to quickly identify top candidates."
    }
  ]
};

const WTSheets = () => {
  return (
    <>
      <Helmet>
        <title>WT-Sheets | AI-Powered Hiring Automation in Google Sheets</title>
        <meta name="description" content="Transform Google Sheets into a hiring powerhouse with WT-Sheets. Automate form creation, AI candidate screening, resume ranking & evaluation. Start free!" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          <InternalHeroSection
            tagText="AI Hiring Automation"
            tagBgColor="bg-purple-100 dark:bg-purple-900/30"
            tagTextColor="text-purple-700 dark:text-purple-300"
            headline={wtSheetsData.heroSection.headline}
            subheadline={wtSheetsData.heroSection.subheadline}
            primaryCta={wtSheetsData.heroSection.primaryCta}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-purple-100 dark:border-purple-900/30">
              <div className="flex items-center justify-center mb-6">
                <FileSpreadsheet className="h-16 w-16 text-purple-500" />
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-purple-100 dark:bg-purple-900/30 rounded w-3/4"></div>
                <div className="h-2 bg-purple-100 dark:bg-purple-900/30 rounded w-5/6"></div>
                <div className="h-2 bg-purple-100 dark:bg-purple-900/30 rounded w-2/3"></div>
              </div>
            </div>
          </InternalHeroSection>

          <KeyFeaturesSection
            title="Key Features & Advantages"
            description="WT-Sheets transforms a standard Google Sheet into your intelligent hiring dashboard, automating tedious tasks and delivering powerful insights."
            features={wtSheetsData.keyFeatures}
          />

          <HowItWorksSection
            title="How WT-Sheets Streamlines Your Hiring"
            description="Experience a seamless, automated hiring workflow powered by AI."
            steps={wtSheetsData.howItWorks}
          />
          
          {/* Key Advantages Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Key Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Advantage 1 */}
                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Process All Resume Formats</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automatically extract and organize candidate data from PDFs, DOCX, TXT files directly within your spreadsheets.
                    </p>
                  </CardContent>
                </Card>

                {/* Advantage 2 */}
                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Matching & Scoring</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Get instant candidate-to-job fit scores, highlighting the best matches without leaving your spreadsheet.
                    </p>
                  </CardContent>
                </Card>

                {/* Advantage 3 */}
                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Save 90% of Manual Work</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Eliminate tedious data entry and comparison with automated resume processing and analysis.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bulk Resume Processing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Upload and process multiple resumes at once, extracting structured data into your spreadsheets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Activity className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Candidate Scoring</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Get AI-generated fit scores based on your job requirements and candidate profiles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Interview Question Generator</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Generate customized interview questions based on the candidate's resume and job requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">One-Click Actions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automate routine tasks like sending emails, scheduling interviews, or updating candidate status.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Server className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Custom Templates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create and save custom data extraction templates for different roles or departments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-teal-100 dark:border-teal-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Industry-leading security practices ensure your candidate data is always protected and private.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="w-full py-16 bg-teal-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">Perfect For...</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">HR Teams</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Simplify your hiring workflow while reducing manual data entry and processing time.
                  </p>
                  <ul className="space-y-2">
                    {["Resume processing automation", "Collaborative hiring", "Centralized candidate tracking"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">Recruiters & Agencies</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Process more candidates faster with AI-powered screening and matching.
                  </p>
                  <ul className="space-y-2">
                    {["Bulk candidate processing", "Improved candidate matching", "Fast client reporting"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">Hiring Managers</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Make better hiring decisions with structured data and AI insights.
                  </p>
                  <ul className="space-y-2">
                    {["Objective candidate comparison", "Skill gap analysis", "Interview preparation"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials/Stats Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Teams Love WT-Sheets</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-500 mb-2">90%</div>
                  <p className="text-gray-700 dark:text-gray-300">Reduction in manual screening time</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-500 mb-2">3x</div>
                  <p className="text-gray-700 dark:text-gray-300">More candidates processed per day</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-500 mb-2">100%</div>
                  <p className="text-gray-700 dark:text-gray-300">Google Sheets compatibility</p>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="mt-12 bg-teal-50 dark:bg-teal-900/20 p-8 rounded-xl max-w-3xl mx-auto">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "WT-Sheets has transformed how our team handles recruitment. We've cut our screening time by 85% and can now focus on actually talking to quality candidates instead of sorting through piles of resumes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-semibold mr-3">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">HR Director, Tech Company</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-16 bg-teal-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
              
              <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 text-center border-b border-teal-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-2">Free During Beta</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We're currently in beta and offering all features at no cost while we gather feedback.
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {[
                          "Full resume parsing capabilities",
                          "AI-powered candidate scoring",
                          "Unlimited collaborators",
                          "Custom templates",
                          "Email support"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Coming Soon:</h4>
                      <ul className="space-y-3">
                        {[
                          "Advanced analytics dashboard",
                          "Custom workflow automation",
                          "API access for developers",
                          "Enterprise SSO integration",
                          "Priority support"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Clock className="h-5 w-5 text-teal-300" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-teal-50 dark:bg-gray-700/30 text-center">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 px-8">
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Transform How You Hire Today</h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
                Join our growing community of smart recruiters who are saving time and making better hiring decisions with WT-Sheets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-teal-600 hover:bg-teal-50">
                  Install WT-Sheets Now
                </Button>
                <Button size="lg" variant="outline" className="border-teal-300 text-white hover:bg-teal-600">
                  Schedule a Demo
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
