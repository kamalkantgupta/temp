
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, CheckCircle2, FileText, Brain, BarChart, MessageCircle, Database, ClipboardCheck, HelpCircle, Zap, Shield } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const QuestionAPI = () => {
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
        <title>Question API | Generate Smart Interview Questions | WhiteTable.ai</title>
        <meta name="description" content="Create tailored, context-aware interview questions with WhiteTable's Question API. Balance standardization with personalization for better candidate evaluation." />
        <meta name="keywords" content="interview questions, AI interview, hiring automation, recruitment questions" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-up">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium text-sm mb-2">
                    Smart Interview Technology
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Question API
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Generate intelligent, tailored interview questions that perfectly balance standardization for fairness with personalization for insight.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Try API Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                      View Documentation
                      <Code className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-orange-100 dark:border-orange-900/30">
                    <div className="flex items-center mb-8">
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-full">
                        <HelpCircle className="h-8 w-8 text-orange-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">Intelligent Questions</h3>
                        <p className="text-gray-600 dark:text-gray-400">Tailored to role and candidate</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          "Based on your experience developing React applications at TechCorp, what specific performance optimizations did you implement?"
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          "How would you approach integrating a third-party API into our existing architecture while ensuring security best practices?"
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          "Describe a situation where you had to prioritize between technical debt and delivering new features."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">The Challenge with Interview Questions</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Most companies struggle with creating interview questions that are both standardized for fair comparison and personalized to truly understand each candidate's unique potential.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="border border-red-100 dark:border-red-900/30">
                    <CardContent className="pt-6">
                      <div className="mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                        <ClipboardCheck className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Generic Questions</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Standard cookie-cutter questions that fail to uncover a candidate's true capabilities and fit.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border border-red-100 dark:border-red-900/30">
                    <CardContent className="pt-6">
                      <div className="mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                        <Brain className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Time-Consuming</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Creating thoughtful, role-specific questions takes time that busy hiring teams rarely have.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border border-red-100 dark:border-red-900/30">
                    <CardContent className="pt-6">
                      <div className="mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                        <BarChart className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Inconsistent Evaluation</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Different questions for different candidates make fair comparison nearly impossible.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Solution: Balanced Question Generation</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    WhiteTable's Question API creates the perfect mix of standardized questions for fairness and personalized questions for deeper insight.
                  </p>
                  <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 mb-6">
                    <div className="px-4 py-2 bg-green-500 text-white rounded-md">
                      Structured
                    </div>
                    <div className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      +
                    </div>
                    <div className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Personalized
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    This approach ensures both fair comparison between candidates and deeper understanding of each individual's unique potential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full py-16 bg-orange-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How The Question API Works</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our API follows a simple two-step process to generate perfectly balanced interview question sets.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center bg-orange-500 text-white rounded-full w-10 h-10 font-bold text-lg">
                      1
                    </span>
                    <h3 className="text-xl font-bold ml-4">Create Standard Question Set</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      First, generate a standard set of questions based on the job description that will be used for all candidates in a specific interview round.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Inputs:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>Job description</li>
                        <li>Interview round (screening, technical, behavioral)</li>
                        <li>Focus area (optional)</li>
                        <li>Number of questions needed</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Outputs:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>Set of standardized questions</li>
                        <li>A unique <code className="bg-orange-100 dark:bg-orange-900/50 px-1 rounded">round_id</code> to reference this question set</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center bg-orange-500 text-white rounded-full w-10 h-10 font-bold text-lg">
                      2
                    </span>
                    <h3 className="text-xl font-bold ml-4">Generate Combined Questions</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      For each candidate, generate a mix of the standard questions plus personalized questions based on their specific resume.
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Inputs:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>Candidate's resume</li>
                        <li>The <code className="bg-orange-100 dark:bg-orange-900/50 px-1 rounded">round_id</code> from step 1</li>
                        <li>Total number of questions needed (noq)</li>
                        <li>Number of standard questions to include (nosq)</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Outputs:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>The standard questions (for consistency)</li>
                        <li>Additional personalized questions based on the candidate's unique experience and skills</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-4 text-center">Example</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you need 15 total questions with 10 standard questions for fair comparison:
                </p>
                <div className="flex flex-col md:flex-row gap-4 text-center">
                  <div className="flex-1 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2">10 Standard Questions</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Identical across all candidates for fair comparison</p>
                  </div>
                  <div className="flex items-center justify-center text-2xl">+</div>
                  <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2">5 Personalized Questions</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tailored to each candidate's unique background</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our Question API offers comprehensive capabilities to transform your interview process.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border border-orange-100 dark:border-orange-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <ClipboardCheck className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Perfect Balance</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Combine standardized and personalized questions in any proportion you choose for each round.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-orange-100 dark:border-orange-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Contextual Understanding</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      AI that truly understands job requirements and candidate backgrounds for highly relevant questions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-orange-100 dark:border-orange-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Generate dozens of thoughtful, role-specific questions in seconds rather than hours of manual work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-orange-100 dark:border-orange-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Database className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Round Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create tailored questions for each stage of your process—screening, technical, behavioral, and leadership interviews.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-orange-100 dark:border-orange-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Code className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Simple API</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      RESTful API design makes integration easy with your ATS, interview tools, or custom workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-orange-100 dark:border-orange-900/50 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      SOC 2 compliant with data encryption and privacy controls to keep candidate information secure.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="w-full py-16 bg-orange-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Perfect For Every Interview Format</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our Question API adapts to every interview scenario—human-led, AI-assisted, or fully automated.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                      <MessageCircle className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-xl ml-3">Human Interviews</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Give your interviewers smart, prepared questions that elicit meaningful responses and create consistency.
                  </p>
                  <ul className="space-y-2">
                    {["Structured interview scripts", "Candidate-specific follow-ups", "Better interviewer preparation"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                      <Brain className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-xl ml-3">AI-Assisted Interviews</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Power your conversational AI interviewing tools with smart, contextual question generation.
                  </p>
                  <ul className="space-y-2">
                    {["Dynamic follow-up suggestions", "Consistent evaluation framework", "Reduced interviewer bias"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                      <ClipboardCheck className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-xl ml-3">Automated Screening</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Create written or video screening questions that truly assess candidate fit beyond basic qualifications.
                  </p>
                  <ul className="space-y-2">
                    {["Customized screening forms", "Video interview questions", "Asynchronous assessment"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* API Demo */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple API Integration</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Our RESTful API makes it easy to integrate smart question generation into your workflow.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold mb-4">Create Standard Questions</h3>
                  <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                    <p className="text-blue-400 mb-2">POST /api/v1/questions/standard</p>
                    <div className="text-gray-400"># Request body</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"job_description"</span>: 
                      <span className="text-green-400"> "We are seeking an experienced React developer..."</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"round_type"</span>: 
                      <span className="text-green-400"> "technical"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"focus_area"</span>: 
                      <span className="text-green-400"> "frontend_development"</span> (optional),
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"num_questions"</span>: 
                      <span className="text-green-400"> 8</span>
                    </div>
                    <div className="text-gray-100">{'}'}</div>
                    
                    <div className="mt-4 text-gray-400"># Response</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"round_id"</span>: 
                      <span className="text-green-400"> "std_q_615f3a2b"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"questions"</span>: [
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"Describe your experience with React hooks."</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"How do you optimize performance in React applications?"</span>
                    </div>
                    <div className="ml-8">... (more questions)</div>
                    <div className="ml-4">]</div>
                    <div className="text-gray-100">{'}'}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Generate Combined Questions</h3>
                  <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                    <p className="text-blue-400 mb-2">POST /api/v1/questions/combined</p>
                    <div className="text-gray-400"># Request body</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"round_id"</span>: 
                      <span className="text-green-400"> "std_q_615f3a2b"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"resume_text"</span>: 
                      <span className="text-green-400"> "Full resume content or URL..."</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"noq"</span>: 
                      <span className="text-green-400"> 12</span> (total questions),
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">"nosq"</span>: 
                      <span className="text-green-400"> 8</span> (standard questions)
                    </div>
                    <div className="text-gray-100">{'}'}</div>
                    
                    <div className="mt-4 text-gray-400"># Response</div>
                    <div className="text-gray-100 mb-2">{'{'}</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"standard_questions"</span>: [
                    </div>
                    <div className="ml-8">... (8 standard questions)</div>
                    <div className="ml-4">],</div>
                    <div className="ml-4">
                      <span className="text-purple-400">"personalized_questions"</span>: [
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"Based on your AWS Lambda experience, how would you..."</span>,
                    </div>
                    <div className="ml-8">
                      <span className="text-green-400">"At TechCorp you mentioned implementing Redux. What challenges..."</span>,
                    </div>
                    <div className="ml-8">...</div>
                    <div className="ml-4">]</div>
                    <div className="text-gray-100">{'}'}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  Access Full Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-16 bg-orange-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple, Usage-Based Pricing</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Start for free and scale as you grow with our transparent pricing model.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Free Plan */}
                <div className="bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/30 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-orange-100 dark:border-gray-700">
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
                        "100 questions/month",
                        "Standard question generation",
                        "Basic API access",
                        "Community support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Get Started</Button>
                  </div>
                </div>

                {/* Growth Plan */}
                <div className="bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/30 rounded-xl shadow-lg overflow-hidden relative transform scale-105">
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="p-6 border-b border-orange-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Growth</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For growing teams</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$99</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "1,000 questions/month",
                        "Full question customization",
                        "Combined question generation",
                        "Webhooks integration",
                        "Email support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Start Free Trial</Button>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/30 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-orange-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">For large organizations</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        "Unlimited questions",
                        "Advanced customization",
                        "Custom integration assistance",
                        "SSO authentication",
                        "Service level agreements",
                        "Dedicated account manager"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/60">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Contact Sales</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Request */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Try the Question API Today</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    See for yourself how our AI can transform your interview questions. Request a demo or sign up for a free account.
                  </p>
                </div>
                
                <form onSubmit={handleDemoRequest} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value)}
                      placeholder="Enter your work email" 
                      className="flex-1 px-4 py-2 border border-orange-200 dark:border-orange-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800" 
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      Request Demo
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Elevate Your Interview Quality Today</h2>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
                Join forward-thinking companies using WhiteTable's Question API to conduct smarter, fairer, and more insightful interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-orange-600 hover:bg-orange-50">
                  Start Using The API Now
                </Button>
                <Button size="lg" variant="outline" className="border-orange-300 text-white hover:bg-orange-600">
                  View Documentation
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

export default QuestionAPI;
