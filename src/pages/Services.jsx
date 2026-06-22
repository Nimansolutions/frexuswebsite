import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  FileText, 
  Clipboard, 
  MapPin, 
  DollarSign, 
  Truck, 
  Database,
  Mail,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Shipment Documentation Processing",
      description: "Complete processing and management of all shipment documentation with accuracy and efficiency.",
      benefits: [
        "Accurate documentation preparation",
        "Compliance with US regulations",
        "Timely processing and submission",
        "Error reduction and quality control"
      ],
      impact: "Reduces documentation errors by up to 95% and speeds up shipment processing time"
    },
    {
      icon: <Clipboard className="h-12 w-12" />,
      title: "Carrier Coordination",
      description: "End-to-end coordination with carriers — bookings, dispatch, pickups, and proactive updates throughout the shipment lifecycle.",
      benefits: [
        "Carrier bookings & confirmations",
        "Pickup and dispatch coordination",
        "Proactive status communication",
        "Multi-carrier relationship management"
      ],
      impact: "Streamlines carrier interactions and reduces booking turnaround time by up to 70%"
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Shipment Tracking & Status Updates",
      description: "Real-time tracking and proactive status updates for all your shipments across all carriers.",
      benefits: [
        "Real-time shipment visibility",
        "Proactive exception management",
        "Automated status updates",
        "Multi-carrier tracking support"
      ],
      impact: "Provides complete shipment visibility and reduces customer inquiries by 60%"
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Rate Management & Quotation Support",
      description: "Comprehensive rate management and quick, accurate quotation generation for your customers.",
      benefits: [
        "Quick quote turnaround",
        "Competitive rate analysis",
        "Multiple carrier comparison",
        "Rate database management"
      ],
      impact: "Accelerates quote generation time by 70% and improves pricing accuracy"
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Entry & System Updates",
      description: "Accurate data entry and system updates across all your logistics management platforms.",
      benefits: [
        "Accurate data entry",
        "System synchronization",
        "Database maintenance",
        "Regular system updates"
      ],
      impact: "Ensures data accuracy across all systems and saves 15+ hours per week"
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: "Email & Operations Support",
      description: "Professional email management and general operations support to keep your business running smoothly.",
      benefits: [
        "Email management and response",
        "Customer communication",
        "Operations coordination",
        "Administrative task support"
      ],
      impact: "Manages 100+ daily emails and frees up your team for strategic work"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1768796372629-a4e7db99e474" 
            alt="Logistics Operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-900/85"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive backend operations support designed specifically 
              for freight forwarding companies
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Complete Operations Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service designed to reduce your workload and improve operational efficiency
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl"
              >
                <CardContent className="p-10">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-4 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Benefits List */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Card */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 h-full flex flex-col justify-center">
                        <h4 className="text-lg font-bold mb-3">Business Impact</h4>
                        <p className="text-white/90 leading-relaxed">
                          {service.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              How Our Services Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that integrates seamlessly with your existing operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-900 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Requirements Analysis
              </h3>
              <p className="text-gray-600">
                We understand your specific operational needs and workflows
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-orange-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Team Assignment
              </h3>
              <p className="text-gray-600">
                Dedicated team members are assigned and trained on your processes
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-900 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                System Integration
              </h3>
              <p className="text-gray-600">
                We integrate with your existing systems and communication channels
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-orange-500 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous operations support with regular performance reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Services Stand Out */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                What Makes Our Services Different
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-lg p-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Industry Expertise</h4>
                    <p className="text-gray-600">
                      Our team specializes exclusively in freight forwarding operations, 
                      not generic outsourcing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-lg p-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">US Market Focus</h4>
                    <p className="text-gray-600">
                      Deep understanding of US freight forwarding regulations and market requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-lg p-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Dedicated Teams</h4>
                    <p className="text-gray-600">
                      Your dedicated team learns your business, not rotating staff on different accounts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white rounded-lg p-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Flexible Engagement</h4>
                    <p className="text-gray-600">
                      Choose the services you need and scale up or down based on your business volume
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1768796373344-c7d7935b2aa9" 
                alt="Professional Team" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Discuss Your Operational Needs
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation to learn how our services can transform 
            your freight forwarding operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/benefits">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-6 text-lg font-semibold transition-all duration-300">
                View Benefits
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
