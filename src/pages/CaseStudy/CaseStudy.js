import React, { useState, useRef } from 'react';

const NavigationItem = ({ title, activeSection, onClick }) => (
  <div 
    className="flex items-center gap-2 py-3"
    onClick={() => onClick(title)}
  >
    <div className={`w-2 h-2 rounded-full ${activeSection === title ? 'bg-[#203e40]' : 'bg-[#203e40]/20'}`}></div>
    <div className={`text-[#203e40]/80 hover:text-[#203e40] font-helvetica text-lg transition-colors cursor-pointer
      ${activeSection === title ? 'text-[#203e40] font-medium' : ''}`}
    >
      {title}
    </div>
  </div>
);

const InfoBox = ({ title, icon, content, onClick, isActive }) => (
  <div 
    onClick={onClick}
    className={`border border-[#203e40]/20 rounded-lg p-5 w-full ${isActive ? 'bg-[#e5f5f3]' : 'bg-white'} shadow-sm hover:shadow transition-shadow cursor-pointer`}
  >
    <div className="text-center text-gray-800 font-medium mb-3">{title}</div>
    <div className="flex items-center justify-center gap-3">
      {icon}
      <div className="text-[#203e40]/70 text-lg uppercase">{content}</div>
    </div>
  </div>
);

const ContentSection = ({ id, title, children }) => (
  <section id={id} className="mb-16">
    <h2 className="text-4xl font-bold text-[#203e40] mb-6">{title}</h2>
    {children}
  </section>
);

const CaseStudy = () => {
  const [activeSection, setActiveSection] = useState('Introduction');
  const testimonialsRef = useRef(null);

  const sections = [
    'Introduction',
    'Why Curota for insurance',
    'Metrics Increased for XYZ',
    'Follow Up Targets',
    'Conclusion',
    'Client Testimonials'
  ];

  const metrics = [
    { value: '61%', title: 'Metric 1' },
    { value: '56%', title: 'Metric 2' },
    { value: '55%', title: 'Metric 3' },
    { value: '48%', title: 'Metric 4' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const jumpToTestimonials = () => {
    setActiveSection('Client Testimonials');
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#f0f8f8] min-h-screen">
      
      <div className="w-full bg-[url('../public/img/background-image-0.png')] text-center relative py-16">
        <div className='m-[17vh]'></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img src="/img/datalabelling.png" alt="Insurance Icon" className="h-24" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#203e40] mb-6">
            Data Labeling for Insurance
          </h1>
          <p className="max-w-2xl mx-auto text-[#203e40]/80 text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </p>
        </div>
        <div className='m-[9vh]'></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-6 p-6 border-b md:border-b-0 md:border-r border-gray-200">
              {sections.map((section) => (
                <NavigationItem
                  key={section}
                  title={section}
                  activeSection={activeSection}
                  onClick={scrollToSection}
                />
              ))}
            </div>

            <div className="md:col-span-6 p-6">
              <div className="space-y-6">
                <InfoBox
                  title="Reading time"
                  icon={<img src="/img/mingcute_time-fill.png" alt="Clock icon" className="w-6 h-6" />}
                  content="10 mins"
                  isActive={false}
                />

                <InfoBox
                  title="Jump To"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M8 2L15 9L8 16" fill="#203E40" fillOpacity="0.7"/>
                    </svg>
                  }
                  content="TESTIMONIALS"
                  onClick={jumpToTestimonials}
                  isActive={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <ContentSection id="Introduction" title="Introduction">
            <p className="text-lg text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. 
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum 
              sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat 
              placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. 
              Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,.
            </p>
          </ContentSection>

          <ContentSection id="Why Curota for insurance" title="Why Curota for Insurance?">
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. 
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum 
              sit amet. Pellentesque commodo lacus at sodales sodales.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#e5f5f3] rounded-xl p-6 flex items-center justify-center">
                <div className="h-40 w-full flex items-center justify-center text-[#203e40]/40">Feature illustration</div>
              </div>
              <div className="bg-[#e5f5f3] rounded-xl p-6 flex items-center justify-center">
                <div className="h-40 w-full flex items-center justify-center text-[#203e40]/40">Feature illustration</div>
              </div>
            </div>
          </ContentSection>

          <section id="Metrics Increased for XYZ" className="mb-16">
            <div className="bg-[#203e40] rounded-3xl overflow-hidden shadow-lg">
              <div className="p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-5">
                    <h3 className="text-4xl md:text-5xl text-[#e5f5f3] font-semibold mb-4">Metrics</h3>
                    <p className="text-white/80 text-lg">
                      Description about the data beside. Lorem ipsum dolor sit amet,
                      consectetur adipiscing.
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <div className="grid grid-cols-2 gap-8">
                      {metrics.map((metric, index) => (
                        <div key={index} className="text-[#e5f5f3]">
                          <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
                          <div className="text-xl">{metric.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <ContentSection id="Follow Up Targets" title="Follow Up Targets">
            <p className="text-lg text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. 
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum 
              sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat 
              placerat. In iaculis arcu eros, eget tempus orci facilisis id.
            </p>
          </ContentSection>

          <ContentSection id="Conclusion" title="Conclusion">
            <p className="text-lg text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. 
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum 
              sit amet. Pellentesque commodo lacus at sodales sodales.
            </p>
          </ContentSection>

          <section id="Client Testimonials" ref={testimonialsRef} className="mb-16">
            <h2 className="text-4xl font-bold text-[#203e40] mb-8">Client Testimonials</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-200"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#203e40] mb-1">Johnathon Dome</h4>
                    <p className="text-[#203e40]/70 mb-4">Data Engineer, DJI</p>
                    <p className="text-gray-700 leading-relaxed">
                      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
                      Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                      Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, 
                      at maximus ante. sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-200"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#203e40] mb-1">Sarah Johnson</h4>
                    <p className="text-[#203e40]/70 mb-4">AI Research Lead, InsureTech</p>
                    <p className="text-gray-700 leading-relaxed">
                      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
                      Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                      Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

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

export default CaseStudy;