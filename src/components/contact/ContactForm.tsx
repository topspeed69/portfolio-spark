
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="backdrop-blur-sm bg-gray-900/15 border border-gray-800/30 rounded-lg p-8 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 glass-morphism">
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
            className="w-full px-4 py-3 backdrop-blur-sm bg-gray-800/20 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-all duration-300 hover:bg-gray-800/30 focus:shadow-lg focus:shadow-green-500/20"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-light mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 backdrop-blur-sm bg-gray-800/20 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-all duration-300 hover:bg-gray-800/30 focus:shadow-lg focus:shadow-green-500/20"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-light mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 backdrop-blur-sm bg-gray-800/20 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-all duration-300 resize-none hover:bg-gray-800/30 focus:shadow-lg focus:shadow-green-500/20"
            placeholder="Your message..."
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 font-normal transition-all duration-300 hover:shadow-lg hover:shadow-green-500/40 transform hover:scale-105">
          <Mail className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
