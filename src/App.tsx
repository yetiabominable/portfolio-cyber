import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  Server, 
  Zap,
  Box,
  Search,
  ShoppingCart,
  FileText,
  Cpu,
  Monitor
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [glitchText, setGlitchText] = useState('DEVELOPER');

  useEffect(() => {
    const glitchWords = ['DEVELOPER', 'ARCHITECT', 'INNOVATOR', 'CREATOR'];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % glitchWords.length;
      setGlitchText(glitchWords[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const technologies = [
    { name: 'C#', icon: <Code className="w-8 h-8" />, color: 'text-purple-400' },
    { name: '.NET Core', icon: <Server className="w-8 h-8" />, color: 'text-blue-400' },
    { name: 'JavaScript', icon: <Zap className="w-8 h-8" />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <Terminal className="w-8 h-8" />, color: 'text-blue-300' },
    { name: 'Vue.js', icon: <Globe className="w-8 h-8" />, color: 'text-green-400' },
    { name: 'PHP', icon: <Monitor className="w-8 h-8" />, color: 'text-indigo-400' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'text-green-500' },
    { name: 'Docker', icon: <Box className="w-8 h-8" />, color: 'text-cyan-400' }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Matrix-style background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-400/30 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              <span className="text-cyan-400">&gt;</span> PORTFOLIO.EXE
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'stack', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`hover:text-cyan-400 transition-colors uppercase tracking-wider ${
                    activeSection === section ? 'text-cyan-400' : 'text-green-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-white">FULL STACK</span>
            </h1>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 glitch-text">
                {glitchText}
              </h2>
            </div>
          </div>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="text-cyan-400">&gt;</span> Crafting digital solutions with .NET, Vue.js, and modern web technologies
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveSection('projects')}
              className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 uppercase tracking-wider font-bold"
            >
              View Projects
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 uppercase tracking-wider font-bold"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-cyan-400">[</span>
              <span className="text-white">ABOUT_ME</span>
              <span className="text-cyan-400">]</span>
            </h2>
            <div className="bg-gray-900/50 border border-green-400/30 p-8 rounded-lg backdrop-blur-sm">
              <div className="mb-4">
                <span className="text-cyan-400">$</span> <span className="text-purple-400">whoami</span>
              </div>
              <div className="text-gray-300 text-lg leading-relaxed pl-6">
                <p className="mb-6">
                  I'm a passionate Full Stack Developer who thrives on transforming complex business challenges into elegant digital solutions. 
                  My journey in software development is driven by an insatiable curiosity for emerging technologies and a commitment to writing clean, scalable code.
                </p>
                <p className="mb-6">
                  Currently, I specialize in modernizing legacy enterprise systems, bridging the gap between outdated infrastructure and cutting-edge solutions. 
                  I believe in the power of well-architected systems and the importance of user-centered design.
                </p>
                <p>
                  When I'm not coding, you'll find me experimenting with new frameworks, contributing to open-source projects, or exploring the latest in cloud architecture and DevOps practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-purple-400">&lt;</span>
            <span className="text-white">MY_STACK</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="bg-black/50 border border-gray-700 hover:border-green-400 p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 group"
              >
                <div className={`${tech.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <div className="text-white font-semibold">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-green-400">function</span>
            <span className="text-white"> WORK_EXPERIENCE</span>
            <span className="text-cyan-400">()</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-400/30 p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                <div className="text-cyan-400 text-lg mb-4">@ Teknisa</div>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Spearhead modernization of legacy enterprise systems for food service management, transforming outdated infrastructure into scalable, efficient solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Architect and develop responsive front-end interfaces using Vue.js, delivering intuitive user experiences that improve operational efficiency</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Maintain and optimize complex business logic in PHP, ensuring robust backend operations for enterprise-level applications</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Design and implement custom BIRT reports that drive critical pricing and supply chain decisions, directly impacting business strategy</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Vue.js', 'PHP', 'BIRT', 'Enterprise Systems', 'Food Service Management'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-purple-400">class</span>
            <span className="text-white"> PERSONAL_HIGHLIGHTS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-black/50 border border-green-400/30 rounded-lg overflow-hidden hover:border-green-400 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Microservices E-Commerce Platform</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A scalable, containerized e-commerce system built with modern microservices architecture. 
                  Features distributed services for user management, product catalog, order processing, and payment integration, 
                  all orchestrated with Docker containers for seamless deployment and scaling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['ASP.NET Core', 'Docker', 'Microservices', 'REST APIs'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-green-400 group-hover:text-green-300 transition-colors">
                  <span>&gt;</span> Enterprise-grade architecture with containerized deployment
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black/50 border border-purple-400/30 rounded-lg overflow-hidden hover:border-purple-400 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">OCR Document Search Engine</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  An intelligent document processing system that combines OCR technology with advanced search capabilities. 
                  Automatically extracts text from images and PDFs, indexes content in Elasticsearch, and provides lightning-fast 
                  full-text search with MongoDB for metadata storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['C#', 'MongoDB', 'Elasticsearch', 'OCR', 'Document Processing'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-green-400 group-hover:text-green-300 transition-colors">
                  <span>&gt;</span> AI-powered document intelligence with search optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">await</span>
            <span className="text-white"> CONTACT</span>
            <span className="text-purple-400">.connect()</span>
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-400/30 p-8 rounded-lg">
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ready to collaborate on your next project? Let's build something amazing together. 
                I'm always interested in discussing new opportunities and innovative challenges.
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600/20 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">EMAIL</span>
                </a>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-600/20 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">GITHUB</span>
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-cyan-600/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-400/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            <span className="text-cyan-400">&copy;</span> 2024 
            <span className="text-green-400 mx-2">•</span> 
            Built with React & Tailwind CSS
            <span className="text-green-400 mx-2">•</span>
            <span className="text-purple-400">System.Status:</span> ONLINE
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .glitch-text {
          position: relative;
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0%, 90%, 100% {
            transform: translate(0);
          }
          10% {
            transform: translate(-2px, 2px);
          }
          20% {
            transform: translate(2px, -2px);
          }
          30% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
        }
      `}</style>
    </div>
  );
}

export default App;