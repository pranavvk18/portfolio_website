
import { ArrowLeft } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white font-jetbrains">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <a 
              href="/" 
              className="flex items-center text-gray-400 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-light mb-8">Contact</h1>
          <div className="w-20 h-0.5 bg-white rounded-full mb-12"></div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
              
              <p className="text-gray-300 text-lg">
                Feel free to reach out if you'd like to collaborate on projects, discuss technology, or just have a chat!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium min-w-[100px]">Email:</span>
                  <a 
                    href="mailto:pranav@example.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    pranavpk1807@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium min-w-[100px]">LinkedIn:</span>
                  <a 
                    href="https://www.linkedin.com/in/pranav-p-kulkarni-5553b1317/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pranav P Kulkarni
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium min-w-[100px]">Instagram:</span>
                  <a 
                    href="https://www.instagram.com/k.pranavv?igsh=am1zd2RpYzh0NG14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    @k.pranavv
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Currently based in Bengaluru, India 🇮🇳
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
