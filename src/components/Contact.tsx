import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-green-200">
            <p className="text-center text-lg text-gray-700 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:samhitakancherla@gmail.com"
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-green-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-800 font-semibold">samhitakancherla@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:9132288882"
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-blue-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <p className="text-gray-800 font-semibold">+91 9132288882</p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6 font-medium">Connect with me on</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/samhitakancherla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 group"
                >
                  <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                </a>
                <a
                  href="https://linkedin.com/in/samhita-kancherla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-200 group"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </a>
                <a
                  href="mailto:samhitakancherla@gmail.com"
                  className="p-4 rounded-full bg-gradient-to-br from-green-50 to-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-green-200 group"
                >
                  <Send className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
