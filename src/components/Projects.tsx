import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'AI Image Generator Web App',
      description: 'A responsive AI-powered image generator that creates images from text prompts using transformer models.',
      tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Hugging Face API'],
      features: [
        'Integrated Hugging Face Inference API',
        'Secure API calls with Express.js backend',
        'Responsive design for all devices',
        'Environment variable management with dotenv',
      ],
      gradient: 'from-green-400 to-blue-500',
      borderColor: 'border-green-200',
    },
    {
      title: 'Cafe Queue Manager Web App',
      description: 'A digital queue management system for cafés allowing customers to join a virtual line and track their order status.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      features: [
        'Real-time queue tracking',
        'Customer order status updates',
        'Queue data structure implementation',
        'RESTful API design',
      ],
      gradient: 'from-blue-400 to-pink-500',
      borderColor: 'border-blue-200',
      inProgress: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${project.borderColor} group`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  {project.inProgress && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-300">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 mr-3 flex-shrink-0`}></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-gray-700 text-sm rounded-full border border-green-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                  {!project.inProgress && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
