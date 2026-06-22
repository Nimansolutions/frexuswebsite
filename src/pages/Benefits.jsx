import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  TrendingDown, 
  DollarSign, 
  Clock, 
  Users, 
  BarChart3, 
  Target,
  Zap,
  Shield,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const Benefits = () => {
  const mainBenefits = [
    {
      icon: <TrendingDown className="h-12 w-12" />,
      title: "Reduced Operational Workload",
      description: "Free your team from time-consuming backend tasks and focus on revenue-generating activities like sales and customer relationships.",
      details: [
        "Eliminate 60-80% of operational workload",
        "Focus staff on core business activities",
        "Reduce employee burnout and turnover",
        "Improve work-life balance for your team"
      ],
      metric: "60-80%",
      metricLabel: "Workload Reduction"
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Lower Staffing Costs",
      description: "Significantly reduce operational expenses with our cost-efficient offshore model while maintaining or improving quality.",
      details: [
        "Save 50-70% on operational staff costs",
        "No recruitment or training expenses",
        "No employee benefits overhead",
        "Predictable monthly operational costs"
      ],
      metric: "50-70%",
      metricLabel: "Cost Savings"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "24-Hour Operational Coverage",
      description: "Ensure continuous operations coverage across time zones with our India-based team providing round-the-clock support.",
      details: [
        "Work progresses while you sleep",
        "Quick turnaround on urgent tasks",
        "Better customer service responsiveness",
        "Handle global shipment schedules"
      ],
      metric: "24/7",
      metricLabel: "Coverage"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Dedicated Logistics Support Team",
      description: "Get a dedicated team that learns your business, processes, and preferences for seamless integration.",
      details: [
        "Consistent team members",
        "Deep knowledge of your operations",
        "Personalized service approach",
        "Direct communication channels"
      ],
      metric: "100%",
      metricLabel: "Dedicated"
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Improved Operational Efficiency",
      description: "Streamline processes, reduce errors, and accelerate turnaround times with specialized logistics expertise.",
      details: [
        "Faster document processing",
        "Reduced error rates by 90%+",
        "Standardized workflows",
        "Continuous process improvement"
      ],
      metric: "90%+",
      metricLabel: "Error Reduction"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Scalable Operations Support",
      description: "Scale your operations up or down based on business volume without hiring, training, or layoff challenges.",
      details: [
        "Flexible resource allocation",
        "Handle seasonal fluctuations",
        "Support business growth",
        "No fixed overhead costs"
      ],
      metric: "100%",
      metricLabel: "Flexible"
    }
  ];

  const additionalBenefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Expertise & Reliability",
      description: "Specialized freight forwarding knowledge with consistent, professional service delivery"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick Implementation",
      description: "Start seeing benefits within 2-3 weeks with our streamlined onboarding process"
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure accuracy and compliance in all tasks"
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
              Benefits for Freight Forwarders
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transform your operations and unlock growth potential with Frexus
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Key Advantages of Working with Frexus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements across every aspect of your operations
            </p>
          </div>

          <div className="space-y-12">
            {mainBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl"
              >
                <CardContent className="p-10">
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    {/* Icon and Title */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-6">
                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl p-4 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                            {benefit.title}
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {benefit.description}
                          </p>
                          <div className="space-y-3">
                            {benefit.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                                <span className="text-gray-600">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metric Card */}
                    <div className="lg:col-span-2">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-12 text-center h-full flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-7xl font-bold mb-4">
                          {benefit.metric}
                        </div>
                        <div className="text-2xl font-semibold">
                          {benefit.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Additional Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More reasons why freight forwarders choose Frexus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg p-4 inline-block mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 md:p-16 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Calculate Your Potential Savings
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Most freight forwarders save between $3,000 - $6,000 per month 
                  on operational costs by partnering with Frexus.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-lg">Reduced salary expenses</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-lg">Eliminated recruitment costs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-lg">No benefits or overhead</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-lg">Increased operational efficiency</span>
                  </div>
                </div>
              </div>

              <div className="bg-white text-blue-900 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6">Average Monthly Savings</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold">Salary Savings</span>
                      <span className="text-2xl font-bold text-orange-500">$4,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold">Overhead Reduction</span>
                      <span className="text-2xl font-bold text-orange-500">$1,500</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold">Efficiency Gains</span>
                      <span className="text-2xl font-bold text-orange-500">$1,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-300 pt-6 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">Total Savings</span>
                      <span className="text-4xl font-bold text-orange-500">$6,500</span>
                    </div>
                    <p className="text-gray-600 mt-2">Per month average</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Realizing These Benefits Today
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation to discuss how Frexus can help transform 
            your freight forwarding operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/engagement">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-6 text-lg font-semibold transition-all duration-300">
                View Engagement Models
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
