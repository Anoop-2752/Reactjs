"use client";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Recommendation System",
      description: "Developed an advanced music recommendation system using NLP and content-based filtering. The system analyzes user listening patterns and song characteristics to provide personalized recommendations, resulting in 40% improved user engagement.",
      technologies: ["Python", "NLP", "Machine Learning", "Pandas", "Scikit-learn"],
      image: "/spotify-project.jpg",
      emoji: "🎵",
      github: "https://github.com/Anoop-2752/Spotify-Recommendation-Engine",
      live: "#",
      featured: true
    },
    {
      title: "YOLOv5 Object Detection Model",
      description: "Built a high-precision object detection model using YOLOv5 architecture. Achieved 95% accuracy with fast inference speeds, suitable for real-time applications in computer vision.",
      technologies: ["Python", "PyTorch", "OpenCV", "YOLOv5", "Computer Vision"],
      image: "/yolo-project.jpg",
      emoji: "🔍",
      github: "https://github.com/Anoop-2752/YoloV5-Object-Detection",
      live: "#",
      featured: true
    },
    {
      title: "AI Medical Chatbot",
      description: "An intelligent AI-powered medical assistant that helps answer general medical queries, provide healthcare information, and assist with symptom guidance.",
      technologies: ["Python", "Pinecone", "LangChain", "Groq LLaMA 3"],
      image: "/medical_chatbot.jpg",
      emoji: "🔍",
      github: "https://github.com/Anoop-2752/AI-Medical-Chatbot",
      live: "#",
      featured: true
    },
    {
      title: "Parking-spot-detection-and-counter",
      description: "Built a precision object detection model using openCV architecture. The system highlights each parking slot and displays live counters for occupied vs available spaces.",
      technologies: ["Python", "OpenCV", "Numpy", "TensorFlow", "PyTorch"],
      image: "/parking.png",
      emoji: "🔍",
      github: "https://github.com/Anoop-2752/Parking-spot-detection-and-counter",
      live: "#",
      featured: true
    },
    {
      title: "RAG-Based PDF QA System",
      description: "A Retrieval-Augmented Generation (RAG) system that allows users to query PDF documents using DeepSeek, Groq API, and FAISS for efficient vector search. This system enhances traditional language models by incorporating document retrieval to provide more accurate, context-aware answers.",
      technologies: ["Python", "DeepSeek", "Groq API", "FAISS", "RAG", "Vector Search"],
      image: "/rag-project.jpg",
      emoji: "📄",
      github: "https://github.com/Anoop-2752/RAG-Based-PDF-QA-System",
      live: "#",
      featured: false
    },
    {
      title: "Multimodel Image Analyzer",
      description: "Image Analyzer is an AI-powered multimodal image analysis system that allows users to upload images and ask questions about them. The application processes the images using advanced machine learning models (LLaMA & LLaVA) and provides detailed textual explanations.",
      technologies: ["Python", "LLaMA", "LLaVA", "Computer Vision", "Multimodal AI", "Image Processing"],
      image: "/image-analyzer-project.jpg",
      emoji: "🖼️",
      github: "https://github.com/Anoop-2752/VisionX-Analyzer",
      live: "#",
      featured: false
    },
    {
      title: "Face Recognition System",
      description: "A powerful AI-driven face recognition system designed to identify football players using advanced machine learning techniques. This project leverages facial embeddings, LLaMA-4 for natural language processing, and the Groq API for ultra-fast inference.",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "AWS S3", "Docker"],
      image: "/pipeline-project.jpg",
      emoji: "⚙️",
      github: "https://github.com/Anoop-2752/Face-Recognition-using-LLaMA-4-Groq-API-",
      live: "#",
      featured: false
    },
    {
      title: "Book Recommender System",
      description: "This Book Recommender System suggests personalized book recommendations based on user preferences, ratings, and reading patterns. It uses collaborative filtering and content-based techniques to identify similar books and users. Ideal for enhancing user engagement, it helps readers discover new titles tailored to their interests and previous behavior.",
      technologies: ["Python", "K-means", "Scikit-learn", "Pandas", "Matplotlib"],
      image: "/segmentation-project.jpg",
      emoji: "👥",
      github: "https://github.com/Anoop-2752/Book-Recommended-System",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="relative mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-md items-center justify-center text-6xl">
                    {project.emoji}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="relative mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-md items-center justify-center text-4xl">
                    {project.emoji}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-3 rounded text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h3>
            <p className="text-blue-100 mb-6">
              I&apos;m always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 