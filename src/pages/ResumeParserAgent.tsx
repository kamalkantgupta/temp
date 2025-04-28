
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, FileText, CheckCircle2, Brain, BarChart, FileSpreadsheet, Database, Layers } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const ResumeParserAgent = () => {
  return (
    <>
      <Helmet>
        <title>Whitetable Resume Parser Agent | AI Parsing for Text & Image Resumes</title>
        <meta name="description" content="Transform any resume (PDF, DOCX, TXT, Images) into structured JSON with Whitetable's AI Agent. Highly accurate, developer-friendly API for ATS, HR Tech, and hiring platforms." />
        <meta name="keywords" content="resume parser, resume parsing api, AI parsing, resume data extraction, PDF parsing" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-6">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
                    Unlock Total Talent Intelligence: The Whitetable Resume Parser Agent
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                    Go beyond basic parsing. Our AI Agent deciphers resumes in <em>any</em> format – including images – delivering rich, structured data via a seamless API. Elevate your hiring instantly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                      Try the API Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">
                      View Documentation
                      <Code className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                      <div className="flex justify-center items-center h-40 relative">
                        <FileText className="h-24 w-24 text-teal-500 absolute opacity-20" />
                        <Brain className="h-24 w-24 text-teal-400 absolute opacity-30 animate-pulse" />
                        <Database className="h-16 w-16 text-teal-600 z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 rounded-lg opacity-30"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white rounded-lg py-1 px-3 shadow-lg text-sm font-bold">
                      JSON
                    </div>
                    <div className="absolute -top-2 -left-2 bg-teal-100 dark:bg-teal-900 rounded-lg p-2 shadow-lg">
                      <FileSpreadsheet className="h-6 w-6 text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What It Does Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Intelligent Data Extraction from Every Resume</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Whitetable Resume Parser Agent leverages advanced AI to process the full spectrum of candidate resumes – standard templates, complex layouts, PDFs, DOCX, TXT, and even <strong>image files (PNG, JPG)</strong>. It meticulously extracts key information like work experience, skills (with context!), education, certifications, and contact details, converting chaos into clean, structured JSON ready for your systems.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {["Handles PDF, DOCX, TXT", "Processes Image-based Resumes (Scans, Photos)", "Extracts Core Sections (Experience, Education, Skills, Contact)", "Delivers Standardized JSON Output"].map((feature, index) => (
                    <span key={index} className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="w-full py-16 bg-teal-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Whitetable's AI Resume Parser Agent?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Point 1 */}
                <Card className="border border-teal-100 dark:border-teal-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Unrivaled Accuracy & Context</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Achieve 92%-99% Embedding Similarity. Our AI preserves the meaning and nuances, whether from a clean PDF or a complex scanned image.
                    </p>
                  </CardContent>
                </Card>

                {/* Point 2 */}
                <Card className="border border-teal-100 dark:border-teal-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <BarChart className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Effortless Scalability</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      From one resume to millions, receive consistently structured, high-fidelity data without performance degradation. Built for growth.
                    </p>
                  </CardContent>
                </Card>

                {/* Point 3 */}
                <Card className="border border-teal-100 dark:border-teal-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Code className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Seamless Developer Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Connect easily via REST API. Comprehensive docs, SDKs, and developer support streamline integration with your ATS, CRM, or custom platform.
                    </p>
                  </CardContent>
                </Card>

                {/* Point 4 */}
                <Card className="border border-teal-100 dark:border-teal-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">True Format Flexibility (Including Images)</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Don't limit your talent pool. Process virtually any resume format submitted, including direct image uploads or scans.
                    </p>
                  </CardContent>
                </Card>

                {/* Point 5 */}
                <Card className="border border-teal-100 dark:border-teal-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Contextual Skill Identification</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Go beyond keywords. Our agent understands skills within the context of experience, providing deeper candidate insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Performance Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Performance That Speaks Volumes</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center">
                  We measure success with <strong>Embedding Similarity</strong>, quantifying how accurately the AI captures the resume's original meaning and context in the structured output. This is crucial for complex layouts and image-based resumes.
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400">Resume Type</th>
                        <th className="text-right py-3 px-4 text-gray-600 dark:text-gray-400">Embedding Similarity / Accuracy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <td className="py-4 px-4 text-gray-800 dark:text-gray-200 font-medium">Standard Text Resumes: PDF, DOCX, TXT</td>
                        <td className="py-4 px-4 text-right text-teal-600 dark:text-teal-400 font-bold">96% - 99%</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-gray-800 dark:text-gray-200 font-medium">Complex & Image Resumes: Scans, JPG, PNG</td>
                        <td className="py-4 px-4 text-right text-teal-600 dark:text-teal-400 font-bold">92% - 99%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                  These figures highlight the agent's robustness across diverse inputs, ensuring reliable data extraction for all candidates.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-16 bg-teal-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">From Any Resume to Actionable Data in 3 Steps</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Step 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-3 -left-3 bg-teal-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">1</div>
                  <h3 className="font-semibold text-xl mb-3 mt-2 pl-2">API Call</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Submit resumes through our simple API endpoint. Accepts PDF, DOCX, TXT, PNG, JPG, and other common formats.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-3 -left-3 bg-teal-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">2</div>
                  <h3 className="font-semibold text-xl mb-3 mt-2 pl-2">AI Processing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The Whitetable Agent analyzes layout, text, and visual elements, intelligently extracting and structuring information.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-3 -left-3 bg-teal-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">3</div>
                  <h3 className="font-semibold text-xl mb-3 mt-2 pl-2">Receive Structured JSON</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get clean, predictable JSON output, ready for immediate use in your applications and workflows.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 max-w-xs mx-auto">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-3">
                    <Layers className="h-10 w-10 text-teal-500" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Visual flowchart: 1. Upload diverse resume files → 2. Whitetable AI Agent Processing → 3. Structured JSON Output</p>
                </div>
              </div>
            </div>
          </section>

          {/* Developer Focus Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Built By Developers, For Developers</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Integrate cutting-edge resume parsing without the headache. Our RESTful API is designed for ease of use, backed by clear documentation, code samples (Python, Node.js, Java, etc.), and responsive support. Focus on building incredible hiring tools, powered by Whitetable.
                </p>
                <Button variant="outline" className="border-teal-300 text-teal-600 hover:bg-teal-50">
                  Explore API Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Test Data Section */}
          <section className="w-full py-16 bg-teal-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">See the Agent's Precision</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Check out example JSON outputs generated from various real-world resume types, including image formats.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-100">
                    Test Data 1 (Standard PDF)
                  </Button>
                  <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-100">
                    Test Data 2 (Complex Multi-Column DOCX)
                  </Button>
                  <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-100">
                    Test Data 3 (Scanned Image Resume - PNG)
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Ideal For:</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Applicant Tracking Systems (ATS)",
                    "Hiring Automation Platforms",
                    "Job Boards & Talent Marketplaces",
                    "Internal HR Systems & CRMs",
                    "Recruitment Process Outsourcing (RPO)",
                    "Skill-Based Talent Analytics Tools"
                  ].map((useCase, index) => (
                    <div key={index} className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg text-center">
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-16 bg-teal-600 dark:bg-teal-800">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stop Parsing, Start Understanding.</h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
                Upgrade your hiring workflow with intelligent, format-agnostic resume data extraction. Integrate the Whitetable Resume Parser Agent and unlock the true potential of your candidate pool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-teal-600 hover:bg-teal-50">
                  Get API Key & Start Free
                </Button>
                <Button size="lg" variant="outline" className="border-teal-300 text-white hover:bg-teal-700">
                  Talk to an Expert
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

export default ResumeParserAgent;
