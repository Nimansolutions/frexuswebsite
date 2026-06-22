import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Engagement', path: '/engagement' }
  ];

  const services = [
    { name: 'Shipment Documentation', path: '/services' },
    { name: 'Carrier Coordination', path: '/services' },
    { name: 'Shipment Tracking', path: '/services' },
    { name: 'Rate Management', path: '/services' }
  ];

  const resources = [
    { name: 'Engagement Models', path: '/engagement' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Frexus
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Providing dedicated backend operational support to freight forwarding 
              companies across the United States. Your extended operations team.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:support@frexus.net" 
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>support@frexus.net</span>
              </a>
              <a 
                href="https://www.frexus.net" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span>www.frexus.net</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors hover:pl-2 inline-block duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors hover:pl-2 inline-block duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.path}
                    className="text-gray-300 hover:text-orange-500 transition-colors hover:pl-2 inline-block duration-300"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Frexus. All rights reserved. | Empowering Freight Forwarders Across the United States
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/company/frexus/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
              data-testid="footer-linkedin-link"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
