
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [age, setAge] = useState("");

  useEffect(() => {
    const updateAge = () => {
      const birthDate = new Date(2004, 5, 15); // June 15, 2004
      const currentDate = new Date();
      
      const millisecondsSinceBirth = currentDate.getTime() - birthDate.getTime();
      const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
      
      const preciseAge = millisecondsSinceBirth / millisecondsInYear;
      setAge(preciseAge.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 10);
    
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
          
          <h1 className="text-4xl lg:text-5xl font-light mb-8">About</h1>
          <div className="w-20 h-0.5 bg-white rounded-full mb-12"></div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-medium">Hey there! 👋</h1>
              
              <p className="text-gray-300 text-lg">
                I'm <strong className="text-white">Pranav P Kulkarni</strong>, a 3rd-year <strong className="text-white">Computer Science</strong> student at <strong className="text-white">Rashtreeya Vidyalaya University, Bengaluru</strong>.
              </p>
              
              <p className="text-gray-300 text-lg">
                A passionate problem solver who loves collaborating to tackle real-world challenges! 🚀
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-medium mb-4">🔥 Areas That Spark My Curiosity</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>🤖 <strong className="text-white">Machine Learning</strong> – Training models that make an impact.</li>
                  <li>📊 <strong className="text-white">Data Analysis</strong> – Finding patterns in chaos.</li>
                  <li>⚡ <strong className="text-white">Optimization in ML</strong> – Making AI models smarter & faster.</li>
                  <li>💻 <strong className="text-white">Operating Systems</strong> – Understanding the magic behind computers.</li>
                </ul>
              </div>

              <p className="text-gray-300 text-lg">
                Always excited to build something cool and push the boundaries of tech! 💡✨
              </p>

              <p className="text-gray-300 text-lg">
                Oh, and I'm <span className="text-white font-mono">{age}</span> years old, but my curiosity never ages! 😎
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-medium mb-4">Socials</h2>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.instagram.com/k.pranavv?igsh=am1zd2RpYzh0NG14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                      alt="Instagram" 
                      className="w-10 h-10"
                    />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/pranav-p-kulkarni-5553b1317/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                      alt="LinkedIn" 
                      className="w-10 h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
