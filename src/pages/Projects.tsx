
import { ArrowLeft } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Projects = () => {
  const projects = [
    {
      name: "Monopoly",
      description: "This Java-based Monopoly game offers a simplified version of the classic board game for 2 to 4 players. Players roll dice, move, buy properties, pay rent, and compete to be the last one with money. The goal is to outlast opponents through strategic property management.",
      tools: "Java",
      github: "https://github.com/pranavvk18/monopoly_in_java"
    },
    {
      name: "Netflix data analysis",
      description: "The Netflix data analysis project in Tableau visualizes content distribution (68.42% movies, 31.58% TV shows), tracks content growth (2008-2020), and maps global production. It highlights TV-MA as the most common rating and documentaries as the leading genre. The dashboard integrates geographical, temporal, and categorical insights effectively.",
      tools: "Excel,Tableau",
      github: "https://github.com/pranavvk18/netflix_data_analysis/tree/main"
    },
    {
      name: "Sunspot detection using Yolov5 model",
      description: "Developed a YOLOv5-based AI model to detect and count sunspots in solar images, leveraging deep learning for automated analysis. Fine-tuned on 2000+ images from the Bass2000 Solar Survey for enhanced detection accuracy.",
      tools: "Tensorflow,Yolov5",
      github: "https://github.com/pranavvk18/sunspot_detection_using_yolo"
    },
    {
      name: "Plant disease classification",
      description: "Built a CNN-based model achieving 97% accuracy in plant disease classification using 87,000 images. Optimized performance with Adam optimizer, ReLU activation, and dropout regularization to prevent overfitting.",
      tools: "Pandas,Tensorflow",
      github: "https://github.com/pranavvk18/plant_disease_classification"
    },
    {
      name: "Mobile Price Classification on ESP32",
      description: "Developed a mobile price classification model using TensorFlow Lite and deployed it on an ESP32",
      tools: "TFlite,Tensorflow,ESP32",
      github: "https://github.com/pranavvk18/mobile_price_classification_model_on_ESP32"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-jetbrains">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <a 
              href="/" 
              className="flex items-center text-gray-400 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-light mb-8">Projects</h1>
          <div className="w-20 h-0.5 bg-white rounded-full mb-12"></div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700 hover:bg-gray-800/50">
                  <TableHead className="text-white font-medium">Project name</TableHead>
                  <TableHead className="text-white font-medium">Description</TableHead>
                  <TableHead className="text-white font-medium">Technical tools used</TableHead>
                  <TableHead className="text-white font-medium">GitHub</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={index} className="border-gray-700 hover:bg-gray-800/50">
                    <TableCell className="text-white font-medium">{project.name}</TableCell>
                    <TableCell className="text-gray-300 max-w-md">{project.description}</TableCell>
                    <TableCell className="text-gray-300">{project.tools}</TableCell>
                    <TableCell>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <img 
                          src="https://cdn.jsdelivr.net/npm/simple-icons@9.12.0/icons/github.svg" 
                          alt="GitHub" 
                          className="w-8 h-8 filter invert"
                        />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
