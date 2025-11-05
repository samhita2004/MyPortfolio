import { Code2, Palette, Sparkles } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-green-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm an enthusiastic and creative Computer Science student at JAIN School of Engineering and Technology,
              with a strong passion for frontend development and creating exceptional user experiences. I specialize
              in building modern, responsive web applications using React, JavaScript, and other cutting-edge technologies.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Clean Code</h3>
                <p className="text-gray-600">
                  Writing maintainable, scalable code with best practices and OOP principles
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">UI Design</h3>
                <p className="text-gray-600">
                  Crafting beautiful, intuitive interfaces that users love to interact with
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-pink-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  Constantly learning new tools and frameworks to stay ahead in web development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
