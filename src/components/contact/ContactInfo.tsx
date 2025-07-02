
import { Mail, Github, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
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
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="flex items-center gap-4 p-4 backdrop-blur-sm bg-gray-900/15 border border-gray-800/30 hover:border-green-500/50 transition-all duration-300 rounded-lg group hover:shadow-lg hover:shadow-green-500/20 transform hover:scale-105 hover:-translate-y-1 glass-morphism"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 backdrop-blur-sm bg-gray-800/20 flex items-center justify-center rounded-lg group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110">
              <contact.icon className="h-5 w-5 text-green-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-light">{contact.label}</p>
              <p className="text-white group-hover:text-green-400 transition-colors font-light">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
