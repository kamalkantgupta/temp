
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, FileText, Brain, Zap, BarChart2, Clock, Award, MessageCircle, Server } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import { Link } from "react-router-dom";

const ResumeParserLearnMore = () => {
  return (
    <>
      <Helmet>
        <title>Resume Parser | WhiteTable.ai</title>
        <meta name="description" content="Extract structured data from any resume format with WhiteTable's AI-powered resume parser." />
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
                    Transform Resume Chaos into Structured Data
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                    Our AI-powered Resume Parser automatically extracts candidate information from resumes in any format and transforms it into structured, searchable data.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/resume-parser-agent">
                      <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                        Try the Parser API
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                      View Documentation
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-blue-100">
                      <div className="flex justify-center items-center gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <FileText className="h-16 w-16 text-blue-500" />
                        </div>
                        <ArrowRight className="h-8 w-8 text-blue-400" />
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <Server className="h-16 w-16 text-blue-500" />
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
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Format Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Process resumes in any format: PDF, DOCX, TXT, HTML, RTF, and even image-based resumes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our advanced AI understands resume context and extracts meaningful information with high accuracy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Instant Processing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Transform resumes into structured data within seconds, saving valuable time in your hiring process.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <BarChart2 className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Extraction</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Extract contact details, work history, skills, education, certifications, and more with high precision.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Time-Saving Automation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Eliminate manual data entry and reduce screening time by up to 90% with automated resume parsing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Standardized Output</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Receive consistently structured JSON data that integrates seamlessly with your ATS or hiring system.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Upload Resume</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Send the resume file or provide a URL to our API endpoint. We accept all popular formats including PDFs, Word documents, and images.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">AI Processing</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our intelligent parser analyzes the resume contents, identifies different sections, and understands the relationships between different pieces of information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Structured Data</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Receive clean, structured JSON data with all extracted resume information, ready to be integrated into your hiring workflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">Why Use Our Resume Parser?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <ul className="space-y-4">
                    {[
                      "Save 90% of time spent on manual resume screening",
                      "Improve candidate data quality and consistency",
                      "Eliminate human error and bias in data extraction",
                      "Process hundreds of resumes within minutes"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1 text-blue-500">
                          <Check className="h-5 w-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <ul className="space-y-4">
                    {[
                      "Build a structured, searchable candidate database",
                      "Create standardized candidate profiles automatically",
                      "Seamlessly integrate with your existing ATS or CRM",
                      "Scale your recruitment operations efficiently"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1 text-blue-500">
                          <Check className="h-5 w-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Integrate With Your Tech Stack</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Our Resume Parser API is built for seamless integration with your existing tools and workflows. Connect with popular ATS platforms, CRMs, or build custom integrations with our developer-friendly API.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {["REST API", "Webhooks", "JSON", "OAuth 2.0"].map((tech, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 py-3 px-4 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/50">
                      <span className="font-medium text-blue-600 dark:text-blue-400">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Free Plan */}
                <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-blue-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Free</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For small teams and testing</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$0</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "100 resumes/month",
                        "Basic data extraction",
                        "JSON output format",
                        "Standard support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs py-1 px-3 rounded-bl-lg">Popular</div>
                  <div className="p-6 border-b border-blue-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Pro</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For growing businesses</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$99</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "1,000 resumes/month",
                        "Advanced data extraction",
                        "Multiple output formats",
                        "Webhook integrations",
                        "Priority support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">Start Free Trial</Button>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-blue-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For large organizations</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "Unlimited resumes",
                        "Full data extraction",
                        "Custom field mapping",
                        "API customization",
                        "Custom integrations",
                        "Dedicated support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">Contact Sales</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Resume Processing?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Join hundreds of companies that have revolutionized their hiring process with our AI-powered Resume Parser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/resume-parser-agent">
                  <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
                    Try For Free
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-blue-300 text-white hover:bg-blue-600">
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

export default ResumeParserLearnMore;
