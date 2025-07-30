import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    skuCount: '',
    erpSystem: '',
    bestTime: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.companyName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: 'Demo Request',
          message: `
Company: ${formData.companyName}
Job Title: ${formData.jobTitle}
Phone: ${formData.phone || 'Not provided'}
Number of SKUs: ${formData.skuCount}
ERP System: ${formData.erpSystem}
Best Time for Demo: ${formData.bestTime}
Additional Comments: ${formData.comments || 'None'}
          `,
          type: 'demo'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send demo request');
      }

      setIsSubmitted(true);
      toast({
        title: "Demo Requested!",
        description: "We'll be in touch within 24 hours.",
      });
    } catch (error) {
      console.error('Error sending demo request:', error);
      toast({
        title: "Send Failed",
        description: "Failed to send demo request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks, {formData.fullName.split(' ')[0]}!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your request and will be in touch within 24 hours to schedule 
              your personalized demo.
            </p>
            <Button 
              onClick={() => {setIsSubmitted(false); setFormData({
                fullName: '', companyName: '', jobTitle: '', email: '', phone: '', 
                skuCount: '', erpSystem: '', bestTime: '', comments: ''
              })}}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Request Another Demo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Request a Demo</h1>
            <p className="text-xl text-gray-600 mb-8">
              See how polymr.ai can transform your manufacturing operations. Schedule a personalized demo today.
            </p>
            
            {/* Demo Video Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">See polymr.ai in Action</h2>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster="/images/logo.png"
                  >
                    <source src="/videos/demo-video.mov" type="video/mp4" />
                    <source src="/videos/demo-video.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Watch our product demo to see how polymr.ai streamlines manufacturing operations
                </p>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Schedule Your Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Company Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="skuCount">Number of SKUs</Label>
                    <Input
                      id="skuCount"
                      type="number"
                      value={formData.skuCount}
                      onChange={(e) => handleInputChange('skuCount', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="erpSystem">Current ERP System</Label>
                    <Select
                      value={formData.erpSystem}
                      onValueChange={(value) => handleInputChange('erpSystem', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your ERP system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sap">SAP</SelectItem>
                        <SelectItem value="oracle">Oracle</SelectItem>
                        <SelectItem value="microsoft">Microsoft Dynamics</SelectItem>
                        <SelectItem value="infor">Infor</SelectItem>
                        <SelectItem value="sage">Sage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bestTime">Best Time for Demo</Label>
                    <Select
                      value={formData.bestTime}
                      onValueChange={(value) => handleInputChange('bestTime', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                        <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange('comments', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Request Demo'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
