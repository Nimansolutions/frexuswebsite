import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Users, Calendar, Briefcase, CheckCircle2, ChevronRight, Clock, DollarSign, Target } from 'lucide-react';

const Engagement = () => {
  const models = [
    {
      icon: <Users className="h-16 w-16" />,
      title: "Dedicated Operations Staff",
      description: "Get full-time dedicated team members who work exclusively on your operations",
      features: [
        "Full-time dedicated resources",
        "Deep knowledge of your business",
        "Consistent team members",
        "Direct communication channels",
        "Priority support",
        "Customized workflows"
      ],
      idealFor: "Companies with consistent, high-volume operations",
      pricing: "Custom pricing based on FTE requirements",
      commitment: "Minimum 3-month engagement"
    },
    {
      icon: <Calendar className="h-16 w-16" />,
      title: "Monthly Service Agreements",
      description: "Flexible monthly service packages tailored to your operational needs",
      features: [
        "Pre-defined service hours",
        "Flexible task allocation",
        "Monthly performance reviews",
        "Predictable monthly costs",
        "Easy to scale up/down",
        "No long-term lock-in"
      ],
      idealFor: "Growing companies with predictable monthly volume",
      pricing: "Starting from $2,000/month",
      commitment: "Month-to-month rolling contract"
    },
    {
      icon: <Briefcase className="h-16 w-16" />,
      title: "Project-Based Support",
      description: "Short-term engagement for specific projects or seasonal peak periods",
      features: [
        "Defined project scope",
        "Fixed deliverables",
        "Flexible duration",
        "Rapid deployment",
        "Project management included",
        "Clear timelines"
      ],
      idealFor: "Seasonal peaks or specific operational projects",
      pricing: "Custom project-based quotes",
      commitment: "Project duration (1 week - 6 months)"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your operational needs, volume, and challenges in detail",
      duration: "30-45 minutes"
    },
    {
      step: "2",
      title: "Proposal & Agreement",
      description: "Receive a customized proposal with engagement model and pricing",
      duration: "1-2 business days"
    },
    {
      step: "3",
      title: "Team Setup",
      description: "We assign and train dedicated team members on your processes",
      duration: "1-2 weeks"
    },
    {
      step: "4",
      title: "Go Live",
      description: "Start working together with full operations support",
      duration: "Day 1 of engagement"
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
              Engagement Models
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Flexible partnership options designed to match your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Choose Your Engagement Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the model that best fits your operational requirements and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-6 inline-block mb-6">
                      {model.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Ideal For:</div>
                      <div className="font-semibold text-blue-900">{model.idealFor}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Pricing:</div>
                      <div className="font-semibold text-orange-500">{model.pricing}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Commitment:</div>
                      <div className="font-semibold text-blue-900">{model.commitment}</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link to="/contact">
                      <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300">
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, straightforward process to begin your partnership with Frexus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-4xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Model Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-6 inline-block mb-6">
                  <Target className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Seamless Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team integrates directly with your existing systems and processes, 
                  functioning as a natural extension of your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-6 inline-block mb-6">
                  <DollarSign className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No hidden fees or surprise charges. Clear, predictable pricing that 
                  fits your budget and scales with your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-6 inline-block mb-6">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Dedicated Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We view our relationship as a long-term partnership, committed to 
                  your success and continuous improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Choose Your Engagement Model?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss which engagement model works best for your operations. 
            Schedule a consultation to explore your options.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Schedule Your Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Engagement;
