import React from 'react'

function About() {
  return (
    <div>
    <div className="main h-full bg-blue-900 brightness-75 font-serif flex items-center py-12 ">
    <div className="div md:flex justify-around ">
        <div className="left md:w-[50%] w-full px-5 lg:w-[40%]">
           <div className="div bg-blue-300/30 hover:bg-blue-400/30  hover:translate-y-1 rounded-xl shadow-xl border-b-2 border-r-2 ">
           <img src="/img/img2.jpg" alt="" className='p-12 ' />
           </div>
        </div>
        <div className="right md:w-[50%] px-5  mt-3 lg:w-[40%]  ">
            <h1 className="text-3xl text-white font-semibold">About</h1>
            <h2 className='text-4xl text-white mt-6 font-bold'>I'am Dhiraj kumar tiwari</h2>
            <h3 className='text-xl text-white mt-2' >Studying my second year in Computer Science Engineering at Uttaranchal University, Dehradun located in India. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting the world through my work delightful.</h3>
            <button className=' mt-5 px-4 py-1 bg-blue-300/30 text-xl text-gray-300 rounded-md border-b-2 font-bold '>GITHUB <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-right ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button>
        </div>
    </div>

    </div>
      
    </div>
  )
}

export default About
