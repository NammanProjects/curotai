import React, { useState } from 'react';

const AccordionItem = ({ title, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <div 
      className="flex items-center justify-between py-3 px-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full border-[3.5px] border-[#d8e9e7] bg-[#203e40]"></div>
        <div className="text-[#203e40] font-helvetica text-lg">
          {title}
        </div>
      </div>
      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#203E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

const ReadMoreSection = ({ id, children, expanded, onToggle }) => (
  <div>
    <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[2000px]' : 'max-h-[500px]'}`}>
      {children}
    </div>
    <div className="text-center mt-6">
      <button 
        onClick={onToggle}
        className="inline-flex items-center text-[#203e40] font-medium hover:underline group"
      >
        {expanded ? "Read Less" : "Read More"} 
        <svg 
          className={`ml-1 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} 
          width="24" height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7" stroke="#203E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
);

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('Image Datasets');
  const [expandedSections, setExpandedSections] = useState({
    'image-datasets': false,
    'video-datasets': false,
    '3d-annotation': false
  });
  
  const toggleSection = (sectionId) => {
    setExpandedSections({
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId]
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    'Image Datasets',
    'Video Datasets',
    '3D Annotation'
  ];

  const imageDatasetItems = [
    'People engaged in multiple activities',
    'Scenes',
    'Stores',
    'Objects',
    'Plants',
    'Animals'
  ];

  const videoDatasetItems = [
    'Motion sequences while doing different types of housework',
    'Gestures',
    'Sports activities',
    'Scenes',
    'Objects',
    'Animals'
  ];

  const threeDAnnotationItems = [
    'Environmental mapping',
    'Object identification',
    'Vehicle detection',
    'Pedestrian tracking',
    'Terrain profiling',
    'Obstacle Detection'
  ];

  return (
    <div className="min-h-screen bg-[#f0f8f8]">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-700 bg-blend-overlay bg-opacity-80 relative py-16" style={{ backgroundImage: "url('/img/movielogo.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[url('../public/img/servicesimg.png')] opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="m-[20vh]"></div>
          <div className="flex justify-center mb-8">
            <img src="/img/movielogo.png" alt="Insurance Icon" className="h-24" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Computer Vision
          </h1>
          <div className="m-[9vh]"></div>
        </div>
      </div>

      {/* Navigation Box */}
      <div className="w-full max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6">
            {sections.map((section) => (
              <AccordionItem
                key={section}
                title={section}
                isOpen={activeSection === section}
                onClick={() => scrollToSection(section)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-12">
        {/* Computer Vision Overview */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8 border border-blue-100">
          <section className="mb-4">
            <h2 className="text-3xl font-bold text-[#203e40] mb-6">Computer Vision</h2>
            <p className="text-[#203e40]/80 mb-8 leading-relaxed">
              Datasets are the core of Computer Vision, essential for realizing the prowess of AI and Machine Learning. They convert visual 
              information into structured data that machines comprehend, a process we specialize in. We meticulously transform real-world 
              visuals into annotated data, establishing a connection between human vision and machine understanding.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-[#e5f5f3] rounded-xl p-6 flex items-center justify-center">
                <div className="h-32 w-full flex items-center justify-center text-[#203e40]/40">Feature illustration</div>
              </div>
              <div className="bg-[#e5f5f3] rounded-xl p-6 flex items-center justify-center">
                <div className="h-32 w-full flex items-center justify-center text-[#203e40]/40">Feature illustration</div>
              </div>
            </div>
          </section>
        </div>

        {/* Image Datasets Section */}
        <div id="image-datasets" className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-[#203e40] mb-6">Image Datasets and Photo Datasets:</h2>
          
          <ReadMoreSection 
            id="image-datasets" 
            expanded={expandedSections['image-datasets']} 
            onToggle={() => toggleSection('image-datasets')}
          >
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              To accurately train and evaluate images for machine learning applications, your AI system requires suitable, model-specific image and photo datasets. However, obtaining such superior image recognition training data for unsupervised learning purposes usually poses significant challenges and can be expensive.
            </p>
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              Our team provides solution to label datasets based on your needs. These large image datasets can be used as training data for your image recognition system.
            </p>
            
            <div className="mb-6 mt-4">
              <p className="text-[#203e40] mb-2">Our team can perform labeling for and not limited to:</p>
              <ul className="list-disc pl-6 space-y-1 text-[#203e40]/80">
                {imageDatasetItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              The dynamic nature of our team ensures you getting representative and superior labelled photo datasets for the optimal AI training of your image recognition systems:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#203e40]/80 mb-4">
              <li>We rapidly provide substantial volumes of photo sets as per your demand.</li>
              <li>Our workflow labels persons, environments, individuals, environments, objects, lighting conditions, times of day, indoor and outdoor shots, distances, and more.</li>
              <li>We offer images labelling service from any perspective and comprehensive 360° rotations.</li>
              <li>We labelling for sequential shots.</li>
              <li>Your needs dictate our photo labelling service: horizontal or vertical, wide-angle or telephoto lens, with or without flash.</li>
              <li>All labelled image recognition datasets undergo quality control checks.</li>
            </ul>
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </ReadMoreSection>
        </div>

        {/* Video Datasets Section */}
        <div id="video-datasets" className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-[#203e40] mb-6">Video Datasets For Machine Learning:</h2>
          
          <ReadMoreSection 
            id="video-datasets" 
            expanded={expandedSections['video-datasets']} 
            onToggle={() => toggleSection('video-datasets')}
          >
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              The initial step of machine learning video recognition is acquiring optimized training data.
            </p>
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              For the successful development of AI-based systems in surveillance, motion detection, or gesture guidance, using efficiently vast amounts of individualized top-notch video datasets for training is paramount.
            </p>
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              Leveraging our team support, we deliver the specifically labeled video datasets you require, both in terms of type and volume, to expedite the training of your video recognition system.
            </p>
            
            <div className="mb-6 mt-4">
              <p className="text-[#203e40] mb-2">It includes following aspects not limited to:</p>
              <ul className="list-disc pl-6 space-y-1 text-[#203e40]/80">
                {videoDatasetItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </ReadMoreSection>
        </div>

        {/* 3D Annotation Section */}
        <div id="3d-annotation" className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-[#203e40] mb-6">3D Annotation</h2>
          
          <ReadMoreSection 
            id="3d-annotation" 
            expanded={expandedSections['3d-annotation']} 
            onToggle={() => toggleSection('3d-annotation')}
          >
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              The journey of machine learning in 3D data recognition begins with obtaining perfectly tuned training data. For the thriving development of AI systems in autonomous vehicles, obstacle detection, or terrain profiling, harnessing ample 3D datasets from LIDAR and RADAR sources for training is key.
            </p>
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              With the assistance of our expert team, we supply the specifically labeled 3D datasets required, in both volume and variety, to fast-track the training of your 3D data recognition system.
            </p>
            
            <div className="mb-6 mt-4">
              <p className="text-[#203e40] mb-2">This includes, but is not limited to:</p>
              <ul className="list-disc pl-6 space-y-1 text-[#203e40]/80">
                {threeDAnnotationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-[#203e40]/80 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </ReadMoreSection>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="bg-[#203e40] text-white p-3 rounded-full shadow-lg hover:bg-[#203e40]/90 transition-colors"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;