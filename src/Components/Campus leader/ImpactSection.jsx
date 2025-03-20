import React from 'react';

const ImpactSection = () => {
  const impactItems = [
    {
      icon: "/Promote hackingly program.svg",
      title: "Promote hackingly programs and raise awareness of our events."
    },
    {
      icon: "/workshop and events.svg",
      title: "Host exciting workshops and events for your campus community."
    },
    {
      icon: "/Campus engagement.svg",
      title: "Ignite campus engagement that inspires student involvement."
    },
    {
      icon: "/Enhance Product.svg",
      title: "Share insights to enhance products as a collaborative innovator."
    },
    {
      icon: "/Diverse audiences.svg",
      title: "Convey Hackingly's mission to diverse audiences."
    },
    {
      icon: "/suggest idea to boost.svg",
      title: "Suggest ideas to boost engagement as a productive idea generator."
    }
  ];

  return (
   <>
     <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl text-center font-[500] text-slate-700 mb-16">
        How You'll Make an Impact
      </h2>
      
      
    </div>
    <div className='w-full flex justify-center'><div className="grid grid-cols-1 md:grid-cols-3 w-[87%] gap-8">
        {impactItems.map((item, index) => (
          <div key={index} className="flex items-start p-3 sm:p-4">
            <div className="flex-shrink-0 mr-3 sm:mr-4">
              <img src={item.icon} className="w-8 h-8 sm:w-10 sm:h-10"/>
            </div>
            <p className="text-slate-600 text-lg">{item.title}</p>
          </div>
        ))}
      </div>
      </div>
   </>
  );
};

export default ImpactSection;