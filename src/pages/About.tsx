
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About polymr.ai</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the founders and learn our story.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                polymr.ai was founded in 2025 by supply-chain innovators Naman Mukerji (Duke University) 
                and Tanmay Neema (UC Berkeley). We saw how small‐to‐mid-sized factories were often priced 
                out of advanced MRP tools because of expensive consultants and complex setup.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision: democratize world-class MRP by building an AI agent that configures itself—saving 
                you both time and money.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">Modern Manufacturing</h3>
                  <p className="text-gray-600">AI-powered efficiency for every factory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <blockquote className="text-center">
            <p className="text-2xl lg:text-3xl font-bold text-white mb-4">
              "Our mission: Empower every factory—no matter the size—to run lean, optimize inventory, 
              and eliminate stockouts—without a consultant on site."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Founder Bios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founders</h2>
          
          <div className="space-y-16">
            {/* Naman Mukerji */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="bg-purple-100 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">NM</span>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Naman Mukerji</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Naman Mukerji is a sophomore at Duke University studying Economics & Computer Science. 
                  Growing up in Nashville, he witnessed firsthand how local manufacturers struggle with 
                  outdated MRP tools and high consulting fees. At Duke, he led a supply-chain analytics 
                  project and interned at a healthcare private equity firm—where he realized AI could 
                  automate MRP.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At polymr.ai, Naman focuses on product strategy, user experience, and AI model development.
                </p>
                <a 
                  href="https://www.linkedin.com/in/naman-mukerji-329539223/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>

            {/* Tanmay Neema */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-purple-100 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">TN</span>
                </div>
              </div>
              <div className="lg:col-span-3 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tanmay Neema</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Tanmay Neema studies Physics & Mathematics at UC Berkeley. Also a Nashville native, 
                  he built simulation models for manufacturing optimization as a UC Berkeley research 
                  assistant. Tanmay co-founded polymr.ai to combine his passion for AI with real-world 
                  supply-chain problems.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  He leads the backend engineering team, designs MRP algorithms, and ensures our platform 
                  scales to thousands of SKUs.
                </p>
                <a 
                  href="https://www.linkedin.com/in/tanmay-neema-099659346/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Story Timeline</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  date: "January 2025",
                  title: "Idea conceived—first research into MRP automation."
                },
                {
                  date: "March 2025",
                  title: "Prototype AI-agent built—initial lab tests on sample BOMs."
                },
                {
                  date: "May 2025",
                  title: "Early pilot with local Nashville machine shop."
                },
                {
                  date: "June 2025",
                  title: "polymr.ai website launches—public beta signups open."
                }
              ].map((milestone, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-purple-600 rounded-full w-4 h-4 mr-6 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-purple-600 mb-1">{milestone.date}</h3>
                        <p className="text-gray-700">{milestone.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
