
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigationItems = [
    { label: "Posts", href: "/posts", description: "Latest thoughts and insights" },
    { label: "About", href: "/about", description: "Learn more about me" },
    { label: "Projects", href: "/projects", description: "Recent work and portfolio" },
    { label: "Contact", href: "/contact", description: "Get in touch" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-jetbrains">
      <div className="container mx-auto h-screen flex items-center justify-center">
        {/* Centered Navigation Section */}
        <div className="w-full max-w-2xl flex flex-col justify-center items-center px-8 py-12">
          <div className="w-full">
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                Welcome
              </h1>
              <div className="w-24 h-0.5 bg-white mx-auto"></div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-8">
              {navigationItems.map((item, index) => (
                <div 
                  key={item.label}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a 
                    href={item.href}
                    className="block p-8 rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600 hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <h3 className="text-3xl font-medium mb-3 group-hover:text-gray-300 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors font-mono">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 ml-4" />
                    </div>
                  </a>
                </div>
              ))}
            </nav>

            {/* Footer */}
       <div className="mt-16 pt-8 border-t border-gray-800 text-center">
  <p className="text-black text-sm font-mono">
    Made with love and Loveable — Pranav!!
  </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
