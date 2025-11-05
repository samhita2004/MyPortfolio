import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-pink-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
              SK
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
            Samhita Kancherla
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-slide-up-delay-1">
            Frontend Developer & UI Enthusiast
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up-delay-2">
            Computer Science student passionate about creating beautiful, responsive, and user-friendly web applications
          </p>

          <div className="flex justify-center gap-4 mb-12 animate-slide-up-delay-3">
            <a
              href="https://github.com/samhitakancherla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-green-200"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/samhita-kancherla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-200"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:samhitakancherla@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-pink-200"
            >
              <Mail className="w-6 h-6 text-pink-600" />
            </a>
          </div>

          <div className="flex justify-center gap-4 animate-slide-up-delay-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-gray-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-green-600" />
      </button>
    </section>
  );
}

export default Hero;
