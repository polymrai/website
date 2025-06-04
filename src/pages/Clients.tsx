
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Clients = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Already trusted by forward-thinking manufacturers.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center p-12">
            <CardContent>
              <div className="space-y-8">
                <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-xl">?</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Nothing to show here—our first clients are coming soon!
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Check back shortly to see the forward-thinking manufacturers who are already 
                    transforming their MRP processes with polymr.ai.
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 mb-6">
                    Interested in becoming one of our first case studies?
                  </p>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.location.href = 'mailto:polymrai.business@gmail.com?subject=Case Study Interest'}
                  >
                    Become a Case Study
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Testimonials Placeholder */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Coming Soon: Client Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <Card key={index} className="text-center p-6 bg-white/50 border-dashed">
                  <CardContent className="pt-6">
                    <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-4"></div>
                    <div className="space-y-2">
                      <div className="bg-gray-200 h-4 rounded mx-auto w-3/4"></div>
                      <div className="bg-gray-200 h-4 rounded mx-auto w-1/2"></div>
                      <div className="bg-gray-200 h-3 rounded mx-auto w-2/3 mt-4"></div>
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

export default Clients;
