
import Navigation from "@/components/Navigation";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <section className="py-24 bg-black relative overflow-hidden pt-32">
        {/* Enhanced neon brush stroke designs */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-20 left-10 w-40 h-3 bg-gradient-to-r from-green-400/60 to-transparent rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-2 bg-gradient-to-l from-green-500/70 to-transparent rounded-full blur-sm animate-float"></div>
          <div className="absolute bottom-60 left-32 w-48 h-2.5 bg-gradient-to-r from-green-400/50 to-transparent rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 right-16 w-36 h-2 bg-gradient-to-l from-green-500/60 to-transparent rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-1.5 bg-gradient-to-r from-green-400/40 to-transparent rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Background animations */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-20 w-72 h-72 bg-green-500/30 rounded-full animate-pulse blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-green-400/20 rounded-full animate-float blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/15 rounded-full animate-spin-slow blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-400/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for Opportunities</span>
            </div>
            <h1 className="text-6xl font-light text-white mb-6 animate-fade-in">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">Connect</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-fade-in">
              Ready to collaborate on innovative projects and bring creative solutions to life!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>     
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
