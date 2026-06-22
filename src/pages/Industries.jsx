import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Globe, Ship, TrendingUp, Package, ChevronRight } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Ship className="h-16 w-16" />,
      title: "Freight Forwarders",
      description: "Complete backend operations support for freight forwarding companies handling international and domestic shipments.",
      services: [
        "International freight documentation",
        "Customs documentation support",
        "Multi-modal shipment coordination",
        "Import/Export operations",
        "Rate negotiations and quotes",
        "Compliance management"
      ],
      challenges: [
        "High documentation workload",
        "Complex regulatory compliance",
        "Multiple carrier coordination",
        "Time-sensitive operations"
      ],
      solution: "Frexus handles all backend documentation and coordination, allowing you to focus on customer acquisition and relationship management."
    },
    {
      icon: <TrendingUp className="h-16 w-16" />,
      title: "Logistics Companies",
      description: "Streamline your logistics operations with our dedicated support for transportation management and coordination.",
      services: [
        "Transportation documentation",
        "Route planning support",
        "Carrier management",
        "Tracking and visibility",
        "Customer communication",
        "Operations coordination"
      ],
      challenges: [
        "Managing multiple shipments",
        "Real-time tracking requirements",
        "Customer communication load",
        "Operational efficiency needs"
      ],
      solution: "Our team manages tracking, documentation, and communication, ensuring smooth operations and satisfied customers."
    },
    {
      icon: <Package className="h-16 w-16" />,
      title: "Supply Chain Businesses",
      description: "Optimize your supply chain operations with expert backend support for inventory, warehousing, and distribution.",
      services: [
        "Inventory documentation",
        "Order processing support",
        "Warehouse coordination",
        "Distribution planning",
        "Supplier communication",
        "Data management"
      ],
      challenges: [
        "Complex inventory tracking",
        "Multi-location coordination",
        "Real-time data requirements",
        "Supplier management"
      ],
      solution: "We provide comprehensive operations support to keep your supply chain running efficiently and cost-effectively."
    }
  ];

  const clientTypes = [
    {
      type: "Small Freight Forwarders",
      size: "1-10 employees",
      needs: "Cost-effective operations support to compete with larger companies",
      benefit: "Access to professional operations team without the overhead of hiring full-time staff"
    },
    {
      type: "Mid-Sized Logistics Companies",
      size: "10-50 employees",
      needs: "Scalable support to handle growth without proportional cost increases",
      benefit: "Flexible operations capacity that scales with business volume"
    },
    {
      type: "Growing Supply Chain Businesses",
      size: "20-100 employees",
      needs: "Specialized operations expertise and 24/7 coverage",
      benefit: "Expert team with supply chain knowledge and round-the-clock availability"
    }
  ];

  const successMetrics = [
    {
      metric: "150+",
      label: "Freight Forwarders Supported",
      description: "Across the United States"
    },
    {
      metric: "10,000+",
      label: "Shipments Processed Monthly",
      description: "With 99.9% accuracy"
    },
    {
      metric: "$5M+",
      label: "Cost Savings Delivered",
      description: "To our clients annually"
    },
    {
      metric: "24/7",
      label: "Operations Coverage",
      description: "Round-the-clock support"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec" 
            alt="Global Logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-900/85"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industries & Clients
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Specialized support for the logistics and freight forwarding sector
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized operational support for logistics businesses across the United States
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl"
              >
                <CardContent className="p-10">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-start gap-6 mb-6">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-6 flex-shrink-0">
                          {industry.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-blue-900 mb-3">
                            {industry.title}
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-4">Services We Provide:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {industry.services.map((service, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-8 mb-6">
                        <h4 className="text-xl font-bold text-blue-900 mb-4">Common Challenges:</h4>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="bg-orange-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                                <div className="w-2 h-2"></div>
                              </div>
                              <span className="text-gray-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-8">
                        <h4 className="text-xl font-bold mb-3">How Frexus Helps:</h4>
                        <p className="text-gray-200 leading-relaxed">
                          {industry.solution}
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

      {/* Client Types */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Perfect Fit for Every Business Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small freight forwarders to growing logistics companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center rounded-xl p-6 mb-6">
                    <h3 className="text-2xl font-bold mb-2">{client.type}</h3>
                    <p className="text-orange-100">{client.size}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Typical Needs:</h4>
                      <p className="text-gray-600 leading-relaxed">{client.needs}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Frexus Benefit:</h4>
                      <p className="text-gray-600 leading-relaxed">{client.benefit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to the logistics industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl text-center transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-orange-500 mb-3">
                    {item.metric}
                  </div>
                  <div className="text-xl font-bold text-blue-900 mb-2">
                    {item.label}
                  </div>
                  <div className="text-gray-600">
                    {item.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Globe className="h-24 w-24 text-orange-500 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Focused on the US Market
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                While our operations team is based in India, our entire focus is on 
                serving freight forwarding and logistics companies across the United States.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <ChevronRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Deep US Market Knowledge</h4>
                    <p className="text-gray-300">Understanding of US freight forwarding regulations and requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ChevronRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Time Zone Advantage</h4>
                    <p className="text-gray-300">Work continues on your operations even outside US business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ChevronRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">US-Focused Training</h4>
                    <p className="text-gray-300">Our team is specifically trained on US freight forwarding processes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">States We Serve</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-200">
                  <div>California</div>
                  <div>Texas</div>
                  <div>New York</div>
                  <div>Florida</div>
                  <div>Illinois</div>
                  <div>Georgia</div>
                  <div>New Jersey</div>
                  <div>Washington</div>
                  <div>Pennsylvania</div>
                  <div>Ohio</div>
                  <div className="col-span-2 text-center pt-4 border-t border-white/20 text-orange-400 font-semibold">
                    + All 50 States
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Is Frexus Right for Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation to discuss your operational needs and learn 
            how we can support your freight forwarding or logistics business.
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

export default Industries;
