
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "month",
      features: [
        "Up to 50 SKUs",
        "Automated BOM explosion & basic MRP runs (daily frequency)",
        "Standard inventory dashboard",
        "Email support (24–48hr response)",
        "Up to 2 users"
      ],
      buttonText: "Select Plan",
      isRecommended: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      features: [
        "Up to 500 SKUs",
        "Hourly MRP runs with dynamic safety stock",
        "Advanced dashboards (supplier scorecards, fill-rate trends)",
        "Email + chat support (12–24hr response)",
        "Up to 5 users",
        "Integration assistance (30-minute video call)"
      ],
      buttonText: "Select Plan",
      isRecommended: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      features: [
        "Unlimited SKUs",
        "Real-time MRP runs (continuous)",
        "Priority support (4-hour response SLA)",
        "Dedicated onboarding specialist (2-hour setup call)",
        "Unlimited users + role-based permissions",
        "Custom integrations and API access"
      ],
      buttonText: "Contact Sales",
      isRecommended: false
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle."
    },
    {
      question: "What ERP systems do you integrate with?",
      answer: "We integrate with NetSuite, Odoo, SAP, and any system with REST/SOAP APIs or SQL database access. Our team can help set up custom integrations for Enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for Basic and Professional plans. Enterprise customers receive dedicated onboarding as part of their plan."
    },
    {
      question: "How do I cancel?",
      answer: "You can cancel your subscription at any time from your account dashboard or by contacting our support team. Your access continues until the end of your billing period."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent pricing to fit your factory's size.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-lg transition-shadow ${
                  plan.isRecommended ? 'border-purple-600 border-2 transform scale-105' : ''
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.name === 'Enterprise' 
                        ? 'bg-gray-800 hover:bg-gray-900' 
                        : 'bg-purple-600 hover:bg-purple-700'
                    } text-white`}
                    onClick={() => {
                      if (plan.name === 'Enterprise') {
                        window.location.href = 'mailto:polymrai.business@gmail.com?subject=Enterprise Plan Inquiry';
                      } else {
                        // Handle plan selection
                        console.log(`Selected ${plan.name} plan`);
                      }
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom Call-to-Action */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not sure which plan fits your factory? Let us help.
          </h2>
          <Button 
            variant="outline" 
            className="bg-white text-purple-600 border-white hover:bg-purple-50 text-lg px-8 py-3"
            onClick={() => window.location.href = 'mailto:polymrai.business@gmail.com?subject=Pricing Inquiry'}
          >
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
