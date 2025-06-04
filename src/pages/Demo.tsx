import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Clock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

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
      // Initialize EmailJS with public key
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with actual public key
      
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        company_name: formData.companyName,
        job_title: formData.jobTitle,
        phone: formData.phone || 'Not provided',
        sku_count: formData.skuCount,
        erp_system: formData.erpSystem,
        best_time: formData.bestTime,
        comments: formData.comments || 'None',
        to_email: 'polymrai.business@gmail.com'
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with actual service ID
        'YOUR_DEMO_TEMPLATE_ID', // Replace with actual template ID for demo
        templateParams
      );

      console.log('EmailJS demo result:', result);
      
      if (result.status === 200) {
        setIsSubmitted(true);
        toast({
          title: "Demo Requested!",
          description: "We'll be in touch within 24 hours.",
        });
      } else {
        throw new Error('EmailJS failed');
      }
      
    } catch (error) {
      console.error('Error sending demo request:', error);
      
      // Fallback: Create a proper mailto link
      const emailBody = encodeURIComponent(
        `Demo Request Details\n\n` +
        `Name: ${formData.fullName}\n` +
        `Company: ${formData.companyName}\n` +
        `Job Title: ${formData.jobTitle}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Number of SKUs: ${formData.skuCount}\n` +
        `ERP System: ${formData.erpSystem}\n` +
        `Best Time for Demo: ${formData.bestTime}\n` +
        `Additional Comments: ${formData.comments || 'None'}`
      );
      
      const mailtoLink = `mailto:polymrai.business@gmail.com?subject=Demo Request from ${encodeURIComponent(formData.fullName)}&body=${emailBody}`;
      
      // Try to open mailto
      try {
        window.location.href = mailtoLink;
        toast({
          title: "Email Client Opened",
          description: "Please send the email from your email client to complete the demo request.",
        });
      } catch (mailtoError) {
        toast({
          title: "Send Failed",
          description: "Please email us directly at polymrai.business@gmail.com for demo requests",
          variant: "destructive"
        });
      }
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request a Live Demo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how polymr.ai can transform your MRP process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Schedule Your Demo
                </CardTitle>
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

                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="skuCount">Number of SKUs / Parts</Label>
                      <Select onValueChange={(value) => handleInputChange('skuCount', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<100">&lt;100</SelectItem>
                          <SelectItem value="100-500">100–500</SelectItem>
                          <SelectItem value="500-1000">500–1000</SelectItem>
                          <SelectItem value=">1000">&gt;1000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="erpSystem">ERP System</Label>
                      <Select onValueChange={(value) => handleInputChange('erpSystem', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select system" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NetSuite">NetSuite</SelectItem>
                          <SelectItem value="Odoo">Odoo</SelectItem>
                          <SelectItem value="SAP">SAP</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bestTime">Best Time for Demo</Label>
                    <Select onValueChange={(value) => handleInputChange('bestTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9am–12pm)">Morning (9am–12pm)</SelectItem>
                        <SelectItem value="Afternoon (1pm–4pm)">Afternoon (1pm–4pm)</SelectItem>
                        <SelectItem value="Evening (4pm–6pm)">Evening (4pm–6pm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comments">Additional Comments (Optional)</Label>
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
                    {isSubmitting ? 'Sending...' : 'Schedule My Demo'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Promotional Copy */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">24-Hour Turnaround</h3>
                <p className="text-gray-600 text-sm">
                  Our team will respond within one business day.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">No Obligation</h3>
                <p className="text-gray-600 text-sm">
                  You're not locked into anything—see the platform first.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Customized Walkthrough</h3>
                <p className="text-gray-600 text-sm">
                  We tailor the demo to your ERP and industry needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
