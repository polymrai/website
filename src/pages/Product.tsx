
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Settings, 
  TrendingUp, 
  ShoppingCart, 
  BarChart3, 
  Link2, 
  Bell 
} from 'lucide-react';

const Product = () => {
  const features = [
    {
      icon: Settings,
      title: "Autonomous BOM Explosion",
      description: "Our AI reads your Bill of Materials (BOM) and generates component requirements tree automatically."
    },
    {
      icon: TrendingUp,
      title: "Dynamic Safety Stock & Reorder Points",
      description: "Machine-learning models adjust safety-stock levels based on demand volatility and lead time variability."
    },
    {
      icon: ShoppingCart,
      title: "Automated Purchase & Production Orders",
      description: "Generate recommended purchase orders and work orders with the perfect timing—no manual calculations."
    },
    {
      icon: BarChart3,
      title: "Real-Time Inventory Dashboard",
      description: "See current stock, open POs, and production progress in a single view—refreshes every minute."
    },
    {
      icon: Link2,
      title: "Multi-ERP Integrations",
      description: "Plug into NetSuite, Odoo, SAP, or any REST/SOAP API—our connectors handle the heavy lifting."
    },
    {
      icon: Bell,
      title: "Exception Alerts & Email Notifications",
      description: "Get instant alerts if a supplier misses a delivery, or if inventory falls below safety levels."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product → AI-Driven MRP Engine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate your material planning.
          </p>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Walkthrough */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {/* Integration & Setup */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration & Setup</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Within minutes, connect your production data. No consultants, no coding—our intuitive 
                  wizard guides you through the entire process.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <span className="text-sm font-semibold text-gray-600">ERP</span>
                    </div>
                    <div className="text-purple-600">→</div>
                    <div className="bg-purple-600 rounded-lg p-4 shadow-md">
                      <span className="text-sm font-semibold text-white">polymr.ai</span>
                    </div>
                    <div className="text-purple-600">→</div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <span className="text-sm font-semibold text-gray-600">AI Agent</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Seamless data flow in minutes</p>
                </div>
              </div>
            </div>

            {/* AI Planning Engine */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-purple-50 rounded-lg p-8 order-2 lg:order-1">
                <div className="text-center">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <span className="text-sm font-semibold text-gray-600">Demand Forecast + BOM + Inventory</span>
                    </div>
                    <div className="text-purple-600">↓</div>
                    <div className="bg-purple-600 rounded-lg p-4 shadow-md">
                      <span className="text-sm font-semibold text-white">Optimization Loop</span>
                    </div>
                    <div className="text-purple-600">↓</div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <span className="text-sm font-semibold text-gray-600">Order Outputs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Planning Engine</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our core AI algorithms continuously rebalance orders, optimize lot sizing, and fine-tune 
                  schedules for maximum efficiency.
                </p>
              </div>
            </div>

            {/* Monitoring & Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitoring & Insights</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Track KPIs in real time. Drill down by part number, supplier, or plant. Export reports 
                  with one click.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-600">Inventory Ageing</span>
                      <span className="text-sm text-green-600">✓ Good</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-600">Order Fill Rate</span>
                      <span className="text-sm text-green-600">95.2%</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-600">Supplier Scorecard</span>
                      <span className="text-sm text-purple-600">View →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Future of MRP—Book Your Demo Today
          </h2>
          <Link to="/demo">
            <Button 
              variant="outline" 
              className="bg-white text-purple-600 border-white hover:bg-purple-50 text-lg px-8 py-3"
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Product;
