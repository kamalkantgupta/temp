
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Code, FileCode, GitCompareArrows, Gauge, Brain, LineChart, Zap, CheckCircle2, Clock, Settings, Scale } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const FITScoreAgent = () => {
  return (
    <>
      <Helmet>
        <title>FIT Score Agent | AI Resume & Job Description Matching API</title>
        <meta name="description" content="Instantly match resumes to job descriptions with Whitetable's FIT Score Agent. Get AI-powered Fit Scores (0-100), strength/gap analysis via API. Perfect for ATS & HR Tech." />
        <meta name="keywords" content="resume matching, job description matching, AI hiring, candidate evaluation" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
                    Unlock Precision Hiring: The Whitetable FIT Score Agent
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                    Instantly score resume-to-job description matches with AI. Get objective FIT Scores (0-100) and detailed candidate insights to streamline screening and hire smarter, faster.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Get API Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      View API Docs
                      <Code className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4">
                      <div className="flex justify-center items-center h-48">
                        <div className="flex items-center space-x-8">
                          <div className="bg-purple-100 p-4 rounded-lg">
                            <FileCode className="h-16 w-16 text-purple-500" />
                          </div>
                          <GitCompareArrows className="h-10 w-10 text-purple-400" />
                          <div className="bg-purple-100 p-4 rounded-lg">
                            <Gauge className="h-16 w-16 text-purple-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg py-2 px-4 shadow-lg font-bold text-purple-600 border border-purple-200">
                      FIT Score: 87
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Stop Guessing, Start Scoring: AI-Powered Candidate Matching</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Overwhelmed by resume volume? The Whitetable FIT Score Agent cuts through the noise. Our AI analyzes resumes against your specific job descriptions, delivering an objective FIT Score (0-100) plus actionable insights on candidate strengths and gaps. Automate screening, focus on top contenders, and make data-driven hiring decisions with confidence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-red-700 dark:text-red-400 font-medium">Manual resume screening is time-consuming and prone to bias.</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 font-medium">AI-driven matching provides objective, fast, and scalable candidate evaluation.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">Simple Two-Step API Workflow</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Step 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    <h3 className="font-semibold text-xl">Create FIT Job ID</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Submit your Job Description (JD) text via API. The Agent processes it and returns a unique <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded text-purple-700 dark:text-purple-300">fitJobId</code> representing that specific role's requirements.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded text-sm font-mono">
                    Input: Job Description (Text) → Output: <code>fitJobId</code>
                  </div>
                  <div className="mt-4">
                    <a href="/docs/fit-score#create-job" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 flex items-center">
                      <Code className="h-4 w-4 mr-1" /> View Documentation
                    </a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    <h3 className="font-semibold text-xl">Evaluate Resume & Get FIT Score</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Send the <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded text-purple-700 dark:text-purple-300">fitJobId</code> and the candidate's resume (URL or text content) to the evaluation endpoint. The Agent performs the AI match.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded text-sm font-mono">
                    Input: <code>fitJobId</code>, Resume (URL/Text) → Output: FIT Score, Pros, Cons, Details
                  </div>
                  <div className="mt-4">
                    <a href="/docs/fit-score#evaluate-resume" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 flex items-center">
                      <Code className="h-4 w-4 mr-1" /> View Documentation
                    </a>
                  </div>
                </div>
              </div>

              {/* Output Explanation */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                <h3 className="font-semibold text-xl mb-4">Receive Comprehensive Insights:</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="mr-3 text-purple-600 font-bold">FIT Score (0-100):</div>
                    <div className="text-gray-700 dark:text-gray-300">Overall alignment percentage between resume and JD.</div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 text-purple-600 font-bold">Pros:</div>
                    <div className="text-gray-700 dark:text-gray-300">Key skills/experiences identified as strong matches.</div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 text-purple-600 font-bold">Cons:</div>
                    <div className="text-gray-700 dark:text-gray-300">Areas where the candidate appears to lack required qualifications.</div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 text-purple-600 font-bold">Details:</div>
                    <div className="text-gray-700 dark:text-gray-300">Specific resume excerpts justifying the Pros and Cons assessment.</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Integrate the FIT Score Agent?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Instant Resume Screening & Scoring</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Evaluate candidate suitability in seconds, drastically reducing manual review time.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Gauge className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Objective FIT Score (0-100)</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Get a clear, consistent, AI-driven metric for resume relevance against job requirements.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Detailed Strength & Gap Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Understand *why* a candidate fits (or doesn't), pinpointing specific skills and experience alignment.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 4 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Scale className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Automated Candidate Prioritization</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Quickly surface the most promising candidates based on their FIT Score.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 5 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Evidence-Based Resume Insights</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      See exactly which parts of the resume support the identified strengths and weaknesses.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 6 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileCode className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Seamless API Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Easily embed into your ATS, HR platform, or custom hiring tools via a developer-friendly REST API.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 7 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Reduce Manual Screening Effort</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Free up recruiter time to focus on engaging qualified candidates, not sifting through irrelevant resumes.
                    </p>
                  </CardContent>
                </Card>

                {/* Feature 8 */}
                <Card className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Flexible & Adaptable AI</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our underlying AI models adapt to various job roles and industries for relevant scoring.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* API Requests Overview Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">API at a Glance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                {/* API 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-3 text-purple-600">1. Create FIT Job ID</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Analyzes the Job Description to establish matching criteria.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="font-medium w-20">Input:</span>
                      <span className="text-gray-600 dark:text-gray-400">Job Description (text)</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-20">Output:</span>
                      <span className="text-gray-600 dark:text-gray-400"><code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">fitJobId</code> (string)</span>
                    </div>
                  </div>
                </div>

                {/* API 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-3 text-purple-600">2. Evaluate Resume</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Scores a resume against the pre-processed Job Description.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="font-medium w-20">Input:</span>
                      <span className="text-gray-600 dark:text-gray-400"><code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">fitJobId</code> (string), Resume (URL or text)</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-20">Output:</span>
                      <span className="text-gray-600 dark:text-gray-400">FIT Score (int), Pros (list), Cons (list), Details (object)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  Dive into the Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Powering Efficient Recruitment Workflows</h2>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-8">
                  <ul className="space-y-4">
                    {[
                      "ATS Platforms: Enhance built-in matching capabilities.",
                      "HR & Recruitment Agencies: Accelerate candidate shortlisting.",
                      "Job Boards: Offer enhanced job matching for seekers.",
                      "Internal Hiring Tools: Improve talent discovery within organizations.",
                      "Career Services & Resume Builders: Provide resume optimization feedback."
                    ].map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                    Easy to integrate AI APIs for ATS, hiring automation platforms, and job platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Developer Focus Section */}
          <section className="w-full py-16 bg-purple-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Built for Seamless Integration</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Integrate powerful AI matching capabilities effortlessly. Our FIT Score Agent offers a straightforward RESTful API, clear documentation, and code examples to get you up and running quickly. Enhance your platform with objective candidate scoring.
                </p>
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  Explore API Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-16 bg-purple-600 dark:bg-purple-900">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Transform Your Candidate Screening Process Today</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
                Leverage AI to identify the best-fit candidates faster and more accurately. Integrate the Whitetable FIT Score Agent and revolutionize your recruitment workflow.
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
