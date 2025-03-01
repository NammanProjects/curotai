import React from 'react';

// Feature icon component
const FeatureIcon = ({ icon, alt }) => (
  <div className="bg-white/10 rounded-lg p-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
    <img
      src={icon}
      alt={alt}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
    />
  </div>
);

// Feature card component with proper responsive layout
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 rounded-2xl overflow-hidden flex flex-col h-full">
    <div className="p-5 sm:p-6 flex flex-col h-full">
      <FeatureIcon icon={icon} alt={title} />
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
    <section className="bg-[#203e40] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16 text-center">
        <h1 className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-center">
          <span className="text-[#e7f6f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Welcome to
          </span>
          <span className="text-[#e7f6f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          <img src="./img/name-icon.svg" className="w-[260px] pb-1.5 inline" alt="Company Logo" class="logo"></img>
          </span>
          <span className="text-[#e7f6f4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            !
          </span>
        </h1>
        <p className="text-[#e7f6f4] mt-4 text-sm sm:text-base md:text-lg italic font-medium max-w-2xl mx-auto">
          we transform data with precision and care, delivering excellence beyond just solutions.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto">
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
            
            {/* Feature icons grid */}
            <div className="p-5 md:p-6">
              <div className="grid grid-cols-2 my-auto max-w-[200px] mr-auto">
                {features.map((feature, index) => (
                  <img
                    key={index}
                    src={feature.icon}
                    alt={feature.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                ))}
              </div>
              
              
              {/* Why Curota text */}
              <div className="mt-6 md:mt-8 block">
                <h2 className="text-2xl md:text-3xl text-[#e7f6f4] font-semibold mb-3 block">
                  Why  <img  src="./img/name-icon.svg" className="w-[167px] pb-2 inline" alt="Company Logo" class="logo"></img> ?
                </h2>
                <p className="text-sm md:text-base text-white/90">
                  Secure, compliant, cost-effective and domain expert led annotation services, 
                  to help you fast-track accurate AI model development
                </p>
              </div>
            </div>
          </div>

          {/* Feature cards grid - 2 columns on desktop, 1 column on mobile */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        <div className="mt-[90px] md:mt-[90px] mb-8 mx-0 lg:mx-[180px] ">
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 bg-[url('../public/img/background-image-0.png')]">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-8">
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#203e40] font-semibold mb-2 md:mb-4">
                  Metrics
                </h3>
                <p className="text-sm md:text-base text-[#203e40]">
                  Description about the data beside. Lorem ipsum dolor sit amet,
                  consectetur adipiscing.
                </p>
              </div>
              
              <div className="md:col-span-3 ">
                <div className="grid grid-cols-2 gap-4 md:gap-12">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-[#203e40]">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 font-sans">
                        {metric.value}
                      </div>
                      <div className="text-sm md:text-basetext-[#203e40]">
                        {metric.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToCurota;