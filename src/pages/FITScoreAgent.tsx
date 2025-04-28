import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Check, 
  FileText, 
  FileSpreadsheet, 
  Brain, 
  Gauge, 
  LineChart, 
  Target, 
  LayoutDashboard,
  BarChart, 
  Database as DatabaseIcon,
  Clock as ClockIcon,
  ShieldCheck,
  Award as AwardIcon,
  Server
} from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const FITScoreAgent = () => {
  const [demoEmail, setDemoEmail] = useState("");

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo requested with email:", demoEmail);
    setDemoEmail("");
    alert("Demo request submitted successfully!");
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
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Stop Guessing, Start Measuring Candidate Fit</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  The FIT Score Agent removes subjectivity from resume screening. Our AI analyzes each resume against your specific job requirements, delivering an objective score (0-100) and detailed insights on candidate strengths and gaps.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Gauge className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Objective FIT Score</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Get a clear numerical score (0-100) representing how well each candidate matches your job requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Check className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Detailed Strength Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Understand exactly which skills and experiences make a candidate a good match for the role.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Gap Identification</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identify specific areas where candidates lack required qualifications or experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple Two-Step Workflow</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our FIT Score Agent works in two simple steps, making it easy to integrate into your hiring workflow.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center bg-purple-500 text-white rounded-full w-10 h-10 font-bold text-lg">
                      1
                    </span>
                    <h3 className="text-xl font-bold ml-4">Create FIT Job ID</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      First, submit your job description through our API. Our AI processes it to extract key requirements and creates a unique FIT Job ID.
                    </p>
                    <div className="flex items-center justify-center mt-6">
                      <div className="text-center">
                        <FileText className="h-12 w-12 text-purple-500 mx-auto mb-2" />
                        <p className="text-sm font-medium">Job Description</p>
                        <div className="my-4">
                          <ArrowRight className="h-5 w-5 text-purple-400 mx-auto" />
                        </div>
                        <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-lg">
                          <code className="text-purple-700 dark:text-purple-300">fitJobId: "job_12345"</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center bg-purple-500 text-white rounded-full w-10 h-10 font-bold text-lg">
                      2
                    </span>
                    <h3 className="text-xl font-bold ml-4">Get FIT Score & Insights</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Send the candidate resume along with the FIT Job ID. Our AI compares them and returns a comprehensive analysis.
                    </p>
                    <div className="flex items-center justify-center mt-6">
                      <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-4">
                          <div>
                            <FileText className="h-10 w-10 text-purple-500 mx-auto mb-1" />
                            <p className="text-xs">Resume</p>
                          </div>
                          <span className="text-sm">+</span>
                          <div>
                            <code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">fitJobId</code>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-purple-400 mx-auto" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-center">
                            <p className="text-sm font-medium">87</p>
                            <p className="text-xs">FIT Score</p>
                          </div>
                          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-center">
                            <p className="text-xs">Strengths</p>
                          </div>
                          <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-center">
                            <p className="text-xs">Gaps</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  The FIT Score Agent offers comprehensive capabilities to transform your hiring decision process.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Contextual Understanding</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our AI understands the meaning behind job requirements, not just keywords, for more accurate matching.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <BarChart className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Scoring</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Evaluates technical skills, experience, education, certifications, and soft skills for a holistic score.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileSpreadsheet className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Evidence-Based Results</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Provides specific resume excerpts that support the identified strengths and gaps.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <DatabaseIcon className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bulk Processing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Process hundreds of resumes against a single job description efficiently for high-volume hiring.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <ClockIcon className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Get detailed scoring and analysis in seconds, dramatically reducing screening time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-purple-100 dark:border-purple-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bias Mitigation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Focuses on skills and experience while avoiding demographic factors that could introduce bias.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* API Demo */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Easy API Integration</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our RESTful API makes it simple to integrate FIT Score capabilities into your existing workflow.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold mb-4">Create FIT Job ID</h3>
                  <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                    <p className="text-purple-400 mb-2">POST /api/v1/fit/job</p>
                    <div className="text-gray-400"># Request body</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"job_description"</span>: 
                      <span className="text-green-400"> "We are seeking a Senior Software Engineer with 5+ years of React experience..."</span>
                    </div>
                    <div className="text-gray-100">{'}'}</div>
                    
                    <div className="mt-4 text-gray-400"># Response</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"fitJobId"</span>: 
                      <span className="text-green-400"> "fit_j_615a3b2c"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"status"</span>: 
                      <span className="text-green-400"> "success"</span>
                    </div>
                    <div className="text-gray-100">{'}'}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Evaluate Resume</h3>
                  <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                    <p className="text-purple-400 mb-2">POST /api/v1/fit/score</p>
                    <div className="text-gray-400"># Request body</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"fitJobId"</span>: 
                      <span className="text-green-400"> "fit_j_615a3b2c"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"resume"</span>: 
                      <span className="text-green-400"> "Full resume text or resume URL..."</span>
                    </div>
                    <div className="text-gray-100">{'}'}</div>
                    
                    <div className="mt-4 text-gray-400"># Response</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"fitScore"</span>: 
                      <span className="text-green-400"> 87</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"strengths"</span>: [
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"Strong React.js experience (7 years)"</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"Extensive API integration knowledge"</span>
                    </div>
                    <div className="ml-4">],</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"gaps"</span>: [
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"Limited experience with GraphQL"</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"No AWS certification mentioned"</span>
                    </div>
                    <div className="ml-4">],</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"details"</span>: {"{}"}
                    </div>
                    <div className="text-gray-100">{'}'}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  View Complete API Documentation
                </Button>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Perfect For Multiple Hiring Scenarios</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  The FIT Score Agent adapts to various recruitment needs across different platforms.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                      <AwardIcon className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-bold text-xl ml-3">ATS Integration</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Enhance your applicant tracking system with automated scoring and candidate ranking.
                  </p>
                  <ul className="space-y-2">
                    {["Automatic candidate scoring", "Prioritized candidate lists", "Detailed match insights"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                      <Server className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-bold text-xl ml-3">Recruitment Agencies</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Match candidates to multiple jobs simultaneously for faster placements.
                  </p>
                  <ul className="space-y-2">
                    {["Multi-job candidate matching", "Talent pool optimization", "Client-ready candidate reports"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                      <FileSpreadsheet className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-bold text-xl ml-3">Internal Mobility</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Match current employees to new internal opportunities for better talent utilization.
                  </p>
                  <ul className="space-y-2">
                    {["Employee skill matching", "Internal mobility programs", "Career development planning"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The FIT Score Agent is designed for easy integration with your existing tech stack through our developer-friendly API.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {["REST API", "Webhooks", "JSON", "OAuth 2.0"].map((tech, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 py-3 px-4 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900/50">
                      <span className="font-medium text-purple-600 dark:text-purple-400">{tech}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  Explore Integration Options
                </Button>
              </div>
            </div>
          </section>

          {/* Demo Request */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">See the FIT Score Agent in Action</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Request a personalized demo to see how our AI can transform your candidate evaluation process.
                  </p>
                </div>
                
                <form onSubmit={handleDemoRequest} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value)}
                      placeholder="Enter your work email" 
                      className="flex-1 px-4 py-2 border border-purple-200 dark:border-purple-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800" 
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-purple-500 hover:bg-purple-600"
                    >
                      Request Demo
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your hiring volume and needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-purple-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Starter</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For small teams</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$49</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "100 evaluations/month",
                        "Standard FIT scoring",
                        "Basic gap analysis",
                        "API access",
                        "Email support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600">Get Started</Button>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 rounded-xl shadow-lg overflow-hidden relative transform scale-105">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="p-6 border-b border-purple-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Professional</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For growing teams</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$199</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "500 evaluations/month",
                        "Advanced FIT scoring",
                        "Detailed strength & gap analysis",
                        "Evidence-based results",
                        "Webhook integration",
                        "Priority support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600">Start Free Trial</Button>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-purple-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For large organizations</p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold">Custom</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "Unlimited evaluations",
                        "Custom scoring models",
                        "Advanced analytics dashboard",
                        "Dedicated account manager",
                        "SSO integration",
                        "SLA guarantees",
                        "On-premise options"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600">Contact Sales</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Candidate Screening Today</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
                Join forward-thinking companies using WhiteTable's FIT Score Agent to make faster, more informed hiring decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-purple-600 hover:bg-purple-50">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-purple-300 text-white hover:bg-purple-600">
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

export default FITScoreAgent;
