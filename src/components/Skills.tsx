function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-200',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-200',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Express.js', level: 75 },
      ],
    },
    {
      title: 'Programming',
      color: 'from-pink-400 to-pink-600',
      borderColor: 'border-pink-200',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'OOP Concepts', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${category.borderColor}`}
            >
              <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-bold mb-6`}>
                {category.title}
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
