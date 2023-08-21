import React from 'react'

function Hero() {
  return (
    <div>
      <div className="main h-screen bg-blue-950 flex justify-center items-center font-serif">
      <div className="main ">     
      <div className="left">
        <img src="/img/logo.png" alt="" className='rounded-full m-auto'/>
      </div>
      <div className="right">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Hi,</h1>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mt-2'>I'M DHIRAJ KUMAR <br />TIWARI</h2>
        <h3 className='text-xl md:2xl lg:text-2xl text-white mt-2'>Full Stack developer</h3>
        <a href="file:///C:/Users/hp/Downloads/Resume.pdf"><button className='px-4 py-1.5 hover:bg-blue-900 shadow-xl rounded-2xl border-2  font-semibold mt-2 text-gray-200'>MY RESUME</button> </a>
        <div className="div flex space-x-5 mt-4 ">
          <img className='h-6 rounded-xl' src="data:image/png;base64,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" alt="" />
          <img className='h-6 rounded-xl' src="data:image/png;base64,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" alt="" />
          <img className='h-6 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPmcW3idPebmXQ5xZG3OHs720u7LlrFSEg&usqp=CAU" alt="" />
          <img className='h-6 rounded-xl' src="data:image/png;base64,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" alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
