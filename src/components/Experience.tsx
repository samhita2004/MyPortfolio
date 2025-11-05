import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      Web Development Intern
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">ACMEGRADE</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Mar 2025 - May 2025</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 italic">Remote</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Completed a structured web development training and internship program
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Gained hands-on experience with HTML, CSS, JavaScript, and responsive design
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Built and deployed real-world web pages and mini projects using front-end technologies
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Frontend Development'].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-gray-700 text-sm rounded-full border border-green-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
