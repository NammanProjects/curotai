import React from 'react';

const ProfileCard = ({ avatar, name, description, location, role }) => (
  <div className="bg-[#E5F5F3] rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-8 text-center mx-[25px] md:mx-0">
    <div className="w-48 h-48 rounded-full mb-8 overflow-hidden border-6 border-white shadow-xl">
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-bold text-[#203E40] mb-6 relative w-full">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-px bg-gradient-to-l from-[#203E40] to-transparent"></div>
      <span className="px-4">{name}</span>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-px bg-gradient-to-r from-[#203E40] to-transparent"></div>
    </h3>
    <p className="text-base text-gray-700 mb-6 px-4 min-h-[120px]">{description}</p>
    <div className="flex items-center mb-6">
      <img src="/img/location.svg" alt="Location" className="w-6 mr-3" />
      <span className="text-base text-[#203E40]">{location}</span>
    </div>
    <div className="bg-[#203E40] text-white uppercase text-sm font-bold rounded-full px-6 py-3">
      {role}
    </div>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    {
      avatar: "/img/Frame 260.png",
      name: "NIKITA PANDEY",
      description: "Nikita Pandey, Director of Operations at Curota.ai, brings over years of expertise in retail banking operations from HDFC Bank. With an MBA in Financial Administration, she excels in driving strategic and efficient operational excellence.",
      location: "Pune, India",
      role: "Director of Operations"
    },
    {
      avatar: "/img/Frame 260-2.png",
      name: "AYAN",
      description: "Ayan is a seasoned technology leader and entrepreneur, currently serving as a Founding Board Member at Curota.ai. With extensive experience in mobility tech, data, AI, and cloud solutions, he brings a wealth of knowledge from his roles at Ankercloud GmbH and as Co-Founder of Kruzr, an AI-powered mobility safety platform.",
      location: "Düsseldorf, Germany",
      role: "Chief Growth Officer"
    },
    {
      avatar: "/img/amitgupta.png",
      name: "MANOJ KUMAR",
      description: "Manoj Kumar, founding Board Member at Curota.ai, is an IT leader with years of expertise in solution architecture and project management. With an MBA from WHU and global exposure, he excels in driving innovative, scalable tech solutions.",
      location: "Düsseldorf, Germany",
      role: "Chief Financial Officer"
    },
    {
      avatar: "/img/amitgupta.png",
      name: "AMIT GUPTA",
      description: "Amit Kumar Gupta is the Co-founder and COO of Curota.ai. With years of diverse experience in technology and education, he is dedicated to driving innovation and supporting academic success.",
      location: "Bengaluru, India",
      role: "Chief Operations Officer"
    },
    {
      avatar: "/img/Frame 260-4.png",
      name: "ROHAN KANUNGO ",
      description: "Rohan Kanungo, Board Member at Curota.ai, brings deep expertise in MarTech, AI-driven platforms, product strategy, and consulting. With a proven track record of driving innovation and customer engagement, he is committed to shaping transformative solutions at the intersection of technology and business.",
      location: "Pune, India",
      role: "Board Advisory"
    },
    {
      avatar: "/img/Frame 260-5.png",
      name: "SOURAV KUMAR",
      description: "Sourav Kumar, Co-Founder and CEO of Curota.ai, brings over years of expertise in consulting for global transport and logistics companies, blending technology, strategy, and leadership. With an MBA from WHU and global exposure at institutions like Columbia Business School, he is driving innovation and transformation in the logistics industry.",
      location: "Düsseldorf, Germany",
      role: "Chief Executive Officer"
    }
  ];

  return (
    <div className="bg-[#F0F8F8] min-h-screen flex flex-col">
      <div className="w-full bg-[url('../public/img/background-image-0.png')] text-center py-16 mb-8">
      <div className='m-[15vh]'></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img src="/img/skiled-force.png" alt="Skilled Force Icon" className="h-24" />
          </div>
          <h1 className="text-5xl font-bold text-[#203E40]">
            ABOUT US
          </h1>
        </div>
        <div className='m-[5vh]'></div>
      </div>

      <div className="container mx-auto px-4 pt-[50px] flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>
      </div>

      <div className="flex justify-center my-12">
        <button className="bg-[#203E40] text-white rounded-full shadow-xl px-16 py-5 flex items-center gap-6 hover:bg-[#2c5a5c] transition-colors duration-300">
          <span className="text-2xl font-semibold">Go Back</span>
          <img src="/img/backbutton.svg" alt="Back" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;