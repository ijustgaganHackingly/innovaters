import React from 'react';

const ImpactSection = () => {
  const impactItems = [
    {
      icon: "🎮",
      title: "Promote hackingly programs and raise awareness of our events."
    },
    {
      icon: "🏛️",
      title: "Host exciting workshops and events for your campus community."
    },
    {
      icon: "📊",
      title: "Ignite campus engagement that inspires student involvement."
    },
    {
      icon: "📈",
      title: "Share insights to enhance products as a collaborative innovator."
    },
    {
      icon: "👥",
      title: "Convey Hackingly's mission to diverse audiences."
    },
    {
      icon: "📱",
      title: "Suggest ideas to boost engagement as a productive idea generator."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl text-center font-semibold text-slate-700 mb-16">
        How You'll Make an Impact
      </h2>
      
      <div className='w-full flex justify-center'><div className="grid grid-cols-1 md:grid-cols-3 w-[95%] gap-8">
        {impactItems.map((item, index) => (
          <div key={index} className="flex items-start p-4">
            <div className="bg-purple-50 rounded-lg p-3 mr-4">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <p className="text-slate-600 text-lg">{item.title}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImpactSection;