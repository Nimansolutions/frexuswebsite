import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  FileText, 
  Clipboard, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  BarChart3,
  Globe,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Shipment Documentation",
      description: "Complete processing and management of all shipment documentation"
    },
    {
      icon: <Clipboard className="h-8 w-8" />,
      title: "Carrier Coordination",
      description: "Seamless coordination with carriers for bookings, dispatch, and updates"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Shipment Tracking",
      description: "Real-time tracking and status updates for all shipments"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Rate Management",
      description: "Quotation support and comprehensive rate management"
    }
  ];

  const benefits = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Reduced Workload",
      description: "Focus on sales while we handle operations"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Lower Costs",
      description: "Reduce staffing costs significantly"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24-Hour Coverage",
      description: "Round-the-clock operational support"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "Your extended operations team"
    }
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your operational needs and current challenges"
    },
    {
      number: "02",
      title: "Team Setup",
      description: "We assign dedicated staff familiar with your processes"
    },
    {
      number: "03",
      title: "Seamless Integration",
      description: "We integrate with your systems and start operations"
    },
    {
      number: "04",
      title: "Continuous Support",
      description: "Ongoing support and process optimization"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1635851801927-44c4d1c555af" 
            alt="Freight Operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Powering Freight Forwarders
              <span className="block text-orange-500 mt-2">with Reliable Operational Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Frexus provides dedicated backend operations support to help freight forwarding companies 
              streamline documentation, manage shipments, and scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-semibold transition-all duration-300">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Comprehensive Backend Operations Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle the operational complexity so you can focus on growing your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="text-blue-900 group-hover:text-orange-500 transition-colors duration-300 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105">
                View All Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Freight Forwarders Choose Frexus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your operations with our dedicated support services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg p-4 inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/benefits">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105">
                Explore All Benefits
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              How Frexus Works as Your Extended Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, seamless integration with your existing operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-6xl font-bold text-orange-500 mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized support for the logistics and freight forwarding sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Globe className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Freight Forwarders
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete backend operations support for freight forwarding companies of all sizes
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Logistics Companies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamline your logistics operations with our dedicated support team
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <BarChart3 className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Supply Chain Businesses
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimize your supply chain operations with expert backend support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Frexus can help you reduce operational workload, 
            lower costs, and scale your freight forwarding business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Schedule Your Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-6 text-lg font-semibold transition-all duration-300">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
