import React from 'react'

const AboutStartup = () => {
  return (
    <div className='bg-white py-10 px-4 max-w-screen-xl mx-auto '>
    <div className='flex flex-col items-center'>
        <h2 className='font-[500] text-2xl md:text-3xl'>Who Are We?</h2>
        <h3 className='text-gray-500 pt-2 font-medium text-center'>One startup can lead to a world of possibilities</h3>
    </div>
    <div className='flex flex-col pt-12 w-full items-center lg:flex-row lg:max-w-screen-xl mx-auto justify-between overflow-hidden'>
        <div className='py-6 w-full lg:w-[48%] flex justify-center item-center '>
            <div className='h-48 w-[300px] relative bg-gray-400 sm:h-96 sm:w-[500px]'>
                <img src='/640-500.png' className='h-48 w-[300px] absolute top-[-15px] right-[-15px] bg-gray-300 sm:h-96 sm:w-[500px]'/>
            </div>
        </div>
        <div className='sm:pb-10 text-lg text-center  xl:w-[48%] md:text-left text-gray-500 lg:w-2/5 lg:text-left'>
            <p>With our startup community, we offer a platform where both large-scale and early stage startups can connect, collaborate and explore exciting networking opportunities.</p><br/>
            <p>Whether you are seasoned player or just starting, get your place to network, share ideas, and unlock new possibilities for growth!</p>
        </div>
    </div>
</div>
  )
}

export default AboutStartup
// import React from 'react';

// const AboutStartup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 py-16 md:py-24">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//           Who Are <span className="relative">
//             We?
//             <img src='../../../public/brush stroke.svg' className="absolute bottom-0 left-0 w-full "/>
//           </span>
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-600 mt-2">
//           One startup can lead to a world of possibilities
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-center w-full mt-6 gap-8">
//         <div className="w-full md:w-1/2 relative">
//           <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//           <div className="absolute -bottom-4 -left-4 w-full h-full bg-gray-300 rounded-lg -z-10"></div>
//         </div>

//         <div className="w-full md:w-1/2 mt-12 md:mt-0 space-y-6">
//           <p className="text-gray-600 text-base md:text-lg">
//             With our startup community, we offer a platform where both large-scale and early
//             stage startups can connect, collaborate and explore exciting networking
//             opportunities.
//           </p>
          
//           <p className="text-gray-600 text-base md:text-lg">
//             Whether you are a seasoned player or just starting, get your place to network, share
//             ideas, and unlock new possibilities for growth!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutStartup;
