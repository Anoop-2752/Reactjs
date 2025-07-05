const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Scientist",
      company: "DataMites™",
      period: "2025 - Present",
      description: "Leading the development of scalable machine learning models and AI-driven solutions. Improving predictive accuracy for business applications and driving innovation in data science.",
      achievements: [
        "Developed scalable ML models improving business predictive accuracy by 40%",
        "Led cross-functional teams in implementing AI solutions",
        "Mentored junior data scientists and conducted technical workshops",
        "Reduced model deployment time by 60% through automation"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "Machine Learning"]
    },
    {
      type: "work",
      title: "Junior Data Scientist",
      company: "Rubixe",
      period: "2024 - 2025",
      description: "Analyzed large datasets to provide actionable insights for business decisions. Created automated reporting systems and predictive models.",
      achievements: [
        "Built automated reporting systems reducing manual work by 70%",
        "Created customer segmentation models improving marketing ROI by 25%",
        "Developed real-time dashboards for executive decision making",
        "Implemented data quality monitoring systems"
      ],
      technologies: ["Python", "SQL", "Tableau", "Pandas", "Scikit-learn"]
    },
    {
      type: "education",
      title: "Bachelor of Technology in Electronics",
      company: "University of Calicut",
      period: "",
      description: "Graduated with honors in Electronics Engineering. Focused on signal processing and embedded systems.",
      achievements: [
        "Graduated with First Class with Distinction",
        "Completed final year project on IoT-based monitoring system",
        "Active member of IEEE student chapter",
        "Participated in various technical competitions"
      ],
      technologies: ["C/C++", "MATLAB", "Embedded Systems", "Signal Processing"]
    }
  ];

  const certifications = [
    {
      title: "IBM Data Analyst Professional Certificate",
      issuer: "IBM",
      description: "Comprehensive program covering data analysis, visualization, and statistical analysis using Python and R."
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      description: "Advanced machine learning algorithms and techniques for predictive modeling and pattern recognition."
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - deeplearning.ai",
      description: "Neural networks, convolutional networks, recurrent networks, and transformers for deep learning applications."
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "DataMites",
      description: "End-to-end data science workflow from data collection to model deployment and monitoring."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'work' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {exp.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                      {exp.period && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 