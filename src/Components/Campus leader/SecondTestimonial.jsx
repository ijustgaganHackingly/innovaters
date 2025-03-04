import React from 'react'

const SecondTestimonial = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto p-8 bg-white">
  <h1 className="text-[36px] leading-[44px] text-[#475467] font-semibold text-center mt-16 mb-16">
    Enjoy Exclusive Perks
  </h1>
  <div className='w-full flex justify-center '>
  <div className="grid grid-cols-1 md:grid-cols-3 w-[85%]  gap-4">
    {/* Get Rewarded Card */}
    <div className="bg-gradient-to-t from-[#f4f1ff] to-[#f4f1ff00] rounded-lg py-6 px-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Get Rewarded</h2>
      <p className="text-sm text-gray-600 mb-6">Earn cash vouchers and exclusive benefits as you make a difference.</p>
      <div className="mt-0 flex  justify-center">
        <img src="../../../public/rewards.png" alt="Trophy icons" className="h-48" />
      </div>
    </div>
    
    {/* Middle Column with Two Cards */}
    <div className="flex flex-col gap-4">
      {/* Scholarship Card */}
      <div className="bg-gradient-to-t from-[#f4f1ff] to-[#f4f1ff00] rounded-lg  flex flex-col justify-evenly h-1/2 p-6">
        <div>
          <h2 className="text-lg font-semibold ">Scholarship Opportunities</h2>
          <p className="text-sm text-gray-600">Stand out and get rewarded<br/> for your hard work.</p>
        </div>
        <div className="flex justify-end mt-0">
          <img src="../../../public/scholarship.png" alt="Graduation cap" className="h-20" />
        </div>
      </div>
      
      {/* Early Access Card */}
      <div className="bg-gradient-to-t from-[#f4f1ff] to-[#f4f1ff00] rounded-lg p-6 flex items-center justify-between h-1/2">
        <img src="../../../public/early access.png" alt="Calendar" className="h-24" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold mb-2">Early Access to events</h2>
          <p className="text-sm text-gray-600">Be the first to know about upcoming opportunities.</p>
        </div>
      </div>
    </div>
    
    {/* Internship Card */}
    <div className="bg-gradient-to-t from-[#f4f1ff] to-[#f4f1ff00] rounded-lg p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Internship Opportunities</h2>
      <p className="text-sm text-gray-600 mb-6">Get to work with top MNCs and open doors to rewarding career paths.</p>
      <div className="mt-0 flex items-end justify-center">
        <img src="../../../public/intrenship.png" alt="Briefcase" className="h-44" />
      </div>
    </div>
  </div>
  </div>
  
</div>
    </div>
  )
}

export default SecondTestimonial
