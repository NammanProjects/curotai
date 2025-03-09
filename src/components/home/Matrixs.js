import React from 'react';

const MetricsSection = () => {
  const metrics = [
    { value: '61%', title: 'Metric 1' },
    { value: '56%', title: 'Metric 2' },
    { value: '55%', title: 'Metric 3' },
    { value: '48%', title: 'Metric 4' }
  ];

  return (
    <section className="g-[#203e40] py-12 px-4 sm:px-6 md:px-8 pb-[75px]">
      <div className="max-w-6xl mx-auto">
        <div className="mt-[30px] md:mt-[30px] mb-8 mx-0 lg:mx-[180px] md:mx-[100px] sm:mx-[50px] xs:mx-[30px]">
          <div className="bg-white/80 rounded-2xl p-6 md:p-8 bg-[url('../public/img/background-image-0.png')]">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Metrics heading and description - First on mobile, Second on desktop */}
              <div className="text order-last lg:order-first p-4 pt-5">
                <h3 className="text-2xl md:text-2xl lg:text-4xl text-[#203e40] font-semibold mb-2 my-auto">
                  Metrics
                </h3>
                <p className="text-sm md:text-base text-[#203e40] max-w-md">
                  Description about the data beside. Lorem ipsum dolor sit amet,
                  consectetur adipiscing.
                </p>
              </div>
              
              {/* Metrics grid - 2x2 layout - Second on mobile, First on desktop */}
              <div className="grid grid-cols-2 gap-10 order-first lg:order-last pr-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-[#203e40] border border-gray-200/50 p-2">
                    <div className="text-4xl sm:text-4xl md:text-3xl font-bold mb-1 font-sans text-center">
                      {metric.value}
                    </div>
                    <div className="text-sm md:text-base text-center">
                      {metric.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;