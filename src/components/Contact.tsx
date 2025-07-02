
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vinaymendole123@gmail.com",
      href: "mailto:vinaymendole123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 9158874257",
      href: "tel:+919158874257"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Latur, Maharashtra",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "VinayMendole",
      href: "https://github.com/VinayMendole"
    }
  ];

  return (
    <section className="py-24 backdrop-blur-md bg-black/30 border-t border-gray-800/30 relative overflow-hidden">
      {/* Enhanced Background Animation with Orange Theme */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/30 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-400/20 rounded-full animate-float blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/15 rounded-full animate-spin-slow blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6 animate-fade-in">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-fade-in">
            Ready to collaborate on innovative projects and bring creative solutions to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 backdrop-blur-sm bg-gray-900/15 border border-gray-800/30 hover:border-orange-500/50 transition-all duration-300 rounded-lg group hover:shadow-lg hover:shadow-orange-500/20 transform hover:scale-105 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 backdrop-blur-sm bg-gray-800/20 flex items-center justify-center rounded-lg group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110">
                    <contact.icon className="h-5 w-5 text-orange-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-light">{contact.label}</p>
                    <p className="text-white group-hover:text-orange-400 transition-colors font-light">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-gray-900/15 border border-gray-800/30 rounded-lg p-8 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-light mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 backdrop-blur-sm bg-gray-800/20 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300 hover:bg-gray-800/30 focus:shadow-lg focus:shadow-orange-500/20"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 backdrop-blur-sm bg-gray-800/20 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300 hover:bg-gray-800/30 focus:shadow-lg focus:shadow-orange-500/20"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-light mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-gray-800/20 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300 resize-none hover:bg-gray-800/30 focus:shadow-lg focus:shadow-orange-500/20"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 font-normal transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 transform hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-800/30 text-center backdrop-blur-sm">
          <p className="text-gray-400 font-light">
            © 2024 Vinay Mendole. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
