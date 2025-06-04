
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Building, DollarSign, BarChart, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Automate Your MRP—No Consultants Needed
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                polymr.ai's AI agent plugs in to your factory's existing ERP and handles planning, 
                ordering, and scheduling—saving you time and consulting fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 w-full sm:w-auto">
                    Request a Demo
                  </Button>
                </Link>
                <Link to="/pricing" className="text-purple-600 hover:text-purple-700 font-semibold text-lg py-3 px-4 text-center">
                  See Pricing
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Settings className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered MRP</h3>
                  <p className="text-gray-600">Automated planning and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why polymr.ai Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why polymr.ai?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Slash Consulting Costs</h3>
                <p className="text-gray-600">
                  Our autonomous agent configures itself—no expensive Odoo/SAP consultants required.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Optimization</h3>
                <p className="text-gray-600">
                  Live demand forecasts, supplier lead times, and stock levels adjust on the fly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable & Easy to Use</h3>
                <p className="text-gray-600">
                  Designed for small and mid-sized factories—simple onboarding with guided prompts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Connect Your Data</h3>
                <p className="text-gray-600">
                  Link polymr.ai to your ERP (NetSuite, Odoo, SAP, or any SQL data source) in just minutes.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Let AI Plan & Schedule</h3>
                <p className="text-gray-600">
                  Our agent runs MRP algorithms—BOM explosion, safety stock, lot sizing—automatically generating purchase/work orders.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Monitor & Adjust</h3>
                <p className="text-gray-600">
                  View real-time dashboards for inventory, fill rates, and supplier performance—fine-tune on demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">What Early Users Are Saying</h2>
            <p className="text-gray-600 text-lg">
              Placeholder: Add testimonials here later.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to see polymr.ai in action?
          </h2>
          <Link to="/demo">
            <Button 
              variant="outline" 
              className="bg-white text-purple-600 border-white hover:bg-purple-50 text-lg px-8 py-3"
            >
              Request a Live Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
