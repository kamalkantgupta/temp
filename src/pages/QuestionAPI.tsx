
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, CheckCircle2, FileText, Brain, BarChart, MessageCircle, Database, ClipboardCheck } from "lucide-react";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const QuestionAPI = () => {
  return (
    <>
      <Helmet>
        <title>Whitetable Question Agent | Generate Fair & Insightful Interview Questions</title>
        <meta name="description" content="Effortlessly generate fair and insightful interview questions with the Whitetable Question Agent. Tailored for human-led, AI-assisted, or fully automated interviews." />
        <meta name="keywords" content="interview questions, AI interview, hiring automation, recruitment questions" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                  Whitetable Question Agent: Generate Fair & Insightful Interview Questions Effortlessly
                </h1>
                <p className="text-xl text-orange-700 dark:text-orange-300 font-semibold">
                  Stop asking generic questions. Start having insightful conversations.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                  Revolutionize your interview process with the Whitetable Question Agent. Effortlessly generate both standardized questions for fairness and deeply personalized questions for insight, perfectly tailored for human-led, AI-assisted, or fully automated interviews.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                  Achieve the optimal balance, creating a seamless, efficient, and more effective hiring experience for recruiters and candidates alike.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                    Learn More About Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                    Explore Full Feature Test
                    <Code className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Problem/Solution Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">The Challenge: Balancing Fairness and Depth in Interviews</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Conducting interviews that fairly evaluate all candidates while also deeply understanding individual potential is tough. Generic questions miss nuances, while unstructured approaches introduce bias. How do you ensure consistency and uncover unique strengths?
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-gray-800 dark:text-gray-200">
                      <span className="font-medium">Common issues:</span> Inconsistent evaluation criteria, missed candidate strengths, biased questioning, and lengthy interview prep time.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">The Solution: Intelligent, Context-Aware Question Generation</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Whitetable Question Agent empowers your team by intelligently generating relevant questions based on:
                  </p>
                  <ul className="space-y-3">
                    {[
                      { label: "Job Description (JD):", desc: "Ensuring alignment with role requirements." },
                      { label: "Candidate Resume:", desc: "Unlocking specific experiences and skills." },
                      { label: "Interview Round:", desc: "Adapting questions for screening, technical, or behavioral stages." },
                      { label: "Focus Area:", desc: "Targeting specific competencies or criteria." }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-2 bg-orange-100 dark:bg-orange-900/30 rounded-full p-1">
                          <CheckCircle2 className="h-4 w-4 text-orange-600" />
                        </div>
                        <span><span className="font-medium">{item.label}</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-16 bg-orange-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">How the Whitetable Question Agent Delivers Precision</h2>
              <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                Our sophisticated agent operates via two specialized pathways for maximum control and flexibility:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Agent 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    <h3 className="font-semibold text-xl">Generate Standard Questions Agent</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Purpose:</p>
                      <p className="text-gray-700 dark:text-gray-300">Creates a consistent set of questions for a specific role and interview round.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Input:</p>
                      <p className="text-gray-700 dark:text-gray-300">Job details, round type, focus area, desired number of standard questions.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Output:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Delivers the standard questions + a unique <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded text-orange-700 dark:text-orange-300">round_id</code>. This ID is your key to reusing the exact same questions for every candidate in that round, ensuring fairness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agent 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    <h3 className="font-semibold text-xl">Generate Personalized and Standard Questions Agent</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Purpose:</p>
                      <p className="text-gray-700 dark:text-gray-300">Combines standard questions with unique, resume-driven questions.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Input:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Candidate's resume, the <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded text-orange-700 dark:text-orange-300">round_id</code> (from Agent 1), total questions needed (noq), number of standard questions desired (nosq).
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Output:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Returns a tailored mix: the consistent standard questions + new personalized questions based on the candidate's specific background, skills, and the JD context.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Example:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Need 15 questions total, using 10 standard ones? This agent provides the 10 standard + 5 personalized questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  View Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Features & Benefits Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Unlock Key Advantages for Your Hiring Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Card 1 */}
                <Card className="border border-orange-100 dark:border-orange-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <ClipboardCheck className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Ensure Unbiased Candidate Comparison</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Standardized questions (round_id based) provide a level playing field for objective evaluation.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="border border-orange-100 dark:border-orange-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Unlock Deeper Candidate Insights</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Personalized questions probe beyond the surface, revealing specific skills, experiences, and fit.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="border border-orange-100 dark:border-orange-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Maintain Full Control Over Question Mix</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      You decide the ratio of standard vs. personalized questions for each interview stage.
                    </p>
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="border border-orange-100 dark:border-orange-900/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Database className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Scale Effortlessly</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Handles high-volume recruitment without compromising speed or quality. Perfect for startups and enterprises alike.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="w-full py-16 bg-orange-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-10">Flexible for Your Recruitment Strategy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Scenario 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-4 text-orange-600">Scenario 1: Consistent Early-Stage Screening</h3>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <FileText className="h-8 w-8 text-orange-600" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Use only standard questions across all applicants in initial rounds for maximum fairness.
                    </p>
                  </div>
                  <div className="mt-4 ml-14">
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="bg-orange-50 dark:bg-orange-900/20 p-2 text-center rounded text-xs">
                          Standard Q{num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl mb-4 text-orange-600">Scenario 2: In-Depth Final Interviews</h3>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Brain className="h-8 w-8 text-orange-600" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Blend standard questions with a higher number of personalized ones to deeply explore finalist capabilities.
                    </p>
                  </div>
                  <div className="mt-4 ml-14">
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2].map((num) => (
                        <div key={num} className="bg-orange-50 dark:bg-orange-900/20 p-2 text-center rounded text-xs">
                          Standard Q{num}
                        </div>
                      ))}
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="bg-green-50 dark:bg-green-900/20 p-2 text-center rounded text-xs">
                          Custom Q{num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Test Data Section */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-6">Rigorously Tested for Real-World Performance</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  The Whitetable Question Agent has been extensively validated using thousands of diverse, real-world job descriptions and resumes across various industries and roles. See how it performs:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    Test Data 1
                  </Button>
                  <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    Test Data 2
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Section */}
          <section className="w-full py-16 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Easy Integration with Your Existing Tools</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The Whitetable Question Agent is built for compatibility. Integrate smoothly with leading Applicant Tracking Systems (ATS), hiring automation platforms, and custom recruitment software.
                </p>
                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  View Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-16 bg-orange-600 dark:bg-orange-800">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Elevate Your Interviews Today</h2>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
                The Whitetable Question Agent is your partner in creating more effective, efficient, and equitable interviews. Stop guessing, start asking the right questions – every time. Enhance fairness, gain deeper insights, and streamline your hiring process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-orange-600 hover:bg-orange-50">
                  View Documentation
                  <Code className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-200 text-white hover:bg-orange-700">
                  Contact Us
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
