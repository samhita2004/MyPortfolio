import { GraduationCap, MapPin } from 'lucide-react';

function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'JAIN School of Engineering and Technology',
      location: 'Banglore, Karnataka',
      duration: '2022 - 2026',
      gradient: 'from-green-400 to-blue-500',
      borderColor: 'border-green-200',
    },
    {
      degree: 'MPC (Intermediate)',
      institution: 'Aditya Junior College',
      location: 'Kakinada, Andhra Pradesh',
      duration: '2020 - 2022',
      gradient: 'from-blue-400 to-pink-500',
      borderColor: 'border-blue-200',
    },
    {
      degree: '10th std - CBSE',
      institution: 'GreenField School International',
      location: 'Kakinada, Andhra Pradesh',
      duration: '2020',
      gradient: 'from-pink-400 to-green-500',
      borderColor: 'border-pink-200',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${edu.borderColor}`}
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {edu.degree}
                    </h3>
                    <span className="text-gray-600 font-medium mt-1 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-lg text-gray-700 font-semibold mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
