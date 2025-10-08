import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Jobbazar AI Recruitment Platform",
      category: "Web Application",
      description: "AI-powered job matching platform with real-time analytics dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "Machine Learning"],
      year: 2023,
      type: "web"
    },
    {
      id: 2,
      title: "Slepp Professional Network",
      category: "Mobile App",
      description: "Social platform for professionals with video meeting integration",
      image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_2.png",
      tags: ["React Native", "Firebase", "WebRTC"],
      year: 2022,
      type: "mobile"
    },
    {
      id: 3,
      title: "Costa Restaurant Management",
      category: "Web Application",
      description: "Complete POS and inventory management system for restaurants",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Vue.js", "Django", "PostgreSQL"],
      year: 2023,
      type: "web"
    },
    {
      id: 4,
      title: "HealthTrack Wearable App",
      category: "Mobile App",
      description: "Fitness tracking application with AI health recommendations",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Flutter", "Firebase", "TensorFlow Lite"],
      year: 2022,
      type: "mobile"
    },
    {
      id: 5,
      title: "EduLearn Online Academy",
      category: "Web Application",
      description: "Interactive e-learning platform with live classes and progress tracking",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      tags: ["Next.js", "NestJS", "MongoDB"],
      year: 2023,
      type: "web"
    },
    {
      id: 6,
      title: "ShopEasy E-Commerce",
      category: "Web Application",
      description: "Custom e-commerce solution with AR product preview",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "Three.js"],
      year: 2021,
      type: "web"
    },
    {
      id: 7,
      title: "TravelBuddy Trip Planner",
      category: "Mobile App",
      description: "AI-powered travel itinerary generator with local recommendations",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Swift", "CoreML", "MapKit"],
      year: 2023,
      type: "mobile"
    },
    {
      id: 8,
      title: "FinTrack Personal Finance",
      category: "Web Application",
      description: "Comprehensive personal finance dashboard with predictive analytics",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
      tags: ["Angular", "Python", "Chart.js"],
      year: 2020,
      type: "web"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'recent', label: 'Recent Works' },
    { id: 'popular', label: 'Most Popular' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'recent') return project.year >= 2022;
    if (activeFilter === 'popular') return [1, 2, 5].includes(project.id);
    return project.type === activeFilter;
  });

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-600 mb-2 block">OUR PORTFOLIO</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Work</span>
          </h1>
          <p className="text-lg  max-w-2xl mx-auto">
            Discover how we've helped clients transform their ideas into successful digital products
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-white/80 mb-1 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/10 text-white/90 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/works/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-white hover:text-purple-300 transition-colors"
                  >
                    View Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm font-medium text-gray-500 mb-1 block">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllWorks;