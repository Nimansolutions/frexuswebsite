import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Globe, Users, Clock, Award, ChevronRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Reliability",
      description: "Consistent, dependable support you can count on every single day"
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Efficiency",
      description: "Streamlined processes that maximize productivity and minimize errors"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Scalability",
      description: "Flexible solutions that grow with your business needs"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Excellence",
      description: "Commitment to delivering the highest quality operational support"
    }
  ];

  const advantages = [
    {
      title: "Logistics-Focused Expertise",
      description: "Our team specializes exclusively in freight forwarding and logistics operations, bringing deep industry knowledge to every task."
    },
    {
      title: "Reliable Offshore Team",
      description: "Based in India with extensive experience supporting US freight forwarders, we provide consistent and professional service."
    },
    {
      title: "Scalable Operations",
      description: "Whether you need support for 10 shipments or 1,000, we scale seamlessly to match your business volume."
    },
    {
      title: "Cost-Efficient Model",
      description: "Our offshore operations model delivers significant cost savings without compromising on quality or reliability."
    },
    {
      title: "Dedicated Support",
      description: "You get a dedicated team that learns your processes, systems, and preferences for seamless integration."
    },
    {
      title: "US-Focused Service",
      description: "We understand the US freight forwarding market and regulatory requirements, ensuring compliant operations."
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
              About Frexus
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Empowering freight forwarders across the United States with reliable, 
              professional backend operational support from India
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Your Extended Operations Team
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Frexus is a specialized operational support provider dedicated to serving 
                  freight forwarding companies across the United States. We understand that 
                  running a successful freight forwarding business requires excellence in 
                  both sales and operations.
                </p>
                <p>
                  While you focus on building customer relationships and growing your business, 
                  we handle the complex backend operations that keep shipments moving smoothly. 
                  Our India-based team acts as a seamless extension of your operations, 
                  delivering the same quality and reliability as an in-house team.
                </p>
                <p>
                  With deep expertise in freight forwarding processes, US market requirements, 
                  and logistics documentation, we provide the operational backbone that allows 
                  your business to scale efficiently and cost-effectively.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1768796373307-fc2f843660f8" 
                alt="Professional Operations" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-orange-500 text-white p-8 rounded-xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg">Years Combined Experience in Logistics Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-10">
                <div className="bg-blue-900 text-white rounded-lg p-4 inline-block mb-6">
                  <Target className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower freight forwarding companies with reliable, efficient, and 
                  cost-effective backend operational support that enables them to focus on 
                  their core business: building relationships and driving growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-900 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-10">
                <div className="bg-orange-500 text-white rounded-lg p-4 inline-block mb-6">
                  <Eye className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the most trusted offshore operations partner for freight 
                  forwarders across the United States, known for our expertise, reliability, 
                  and commitment to operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of our operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-6 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offshore Model Explanation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1768796373344-c7d7935b2aa9" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                The Offshore Advantage
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our India-based operations model provides significant advantages for US 
                  freight forwarders looking to optimize their operations:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full p-2 mt-1 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">24-Hour Coverage</h4>
                      <p className="text-gray-600">
                        Time zone differences enable round-the-clock operations coverage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full p-2 mt-1 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Skilled Talent Pool</h4>
                      <p className="text-gray-600">
                        Access to experienced logistics professionals at competitive rates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full p-2 mt-1 flex-shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Cost Efficiency</h4>
                      <p className="text-gray-600">
                        Significantly reduce operational costs while maintaining quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Frexus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose Frexus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart as your operational support partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work with Frexus?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover how our dedicated operations team can help you scale 
            your freight forwarding business efficiently.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
