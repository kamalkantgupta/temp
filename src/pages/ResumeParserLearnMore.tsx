
import React from 'react';
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Target, Gauge, Terminal, BrainCircuit, Network, Upload, Code2, FileJson, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const ResumeParserLearnMore = () => {
  return (
    <>
      <Helmet>
        <title>Resume Parser Agent | WhiteTable.ai</title>
        <meta name="description" content="Transform messy resume data into structured, actionable insights with WhiteTable's AI-powered Resume Parser Agent." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 px-6 md:px-10 hero-section">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                WhiteTable Resume Parser Agent
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Smart Hiring Simplified. Structured Data Delivered.
              </p>
              <Link to="/resume-parser-agent">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                  <BookOpen className="mr-2" />
                  View Documentation
                </Button>
              </Link>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 px-6 md:px-10 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Transform messy resume data into structured, actionable insights with WhiteTable's AI-powered Resume Parser Agent. 
                Designed to support recruiters, hiring platforms, ATS developers, and more—our Agent extracts, cleans, and delivers 
                resume data in JSON format for seamless integration into your hiring workflows.
              </p>
              <Link to="/resume-parser-agent">
                <Button variant="outline" className="text-purple-500 border-purple-500 hover:bg-purple-50">
                  View Documentation
                </Button>
              </Link>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="py-16 px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Resume Parsing</h3>
                      <p className="text-gray-600">Handle PDF, DOCX, TXT, and other common file formats. Whether it's a standard CV or a creatively styled resume, WhiteTable parses it with ease.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-500">
                      <Target size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Accurate Data Extraction</h3>
                      <p className="text-gray-600">Extracts key fields like Name, Contact Info, Experience, Education, Skills, and Certifications with high accuracy.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-green-50 text-green-500">
                      <Gauge size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Scalable Performance</h3>
                      <p className="text-gray-600">From single resumes to batch processing thousands, get consistently structured results.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                      <Terminal size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Developer-First Integration</h3>
                      <p className="text-gray-600">RESTful API with simple endpoints and JSON output for easy parsing and integration.</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="text-center">
                <Link to="/resume-parser/docs#features">
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    <BookOpen className="mr-2" />
                    Explore Full Feature Set
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Why WhiteTable Section */}
          <section className="py-16 px-6 md:px-10 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Why WhiteTable?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-500">
                      <BrainCircuit size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">High Accuracy</h3>
                    <p className="text-gray-600">Embedded similarity and NLP ensure context-aware parsing and minimal data loss.</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
                      <Network size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Contextual Skill Mapping</h3>
                    <p className="text-gray-600">Understand not just the skill, but the context—project, experience, or education-related.</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-green-50 text-green-500">
                      <Gauge size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Enterprise-Grade Scalability</h3>
                    <p className="text-gray-600">Built for platforms handling thousands of resumes per day.</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 px-6 md:px-10 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-blue-50 text-blue-500">
                      <Upload size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Call the Agent</h3>
                    <p className="text-gray-600">Send a resume file (PDF, DOCX, TXT) via secure endpoint.</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-purple-50 text-purple-500">
                      <Code2 size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Resume Parsing</h3>
                    <p className="text-gray-600">WhiteTable's AI engine extracts and structures the data.</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-green-50 text-green-500">
                      <FileJson size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Receive JSON Output</h3>
                    <p className="text-gray-600">Get structured, standardized data for easy integration.</p>
                  </div>
                </Card>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold mb-6">Try it with sample data:</h3>
                <div className="flex justify-center gap-4 mb-8">
                  <Link to="/resume-parser-agent">
                    <Button variant="secondary" className="bg-blue-50 text-blue-600">
                      Test Data 1
                    </Button>
                  </Link>
                  <Link to="/resume-parser-agent">
                    <Button variant="secondary" className="bg-green-50 text-green-600">
                      Test Data 2
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Benchmarks Section */}
          <section className="py-16 px-6 md:px-10 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Performance Benchmarks</h2>
              <Card className="p-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-semibold">Resume Type</th>
                      <th className="py-3 px-4 font-semibold">Embedding Similarity / Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4">Standard Resumes</td>
                      <td className="py-3 px-4">96% - 99%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Complex Resumes</td>
                      <td className="py-3 px-4">92% - 99%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-600 mt-4 italic">Performance is continuously monitored to improve reliability and parsing precision.</p>
              </Card>
            </div>
          </section>

          {/* Example Use Cases Section */}
          <section className="py-16 px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Example Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
                      <Network size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">ATS Integration</h3>
                  </div>
                  <p className="text-gray-600">Integrate into an Applicant Tracking System (ATS) to streamline hiring processes.</p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-green-50 text-green-500">
                      <Code2 size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Job Matching</h3>
                  </div>
                  <p className="text-gray-600">Power job matching algorithms with structured skill sets for precise candidate selection.</p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-500">
                      <FileJson size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Profile Enrichment</h3>
                  </div>
                  <p className="text-gray-600">Enrich candidate profiles in CRMs and hiring platforms with comprehensive data.</p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                      <Terminal size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Workflow Automation</h3>
                  </div>
                  <p className="text-gray-600">Automate resume screening workflows to save time and improve efficiency.</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Start Building Section */}
          <section className="py-20 px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Start Building</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/resume-parser-agent">
                  <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                    View Documentation
                  </Button>
                </Link>
                <Link to="/resume-parser-agent">
                  <Button size="lg" variant="outline" className="text-purple-500 border-purple-500 hover:bg-purple-50">
                    View Integration Guide
                  </Button>
                </Link>
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
