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
      image: "/images/50p1-main.png",
      description: "→ Intro\n [50+1 Strategies](https://50p1.com/) was a political consulting firm based in San Francisco that operated for 13 years to build  local campaigns and grassroots movements surrounding progressive advocacy. In their 11th year, I was tasked with their rebrand and art direction of the new website.\n\n Role: Lead Designer, Art Director\n Web Design by Apollo Artistry", 
      research: "→ Challenge\n The challenge was dissecting the firm’s title and old logo of the numbers (50, 1), signifying a tipping point towards the majority. There was also a need to create a timeless logo symbolic of dynamic, lasting movement for and towards change.",
      result: "→ Solution\n The solution was utilizing the plus sign that served as the joining motif of the two numbers. We arrived at a logo that considers the balance of youthful power as well as dynamism and strength. The layered plus sign offers an open-ended visual interpretation that alludes to windows or doors and portals of change to the other side.",
      impact: "→ Impact\n The new brand identity received overwhelmingly positive feedback from past and present clients with opportunities for new collaborations. The rebrand launch drove website traffic by 147% with a 28% increase in newsletter subscribers.",
      image1: "/images/50p1-01.png",
      image2: "/images/50p1-02.png",
      image3: "/images/50p1.gif",
    },
    { 
      id: 4, 
      title: "Schema Acquisition", 
      x: 60, 
      y: 55, 
      categories: ["Identity"], // ASSIGN CATEGORIES HERE
      image: "/images/schema-main.gif",
      description: "→ Intro\n [Schema Acquisition](https://schemacquisition.substack.com/) is a personal Substack project exploring relation-mapping the unlikely to engender new abstractions. Garnering schemas on my personal relationship with the digital landscape and studying digital-physical porosity, the project aims to research alternative appropriations of platforms and creative subversion online.", 
      research: "→ Research/Strategy\n Schema acquisition is a cognitive learning theory that I came across during my Neuroscience thesis. It is loosely defined as linking various elements to form a recognizable pattern to engender new abstractions or understanding through a class of structure (think: windows, wheels, seats, etc… = car!). I believe learning about our selfhood and personal world-building is all about big and small experiences of schema acquisition. I wanted the logo to reflect the process of linkage and multiplicity to create new meanings and systems.",
      result: "→ Logo Identity\n The brand identity is built around simple vector points and lines to convey joinment, connection, and gathering. The publication logo is a cursor to signify movement and autonomous direction in the exploration of schema gathering and joinage (whether it be adding or removing to the vector line). Each post is accompanied by “schema(s)” or a visual interpretation of the piece as graphs, charts, doodles, etc.", 
      image1: "/images/schema-01.png",
      image2: "/images/schema-02.png",
      image3: "/images/schema-03.png"
    },
    {
      id: 5,
      title: "ASCII Bedroom Memoir",
      x: 42,
      y: 21,
      categories: ["Web"],
      externalLink: "https://thehtml.review/04/",
      image: "/images/ascii-main.png"
      // No need for description, research, image1, image2
    },
    { 
      id: 6, 
      title: "Internet Phone Book", 
      x: 25, 
      y: 65, 
      categories: ["Print"], // ASSIGN CATEGORIES HERE
      image: "/images/ipb.png",
      description: "→ Intro\n [Internet Phone Book](https://internetphonebook.net/), as quoted from the website, is 'an annual publication for exploring the vast poetic web, featuring essays, musings and a directory with the personal websites of hundreds of designers, developers, writers, curators, and educators.' My essay, [A History of My Websites](https://schemacquisition.substack.com/p/9-a-history-of-my-websites), first published on my Substack, is featured on pg. 153 of the publication.", 
      image2: "/images/ipb-03.png",
      image4: "/images/ipb-04.png",
      image5: "/images/ipb-05.png"
    },
    {
      id: 7,
      title: "WeDream",
      x: 75,
      y: 30,
      categories: ["Web"],
      externalLink: "https://www.youtube.com/watch?v=WCObWm1_5cg&feature=youtu.be",
      image: "/images/wedream-main.png",
      // No need for description, research, image1, image2
    },
    { 
      id: 8, 
      title: "Alternative Typographic Histories", 
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
                Current Infatuations: <br/>
                &#8594; Song on repeat is Human Happens by Magdalena Bay <br/>
                &#8594; The last drink I sipped is a warm glass of milk (yes, I am a proud whole milk drinker leave me alone) <br/>
                &#8594; A restaurant I want to revisit is Kevin & Chris's Noodle House on Irving <br/>
                &#8594; I am slowly making my way through 600 pages of Death's End by Cixin Liu
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
                  className="hover:text-purple-500 transition-colors"
                >
                  Instagram &#8599;
                </a>
                <br/>
                <a 
                  href="https://www.linkedin.com/in/eileenahn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  Linkedin &#8599;
                </a>
                <br/>
                <a 
                  href="https://schemacquisition.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  Substack &#8599;
                </a>
              </p>
              <p>
              This website was handmade with love (+ React & Tailwind) and is always in progress…
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
  if (selectedProject && !showInfo) {
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
        {/* UPDATED: 2-column layout - 1/3 text (left) + 2/3 images (right) */}
        <div className="pt-24 pb-20 px-8">
          <div className="flex gap-10 max-w-7xl mx-auto">
            
            {/* LEFT COLUMN - 1/3 width - Text content */}
            <div className="w-1/3 flex-shrink-0">
            {/* Project Title */}
            <h1 className="text-2xl mb-6">{selectedProject.title}</h1>
              
            {/* UPDATED: Now supports clickable links */}
            <div className="text-sm leading-relaxed">
                {selectedProject.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-5">
                    {paragraph.split('\n').map((line, i) => {
                      // Convert [text](url) format to clickable links
                      const parts = line.split(/(\[.*?\]\(.*?\))/g);
                      return (
                        <span key={i}>
                          {parts.map((part, j) => {
                            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                            if (linkMatch) {
                              return (
                                <a
                                  key={j}
                                  href={linkMatch[2]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:opacity-50 transition-opacity"
                                >
                                  {linkMatch[1]}
                                </a>
                              );
                            }
                            return <span key={j}>{part}</span>;
                          })}
                          {i < paragraph.split('\n').length - 1 && <br />}
                        </span>
                      );
                    })}
                  </p>
                ))}
              </div>

              {/* Research Section */}
              {/* UPDATED: Now supports clickable links */}
              {selectedProject.research && (
                <div className="text-sm leading-relaxed">
                  {selectedProject.research.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-5">
                      {paragraph.split('\n').map((line, i) => {
                        // Convert [text](url) format to clickable links
                        const parts = line.split(/(\[.*?\]\(.*?\))/g);
                        return (
                          <span key={i}>
                            {parts.map((part, j) => {
                              const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                              if (linkMatch) {
                                return (
                                  <a
                                    key={j}
                                    href={linkMatch[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-50 transition-opacity"
                                  >
                                    {linkMatch[1]}
                                  </a>
                                );
                              }
                              return <span key={j}>{part}</span>;
                            })}
                            {i < paragraph.split('\n').length - 1 && <br />}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>
              )}

              {/* Result Section */}
              {/* UPDATED: Now supports clickable links */}
              {selectedProject.result && (
                <div className="text-sm leading-relaxed">
                  {selectedProject.result.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-5">
                      {paragraph.split('\n').map((line, i) => {
                        // Convert [text](url) format to clickable links
                        const parts = line.split(/(\[.*?\]\(.*?\))/g);
                        return (
                          <span key={i}>
                            {parts.map((part, j) => {
                              const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                              if (linkMatch) {
                                return (
                                  <a
                                    key={j}
                                    href={linkMatch[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-50 transition-opacity"
                                  >
                                    {linkMatch[1]}
                                  </a>
                                );
                              }
                              return <span key={j}>{part}</span>;
                            })}
                            {i < paragraph.split('\n').length - 1 && <br />}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>
              )}

              {/* Impact Section */}
              {/* UPDATED: Now supports clickable links */}
              {selectedProject.impact && (
                <div className="text-sm leading-relaxed">
                  {selectedProject.impact.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-5">
                      {paragraph.split('\n').map((line, i) => {
                        // Convert [text](url) format to clickable links
                        const parts = line.split(/(\[.*?\]\(.*?\))/g);
                        return (
                          <span key={i}>
                            {parts.map((part, j) => {
                              const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                              if (linkMatch) {
                                return (
                                  <a
                                    key={j}
                                    href={linkMatch[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:opacity-50 transition-opacity"
                                  >
                                    {linkMatch[1]}
                                  </a>
                                );
                              }
                              return <span key={j}>{part}</span>;
                            })}
                            {i < paragraph.split('\n').length - 1 && <br />}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - 2/3 width - Images */}
            <div className="w-2/3 space-y-4">
              {/* Main Project Image */}
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full"
              />

              {/* Other Images */}
              <img src={selectedProject.image1} alt="" className="w-full"/>
              <img src={selectedProject.image2} alt="" className="w-full"/>
              <img src={selectedProject.image3} alt="" className="w-full"/>

              {/* Two Column Images Grid */}
              <div className="grid grid-cols-2 gap-2">
                <img src={selectedProject.image4} alt="" className="w-full" />
                <img src={selectedProject.image5} alt="" className="w-full" />
              </div>
            </div>

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
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 text-xs text-gray-400 rotate-180" style={{ writingMode: 'vertical-lr' }}>
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
            activeFilter === "Identity" ? "text-purple-500" : "text-gray-400 hover:text-purple-500"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Identity" ? null : "Identity")}
        >
          Identity
        </div>
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Marketing" ? "text-purple-500" : "text-gray-400 hover:text-purple-500"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Marketing" ? null : "Marketing")}
        >
          Marketing
        </div>
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Print" ? "text-purple-500" : "text-gray-400 hover:text-purple-500"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Print" ? null : "Print")}
        >
          Print
        </div>
        <div 
          className={`cursor-pointer transition-colors ${
            activeFilter === "Web" ? "text-purple-500" : "text-gray-400 hover:text-purple-500"
          }`}
          onClick={() => setActiveFilter(activeFilter === "Web" ? null : "Web")}
        >
          Web/Video
        </div>
      </div>

      {/* Bottom right: Archive & TXT Links
      <div className="fixed bottom-6 right-6 z-50 text-xs space-y-1 text-gray-400">
        <div className="hover:text-black cursor-pointer">Archive</div>
        <div className="hover:text-black cursor-pointer">TXT</div>
      </div> */}

      {/* Project Dots on X,Y Coordinates */}
      {/* UPDATED: Dots now gray out when filter is active and they don't match */}
       {/* UPDATED: Dots with externalLink open URL in new tab instead of inner page */}
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
              onClick={() => {
                // If project has externalLink, open in new tab
                if (project.externalLink) {
                  window.open(project.externalLink, '_blank', 'noopener,noreferrer');
                } else {
                  // Otherwise, open inner page as normal
                  setSelectedProject(project);
                }
              }}
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