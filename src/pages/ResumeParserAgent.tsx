
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, FileText, CheckCircle2, Brain, BarChart2, FileSpreadsheet, Database, Layers, Terminal, Search, Shield, Settings } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const ResumeParserAgent = () => {
  const [demoEmail, setDemoEmail] = useState("");
  
  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Demo request submitted! We'll contact you shortly.");
    setDemoEmail("");
  };

  return (
    <>
      <Helmet>
        <title>Resume Parser Agent | WhiteTable.ai</title>
        <meta name="description" content="Transform any resume format into structured data with WhiteTable.ai's Resume Parser Agent. Integrate our API for seamless resume processing." />
        <meta name="keywords" content="resume parsing, resume parser api, cv parser, whitetable ai" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-up">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-2">
                    AI Resume Processing
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Resume Parser Agent
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Instantly convert any resume format into structured, searchable data. Process thousands of resumes with precision and extract the information that matters.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      Get API Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                      View Documentation
                      <Code className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900/30">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <FileText className="h-12 w-12 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2 w-3/4"></div>
                        <div className="h-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2 w-5/6"></div>
                        <div className="h-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-2 w-2/3"></div>
                        <div className="h-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center my-6">
                      <ArrowRight className="h-8 w-8 text-blue-400 animate-pulse" />
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="font-mono text-sm text-blue-600 dark:text-blue-400">"name": </div>
                        <div className="font-mono text-sm text-green-600 dark:text-green-400">"John Smith"</div>
                      </div>
                      <div className="flex justify-between mb-2">
                        <div className="font-mono text-sm text-blue-600 dark:text-blue-400">"email": </div>
                        <div className="font-mono text-sm text-green-600 dark:text-green-400">"john@example.com"</div>
                      </div>
                      <div className="flex justify-between mb-2">
                        <div className="font-mono text-sm text-blue-600 dark:text-blue-400">"skills": </div>
                        <div className="font-mono text-sm text-green-600 dark:text-green-400">["JavaScript", "React"]</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Effortless Resume Processing</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our Resume Parser Agent handles the heavy lifting, so you can focus on finding the best talent.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Universal Format Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Process any resume format including PDF, DOCX, TXT, RTF, HTML and even image-based resumes (PNG, JPG).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Extraction</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced machine learning identifies and extracts key information with high accuracy, regardless of layout or template.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Database className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Structured JSON Output</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Receive clean, standardized JSON data that's ready to integrate with your systems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Search className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Contextual Skill Extraction</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identify skills in context, understanding their relation to roles, projects, and industries for better matching.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enterprise-grade security with data encryption, secure processing, and privacy controls.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Define custom data extraction templates tailored to your specific needs and fields.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Technical Details Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">Simple Integration</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Our API is designed for easy integration with minimal code.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">API Request</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto">
                      <div className="text-blue-400">POST /api/v1/resume/parse</div>
                      <div className="text-gray-400 mt-2">// Headers</div>
                      <div className="ml-4 mt-1">
                        <span className="text-purple-400">"Content-Type"</span>: 
                        <span className="text-green-400"> "multipart/form-data"</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-purple-400">"Authorization"</span>: 
                        <span className="text-green-400"> "Bearer YOUR_API_KEY"</span>
                      </div>
                      <div className="text-gray-400 mt-2">// Request body</div>
                      <div className="ml-4 mt-1">
                        <span className="text-purple-400">"file"</span>: 
                        <span className="text-green-400"> [Binary data]</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">API Response</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto">
                      <div className="text-gray-400">// 200 OK response</div>
                      <div className="ml-4 mt-1">{'{'}</div>
                      <div className="ml-8">
                        <span className="text-purple-400">"name"</span>: 
                        <span className="text-green-400"> "John Smith"</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-purple-400">"email"</span>: 
                        <span className="text-green-400"> "john@example.com"</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-purple-400">"phone"</span>: 
                        <span className="text-green-400"> "+1 555-123-4567"</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-purple-400">"skills"</span>: [
                        <span className="text-green-400"> "JavaScript", "React", "Node.js"</span> ],
                      </div>
                      <div className="ml-8">
                        <span className="text-purple-400">"experience"</span>: [
                      </div>
                      <div className="ml-12">{'{'}</div>
                      <div className="ml-16">
                        <span className="text-purple-400">"title"</span>: 
                        <span className="text-green-400"> "Frontend Developer"</span>,
                      </div>
                      <div className="ml-16">
                        <span className="text-purple-400">"company"</span>: 
                        <span className="text-green-400"> "Tech Corp"</span>
                      </div>
                      <div className="ml-12">{'}'}</div>
                      <div className="ml-8">]</div>
                      <div className="ml-4">{'}'}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    View Full Documentation
                    <Code className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Built For Modern Recruitment</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our Resume Parser Agent powers a range of recruitment workflows.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Applicant Tracking Systems</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Seamlessly integrate with your ATS to automate resume intake and create structured candidate profiles.
                  </p>
                  <ul className="space-y-2">
                    {["Automatic profile creation", "Candidate database building", "Skills tagging and filtering"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Recruitment Agencies</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Process high volumes of resumes quickly to match candidates to opportunities more efficiently.
                  </p>
                  <ul className="space-y-2">
                    {["Bulk resume processing", "Talent pool categorization", "Faster candidate shortlisting"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Enterprise HR Departments</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Standardize and centralize candidate data across multiple positions and departments.
                  </p>
                  <ul className="space-y-2">
                    {["Consistent data structure", "Enterprise system integration", "Reporting and analytics"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Structure Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">Comprehensive Data Extraction</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Our Resume Parser Agent extracts detailed, structured information from every resume.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Core Fields</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <ul className="space-y-3">
                        {[
                          "Personal Information (name, email, phone, location)",
                          "Work Experience (company, title, dates, description)",
                          "Education (institution, degree, major, dates)",
                          "Skills (technical, soft skills, proficiency levels)",
                          "Languages (name, proficiency)",
                          "Certifications & Licenses"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Advanced Fields</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <ul className="space-y-3">
                        {[
                          "Projects (name, description, technologies, outcome)",
                          "Publications & Patents",
                          "Awards & Honors",
                          "Professional Affiliations",
                          "Volunteer Experience",
                          "Custom Fields (configure based on your needs)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    View Sample Output Schema
                    <Terminal className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Try It Out Form */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Request a demo to see how our Resume Parser Agent can transform your hiring process.
                  </p>
                </div>
                
                <form onSubmit={handleDemoRequest} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value)}
                      placeholder="Enter your work email" 
                      className="flex-1 px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" 
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Request Demo
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    We'll never share your email. Privacy policy applies.
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Simple, usage-based pricing with no hidden fees.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Starter</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold">$49</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Perfect for small teams and startups.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Up to 200 resumes per month",
                        "Standard data extraction",
                        "Email support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Get Started
                    </Button>
                  </div>
                </div>
                
                {/* Pro Plan */}
                <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-xl shadow-lg overflow-hidden relative transform scale-105">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Professional</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold">$199</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      For growing teams with higher volume needs.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Up to 1,000 resumes per month",
                        "Advanced data extraction",
                        "Custom field mapping",
                        "API access",
                        "Priority support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Start Free Trial
                    </Button>
                  </div>
                </div>
                
                {/* Enterprise Plan */}
                <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-2xl font-bold">Custom</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Tailored solutions for large organizations.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Unlimited resumes",
                        "Full-featured extraction",
                        "Custom integrations",
                        "Dedicated support",
                        "SLA guarantees",
                        "On-premise option available"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Resume Processing?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Join hundreds of companies that are saving time and making better hiring decisions with our AI-powered Resume Parser Agent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get API Access Now
                </Button>
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

export default ResumeParserAgent;
