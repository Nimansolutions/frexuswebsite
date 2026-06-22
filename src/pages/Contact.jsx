import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");

      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 4000);
    } catch (err) {
      setIsSubmitting(false);
      const detail = err?.response?.data?.detail;
      const msg = Array.isArray(detail)
        ? detail.map((d) => d.msg).join(', ')
        : (typeof detail === 'string' ? detail : "Something went wrong. Please try again.");
      toast.error(msg);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      label: "Email",
      value: "support@frexus.net",
      link: "mailto:support@frexus.net"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      label: "Website",
      value: "www.frexus.net",
      link: "https://www.frexus.net"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      label: "Serving",
      value: "United States",
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how Frexus can support your freight forwarding operations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Ready to transform your operations? Reach out to us and let's start 
                a conversation about how we can help your business grow.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg p-3 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-lg font-semibold text-blue-900 hover:text-orange-500 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-lg font-semibold text-blue-900">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Quick Response</h4>
                      <p className="text-gray-600">We'll respond within 24 hours to schedule a consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Needs Assessment</h4>
                      <p className="text-gray-600">We'll discuss your operational challenges and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Custom Proposal</h4>
                      <p className="text-gray-600">Receive a tailored proposal with pricing and engagement model</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Fast Start</h4>
                      <p className="text-gray-600">Begin working together within 2-3 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-blue-900 shadow-2xl">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">
                    Send Us a Message
                  </h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="bg-green-100 text-green-700 rounded-full p-6 inline-block mb-6">
                        <CheckCircle2 className="h-16 w-16" />
                      </div>
                      <h4 className="text-2xl font-bold text-blue-900 mb-3">
                        Thank You!
                      </h4>
                      <p className="text-gray-600">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-semibold text-blue-900">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          data-testid="contact-name-input"
                          className="mt-2 h-12 border-2 focus:border-orange-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-base font-semibold text-blue-900">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          data-testid="contact-company-input"
                          className="mt-2 h-12 border-2 focus:border-orange-500 transition-colors"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base font-semibold text-blue-900">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          data-testid="contact-email-input"
                          className="mt-2 h-12 border-2 focus:border-orange-500 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-base font-semibold text-blue-900">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          data-testid="contact-phone-input"
                          className="mt-2 h-12 border-2 focus:border-orange-500 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-base font-semibold text-blue-900">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          data-testid="contact-message-input"
                          className="mt-2 border-2 focus:border-orange-500 transition-colors resize-none"
                          placeholder="Tell us about your operational needs..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        data-testid="contact-submit-btn"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white h-14 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <Send className="h-5 w-5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        * Required fields
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prefer to Email Us Directly?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            You can also reach us directly at
          </p>
          <a 
            href="mailto:support@frexus.net"
            className="inline-block text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
          >
            support@frexus.net
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
