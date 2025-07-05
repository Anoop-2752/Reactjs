const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "R", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "SQL", level: 90, color: "from-green-500 to-green-600" },
        { name: "JavaScript", level: 75, color: "from-yellow-500 to-yellow-600" },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "PyTorch", level: 85, color: "from-red-500 to-red-600" },
        { name: "Scikit-learn", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "OpenCV", level: 80, color: "from-green-500 to-green-600" },
        { name: "NLP", level: 85, color: "from-purple-500 to-purple-600" },
      ]
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Pandas", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "NumPy", level: 90, color: "from-green-500 to-green-600" },
        { name: "Matplotlib", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "Seaborn", level: 80, color: "from-red-500 to-red-600" },
        { name: "Plotly", level: 75, color: "from-purple-500 to-purple-600" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "Jupyter", level: 95, color: "from-gray-500 to-gray-600" },
        { name: "Tableau", level: 70, color: "from-blue-500 to-blue-600" },
      ]
    }
  ];

  const certifications = [
    {
      name: "IBM Data Analyst Professional Certificate",
      issuer: "IBM",
      icon: "📊"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      icon: "🤖"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera",
      icon: "🧠"
    },
    {
      name: "Data Science Professional Certificate",
      issuer: "DataMites",
      icon: "📈"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Statistical Analysis", "A/B Testing", "Data Mining", "Predictive Modeling",
              "Computer Vision", "Time Series Analysis", "Big Data", "ETL Processes",
              "Model Deployment", "API Development", "Database Design", "Cloud Computing"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 