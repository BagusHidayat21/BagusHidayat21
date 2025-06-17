'use client';

import React from 'react';
import { Github, ExternalLink, Calendar, Code2, Briefcase, Award, Users, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  category: string;
  link?: string;
  githubRepo?: string;
  year: string;
  status: 'live' | 'completed' | 'development';
  features: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "TAG (Jenangan Tap Attendance Gateway)",
      role: "API Developer",
      description: "Developed a RESTful API for an RFID-based attendance system in collaboration with SMK Negeri 1 Jenangan. Focused on real-time data processing and integration with the school management system.",
      techStack: ["PostgreSQL", "Express.js", "React", "Node.js"],
      category: "Enterprise API",
      link: "https://j-tag.vercel.app",
      githubRepo: "https://github.com/BagusHidayat21/RFID-Absen",
      year: "2024",
      status: "live",
      features: ["RFID Integration", "Real-time Data Processing", "School Management Integration", "Attendance Analytics"]
    },
    {
      id: 2,
      title: "CARFY - Car Rental Website",
      role: "Full-Stack Developer",
      description: "Developed a Laravel-based car rental website as the final project for Web Programming course. Implemented key features such as vehicle inventory management, booking system, and payment processing.",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      category: "Web Application",
      githubRepo: "https://github.com/BagusHidayat21/Website-Mobil-Laravel-10",
      year: "2024",
      status: "completed",
      features: ["Vehicle Inventory Management", "Booking System", "Payment Processing", "Admin Panel", "Responsive Design"]
    },
    {
      id: 3,
      title: "HealMe – Mental Health Platform",
      role: "Laravel Developer",
      description: "Developed a mental health consultation platform using Laravel 10 for Wintex IID 2024. Implemented secure user authentication, appointment scheduling, mood tracking, and anonymous support forums.",
      techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Authentication", "Forum System"],
      category: "Healthcare Platform",
      githubRepo: "https://github.com/BagusHidayat21/HealMe",
      year: "2024",
      status: "completed",
      features: ["Secure Authentication", "Appointment Scheduling", "Mood Tracking", "Anonymous Forums", "Resource Library"]
    },
    {
      id: 4,
      title: "Cahaya Dunia Village Library Website",
      role: "Web Developer",
      description: "Developed a digital library management system for the Ngadimulyo Village Government, including features for book cataloging, member management, and borrowing/returning processes.",
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Government System",
      githubRepo: "https://github.com/BagusHidayat21/Perpustaakan-Desa-Ngadimulyo",
      link: "http://perpusdesa-cahayadunia.ngadimulyo-trenggalek.my.id/",
      year: "2024",
      status: "live",
      features: ["Book Cataloging", "Member Management", "Borrowing System", "Admin Dashboard", "Staff Training"]
    },
    {
      id: 5,
      title: "UangKita – Financial Planning Web App",
      role: "Full-Stack Developer",
      description: "Developed a financial planning and savings management application with features like goal-based savings trackers, budget planners, and financial projections using Agile development.",
      techStack: ["Laravel", "PHP", "MySQL", "Chart.js", "Bootstrap", "JavaScript", "Agile Methodology"],
      category: "Financial Application",
      githubRepo: "https://github.com/BagusHidayat21/UangKita",
      year: "2024",
      status: "completed",
      features: ["Goal-based Savings", "Budget Planning", "Financial Projections", "Interactive Dashboards", "Agile Development"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'development':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <Globe className="w-3 h-3" />;
      case 'development':
        return <Code2 className="w-3 h-3" />;
      case 'completed':
        return <Award className="w-3 h-3" />;
      default:
        return <Code2 className="w-3 h-3" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Enterprise API':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Web Application':
        return <Globe className="w-5 h-5 text-green-600" />;
      case 'Healthcare Platform':
        return <Users className="w-5 h-5 text-red-600" />;
      case 'Government System':
        return <Award className="w-5 h-5 text-purple-600" />;
      case 'Financial Application':
        return <Code2 className="w-5 h-5 text-yellow-600" />;
      default:
        return <Code2 className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      'Laravel': 'bg-red-100 text-red-800 border-red-200',
      'Laravel 10': 'bg-red-100 text-red-800 border-red-200',
      'PHP': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',
      'MySQL': 'bg-blue-100 text-blue-800 border-blue-200',
      'Node.js': 'bg-green-100 text-green-800 border-green-200',
      'Express.js': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'React': 'bg-blue-100 text-blue-800 border-blue-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Bootstrap': 'bg-purple-100 text-purple-800 border-purple-200',
      'Tailwind CSS': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'HTML5': 'bg-orange-100 text-orange-800 border-orange-200',
      'CSS3': 'bg-blue-100 text-blue-800 border-blue-200',
      'Chart.js': 'bg-pink-100 text-pink-800 border-pink-200',
      'RESTful API': 'bg-green-100 text-green-800 border-green-200',
      'RFID Integration': 'bg-gray-100 text-gray-800 border-gray-200',
      'Real-time Processing': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Payment Gateway': 'bg-violet-100 text-violet-800 border-violet-200',
      'Authentication': 'bg-slate-100 text-slate-800 border-slate-200',
      'Forum System': 'bg-amber-100 text-amber-800 border-amber-200',
      'Agile Methodology': 'bg-teal-100 text-teal-800 border-teal-200',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div id="projects" className="min-h-screen bg-white text-black">
      {/* Projects Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my professional work across different domains and technologies
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {getCategoryIcon(project.category)}
                    <div>
                      <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">{project.role}</p>
                      <p className="text-sm text-gray-500">{project.category} • {project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-3 py-1 text-sm font-medium border rounded-full ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      <span className="ml-1 capitalize">{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm font-medium border rounded-full ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Site
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200 font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  )}
                  {!project.link && !project.githubRepo && (
                    <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-500 font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      Project Completed
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;