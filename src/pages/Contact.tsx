import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
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
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        to_email: 'polymrai.business@gmail.com'
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with actual service ID
        'YOUR_TEMPLATE_ID', // Replace with actual template ID
        templateParams
      );

      console.log('EmailJS result:', result);
      
      if (result.status === 200) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. We'll get back to you soon.",
        });
      } else {
        throw new Error('EmailJS failed');
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Fallback: Create a proper mailto link
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject || 'Contact Form Submission'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:polymrai.business@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${emailBody}`;
      
      // Try to open mailto
      try {
        window.location.href = mailtoLink;
        toast({
          title: "Email Client Opened",
          description: "Please send the email from your email client to complete the submission.",
        });
      } catch (mailtoError) {
        toast({
          title: "Send Failed",
          description: "Please email us directly at polymrai.business@gmail.com",
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
              Thank you, {formData.name.split(' ')[0]}!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your message has been sent successfully to polymrai.business@gmail.com. 
              We'll get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false); 
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Send Another Message
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you transform your MRP process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    placeholder="Tell us about your needs, questions, or how we can help..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Direct Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-purple-600">polymrai.business@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone (Naman)</p>
                      <a 
                        href="tel:+16158069889"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        (615) 806-9889
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone (Tanmay)</p>
                      <a 
                        href="tel:+16153102189"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        (615) 310-2189
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Our Founders</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Naman Mukerji</p>
                    <a 
                      href="https://www.linkedin.com/in/naman-mukerji-329539223/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      LinkedIn Profile →
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Tanmay Neema</p>
                    <a 
                      href="https://www.linkedin.com/in/tanmay-neema-099659346/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      LinkedIn Profile →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
