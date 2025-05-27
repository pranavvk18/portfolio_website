import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const Posts = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Best is yet to come!!!";

  useEffect(() => {
    let index = 0;
    const speed = 100;

    const interval = setInterval(() => {
      setDisplayText(prev => {
        const nextChar = fullText.charAt(index);
        index++;
        if (index === fullText.length) clearInterval(interval);
        return prev + nextChar;
      });
    }, speed);

    return () => clearInterval(interval);
  }, []);

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
          
          <h1 className="text-4xl lg:text-5xl font-light mb-8">Posts</h1>
          <div className="w-20 h-0.5 bg-white rounded-full mb-12"></div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
            <h1 className="text-4xl lg:text-6xl font-light text-center">
              {displayText}
              {displayText.length < fullText.length && <span className="animate-pulse">|</span>}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
