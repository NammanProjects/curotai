import React from 'react';


// Feature card component with proper responsive layout
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 rounded-2xl overflow-hidden flex flex-col h-full">
    <div className="p-5 sm:p-6 flex flex-col h-full">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
      />
      <h3 className="text-xl sm:text-2xl font-semibold mt-4 text-white">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-200 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const WelcomeToCurota = () => {
  const features = [
    {
      icon: '/img/pixel-perfect.png',
      title: 'Pixel Perfect Annotation',
      description: 'Ensure high quality and accuracy with exact boundary definitions'
    },
    {
      icon: '/img/validation.png',
      title: 'Validation Led Engagement',
      description: 'Verify before you buy through our free pre-validation engagement model'
    },
    {
      icon: '/img/scalability.png',
      title: 'Dynamic Scalability',
      description: 'Lets you scale your annotation needs up or down without commitments'
    },
    {
      icon: '/img/security.png',
      title: 'Compliant and Secure',
      description: 'Zero-trust security with 100% data residency and access controls'
    }
  ];

  const metrics = [
    { value: '61%', title: 'Metric 1' },
    { value: '56%', title: 'Metric 2' },
    { value: '55%', title: 'Metric 3' },
    { value: '48%', title: 'Metric 4' }
  ];

  return (
    <section className="bg-[#203e40] pb-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 text-center">
        <h1 className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-center">
          <span className="text-[#e7f6f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Welcome to
          </span>
          <span className="text-[#e7f6f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <img src="./img/name-icon.svg" className="w-[100px] pb-1.5 inline" alt="Company Logo" />
          </span>
          <span className="text-[#e7f6f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            !
          </span>
        </h1>

        <h3 className="flex flex-row mx-auto text-2xl font-bold text-[#203E40] mb-6 relative max-w-[600px]">
        <div className="left-0 my-auto transform -translate-y-1/2 w-full h-px bg-gradient-to-l from-white to-transparent"></div>
        <p className="text-[#e7f6f4] mt-4 text-sm sm:text-base md:text-md italic font-medium min-w-[300px] lg:min-w-[400px] mx-auto">
          we transform data with precision and care, delivering excellence beyond just solutions.
        </p>
        <div className=" right-0 my-auto transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-white to-transparent"></div>
        </h3>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto pb-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Why Curota card - First on mobile, left on desktop */}
          <div className="bg-white/10 rounded-2xl overflow-hidden h-auto md:h-full">
            {/* Browser-like header with dots */}
            <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#f06449]"></div>
                <div className="w-3 h-3 rounded-full bg-[#e79f47]"></div>
                <div className="w-3 h-3 rounded-full bg-[#03c39a]"></div>
              </div>
            </div>
            
            <div className="p-5 md:p-6">
              {/* Desktop layout */}
              <div className="hidden md:block">
                <div className="flex flex-row items-center gap-2 mb-6">
                  <h2 className="text-2xl md:text-3xl text-[#e7f6f4] font-semibold">Why</h2>
                  <div className="inline-block">
                    <img src="./img/name-icon.svg" className="max-w-[167px] pb-[7px] inline" alt="Company Logo" />
                  </div>
                  <span className="text-2xl md:text-3xl text-[#e7f6f4] font-semibold">?</span>
                </div>
                
                {/* Feature icons grid for desktop */}
                <div className="grid grid-cols-2 gap-4 max-w-[240px]">
                  {features.map((feature, index) => (
                    <img
                      key={index}
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full aspect-square rounded-lg object-cover"
                    />
                  ))}
                </div>
                
                <div className="mt-6">
                  <p className="text-sm md:text-base text-white/90">
                    Secure, compliant, cost-effective and domain expert led annotation services, 
                    to help you fast-track accurate AI model development
                  </p>
                </div>
              </div>
              
              {/* Mobile layout - text and icons in one row */}
              <div className="md:hidden flex flex-row items-center justify-between">
                {/* Why Curota text */}
                <div className="flex items-center gap-1 flex-shrink-0 mr-3">
                  <h2 className="text-2xl sm:text-2xl text-[#e7f6f4] font-semibold">Why</h2>
                  <div className="inline-block">
                    <img src="./img/name-icon.svg" className="max-w-[115px] sm:max-w-[120px] pb-[5px] inline" alt="Company Logo" />
                  </div>
                  <span className="text-xl sm:text-2xl text-[#e7f6f4] font-semibold">?</span>
                </div>
                
                {/* Feature icons in 2x2 grid */}
                <div className="grid grid-cols-2 gap-2 flex-shrink-0">
                  {features.map((feature, index) => (
                    <img
                      key={index}
                      src={feature.icon}
                      alt={feature.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards grid - 2 columns on all devices */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Metrics section */}
        <div className="mt-[90px] md:mt-[90px] mb-8 mx-0 lg:mx-[180px] md:mx-[100px] sm:mx-[50px] xs:mx-[30px]">
          <div className="bg-white/80 rounded-2xl p-6 md:p-8 bg-[url('../public/img/background-image-0.png')]">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
              {/* Metrics grid - 2x2 layout */}
              <div className="grid grid-cols-2 gap-0">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-[#203e40] border border-gray-200/50 p-6">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 font-sans text-center">
                      {metric.value}
                    </div>
                    <div className="text-sm md:text-base text-center">
                      {metric.title}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Metrics heading and description moved below the grid as shown in image */}
              <div className="text">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#203e40] font-semibold mb-2">
                  Metrics
                </h3>
                <p className="text-sm md:text-base text-[#203e40] max-w-md ">
                  Description about the data beside. Lorem ipsum dolor sit amet,
                  consectetur adipiscing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToCurota;