import React, { useState } from 'react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  // NEW: Track which filter is active (null means show all projects)
  const [activeFilter, setActiveFilter] = useState(null);

  // ============================================
  // PROJECTS DATA - Edit ALL your projects here in one place
  // ============================================
  // For each project, you can customize:
  // - x, y: Position of dot on screen (0-100)
  // - title: Project name
  // - image: Main project image
  // - description: Project description text
  // - image1, image2: Two additional images for the grid
  // - categories: Array of filter categories this project belongs to (NEW!)
  const projects = [
    { 
      id: 1, 
      title: "Democracy Works Impact Report", 
      x: 15, 
      y: 25, 
      categories: ["Marketing"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
      description: "This project explores minimalist design principles and their application in digital spaces. The work focuses on creating clarity through reduction.",
      image1: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1634942536790-4e2b29da2803?w=800&h=600&fit=crop"
    },
    { 
      id: 2, 
      title: "TurboVote", 
      x: 30, 
      y: 45, 
      categories: ["Marketing"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500&fit=crop",
      description: "An exploration of color theory and emotional response through interactive digital installations.",
      image1: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop"
    },
    { 
      id: 3, 
      title: "50+1 Strategies", 
      x: 45, 
      y: 35, 
      categories: ["Identity"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=500&fit=crop",
      description: "Typographic experiments that bridge traditional letterforms with contemporary digital aesthetics.",
      image1: "https://images.unsplash.com/photo-1618556450983-b7b7e1f03e0c?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
    },
    { 
      id: 4, 
      title: "Schema Acquisition", 
      x: 60, 
      y: 55, 
      categories: ["Identity"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1618556450983-b7b7e1f03e0c?w=500&h=500&fit=crop",
      description: "Brand identity system designed for flexibility across multiple touchpoints and mediums.",
      image1: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop"
    },
    { 
      id: 5, 
      title: "ASCII Bedroom Memoir", 
      x: 75, 
      y: 30, 
      categories: ["Web"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&h=500&fit=crop",
      description: "Motion design project exploring rhythm, timing, and visual narrative in animated sequences.",
      image1: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1618005198920-f0cb6201c115?w=800&h=600&fit=crop"
    },
    { 
      id: 6, 
      title: "Alternative Typographic Histories", 
      x: 25, 
      y: 65, 
      categories: ["Print"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=500&h=500&fit=crop",
      description: "Spatial design intervention that reimagines public spaces through light and interactive elements.",
      image1: "https://images.unsplash.com/photo-1634942536790-4e2b29da2803?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1618556450983-b7b7e1f03e0c?w=800&h=600&fit=crop"
    },
    { 
      id: 7, 
      title: "WeDream", 
      x: 50, 
      y: 70, 
      categories: ["Web"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=500&h=500&fit=crop",
      description: "Digital tool development focused on enhancing creative workflows for designers and artists.",
      image1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    { 
      id: 8, 
      title: "Internet Phone Book", 
      x: 70, 
      y: 20, 
      categories: ["Print"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1634942536790-4e2b29da2803?w=500&h=500&fit=crop",
      description: "Print publication exploring the intersection of analog and digital design methodologies.",
      image1: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop"
    },
    { 
      id: 9, 
      title: "Kernel Issue 5 Zine", 
      x: 40, 
      y: 80, 
      categories: ["Print"], // ASSIGN CATEGORIES HERE
      image: "https://images.unsplash.com/photo-1618005198920-f0cb6201c115?w=500&h=500&fit=crop",
      description: "Experimental interface design that challenges conventional navigation and interaction patterns.",
      image1: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop"
    },
  ];

  // ============================================
  // INFO PAGE - Full page with 3 columns
  // ============================================
  if (showInfo) {
    return (
      <div className="h-screen w-screen bg-white overflow-y-auto">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white p-6 flex justify-between items-center border-b border-gray-200">
        {/* UPDATED: Name is now clickable to return home */}
        <button 
          onClick={() => {
            setShowInfo(false);
            setSelectedProject(null); // FIXED: Also clear selected project
            setActiveFilter(null);
          }}
          className="text-sm hover:opacity-50 transition-opacity"
        >
          Eileen Ahn
        </button>
        <button
          onClick={() => setShowInfo(false)}
          className="text-sm hover:opacity-50"
        >
          ✕ Close
        </button>
      </div>

        {/* 3 Column Content - EDIT YOUR INFO TEXT HERE */}
        <div className="pt-24 pb-20 px-8 h-[calc(100vh-200px)]">
          <div className="h-full max-w-7xl mx-auto grid grid-cols-3 gap-12">
            
            {/* Column 1 - EDIT FIRST COLUMN TEXT */}
            <div className="text-sm leading-relaxed text-gray-600">
              <p className="mb-4">
              I am a Korean-American designer, writer, and creative technologist based in San Francisco.
              Activated by inquiries rooted in liberation and autonomy, my art and research practice focus on
              alternative appropriations of digital tools and systems as forms of activism and resistance.
              </p>
              <p className="mb-4">
              I currently work as a marketing brand designer at a civic tech nonprofit to make voting more accessible.
              </p>
            </div>

            {/* Column 2 - EDIT SECOND COLUMN TEXT */}
            <div className="text-sm leading-relaxed text-gray-600">
              <p className="mb-4">
                Selected clients include Client One, Client Two, Client Three, Client Four, 
                Client Five, and Client Six.
              </p>
              <p className="mb-4">
                Work has been featured in Publication A, Publication B, and Exhibition C.
              </p>
              <p>
                Currently available for select projects and collaborations.
              </p>
            </div>

            {/* Column 3 - EDIT THIRD COLUMN TEXT */}
            <div className="text-sm leading-relaxed text-gray-600">
              <p className="mb-4">
              ohleenieahn [at] gmail [dot] com
              </p>
              <p className="mb-4">
              <a 
                  href="https://www.instagram.com/leanahnleen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Instagram
                </a>
                <br/>
                <a 
                  href="https://www.linkedin.com/in/eileenahn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Linkedin
                </a>
              </p>
              <p>
              This website was handmade with love and is always in progress…
              </p><br/>

              <p>
              Created with React & Tailwind
              </p><br/>

              <p>
              © 2025 Eileen Ahn. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // PROJECT DETAIL PAGE
  // ============================================
  if (selectedProject) {
    return (
      <div className="min-h-screen w-screen bg-white overflow-y-auto">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white p-6 flex justify-between items-center">
          <button
            onClick={() => setSelectedProject(null)}
            className="text-sm hover:opacity-50"
          >
            ← Back
          </button>
          {/* <div className="text-sm">Eileen Ahn</div> */}
          <button
            onClick={() => setShowInfo(true)}
            className="text-sm hover:opacity-50"
          >
            Info
          </button>
        </div>

        {/* Project Content - Now pulls from PROJECTS DATA array */}
        <div className="pt-24 pb-20 px-8 max-w-6xl mx-auto">
          {/* Project Title */}
          <h1 className="text-6xl mb-12">{selectedProject.title}</h1>
          
          {/* Main Project Image */}
          <img 
            src={selectedProject.image} 
            alt={selectedProject.title}
            className="w-full mb-20"
          />

          {/* Two Column Images - Now pulls from project data */}
          <div className="grid grid-cols-2 gap-8 mb-20">
            <img src={selectedProject.image1} alt="" className="w-full" />
            <img src={selectedProject.image2} alt="" className="w-full" />
          </div>

          {/* Project Description - Now pulls from project data */}
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed">
              {selectedProject.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // MAIN LANDING PAGE
  // ============================================
  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden">
      
      {/* Center Cross Lines - Horizontal and Vertical */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Horizontal line through center */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300" />
        {/* Vertical line through center */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />
      </div>
      
      {/* AXIS LABELS - Fixed words at center of each side */}
      {/* Left center - VERTICAL TEXT */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 text-xs text-gray-400" style={{ writingMode: 'vertical-lr' }}>
        DESIGN
      </div>
      
      {/* Right center - VERTICAL TEXT */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 text-xs text-gray-400" style={{ writingMode: 'vertical-rl' }}>
        WRITING
      </div>
      
      {/* Top center */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-xs text-gray-400">
        DIGITAL
      </div>
      
      {/* Bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 text-xs text-gray-400">
        MATERIAL
      </div>

      {/* Top left: Your Name - EDIT YOUR NAME HERE */}
      {/* UPDATED: Now clickable to return to homepage */}
      <button 
        onClick={() => {
          setSelectedProject(null);
          setShowInfo(false);
          setActiveFilter(null);
        }}
        className="fixed top-6 left-6 z-50 text-sm hover:opacity-50 transition-opacity"
      >
        Eileen Ahn
      </button>

      {/* Top right: Info Button */}
      <button
        onClick={() => setShowInfo(true)}
        className="fixed top-6 right-6 z-50 text-sm hover:opacity-50"
      >
        Info
      </button>

      {/* Bottom left: Filter Categories - EDIT YOUR CATEGORIES HERE */}
      {/* UPDATED: Now clickable to filter projects */}
      <div className="fixed bottom-6 left-6 z-50 text-xs space-y-1">
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Identity" ? "text-black" : "text-gray-400 hover:text-black"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Identity" ? null : "Identity")}
        >
          Identity
        </div>
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Marketing" ? "text-black" : "text-gray-400 hover:text-black"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Marketing" ? null : "Marketing")}
        >
          Marketing
        </div>
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Print" ? "text-black" : "text-gray-400 hover:text-black"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Print" ? null : "Print")}
        >
          Print
        </div>
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Web" ? "text-black" : "text-gray-400 hover:text-black"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Web" ? null : "Web")}
        >
          Web/Video
        </div>
      </div>

      {/* Bottom right: Archive & TXT Links */}
      <div className="fixed bottom-6 right-6 z-50 text-xs space-y-1 text-gray-400">
        <div className="hover:text-black cursor-pointer">Archive</div>
        <div className="hover:text-black cursor-pointer">TXT</div>
      </div>

      {/* Project Dots on X,Y Coordinates */}
      {/* UPDATED: Dots now gray out when filter is active and they don't match */}
      <div className="absolute inset-0">
        {projects.map((project) => {
          // Check if this project matches the active filter
          const isVisible = !activeFilter || project.categories.includes(activeFilter);
          
          return (
            <button
              key={project.id}
              className="absolute z-30"
              style={{
                left: `${project.x}%`,
                top: `${project.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  hoveredProject?.id === project.id ? 'scale-150' : ''
                } ${
                  isVisible ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Center Hover Image Preview */}
      {hoveredProject && (
        <div
          className="fixed z-40 pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img
            src={hoveredProject.image}
            alt={hoveredProject.title}
            className="w-96 h-96 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;