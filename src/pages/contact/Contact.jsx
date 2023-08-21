import React from 'react'
import Layout from '../../components/layout/Layout'

function Contact() {
  return (
    <Layout>
         <div>
            <div className="main h-screen flex justify-center items-center  "> 
             <div className="div px-8 md:w-2/4 lg:w-1/2 ">
               <div className="child bg-gray-950 rounded-t-xl py-6 shadow-xl brightness-90 border-2 border-gray-500  ">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-20 m-auto h-18 border-2 rounded-full border-gray-900 bg-slate-50">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" /></svg>
                 <h1 className='py-2 text-center text-xl font-semibold text-white '>Contact Me</h1>
               </div>
               <div className="inputsection px-4 h-fit pb-5 bg-slate-300 rounded-b-xl shadow-xl brightness-75 border-b-2 border-gray-500 border-r-2 border-l-2">
                   <div className="main">
                    <input type="text" placeholder='Full Name' className='w-full mt-5 py-2 rounded-md outline-none pl-5 shadow-md bg-gray-100 text-black ' />
                    <input type="email" name="mail" id="mail" className='shadow-md w-full mt-5 py-2 rounded-md outline-none pl-5' placeholder='Email' />
                    <textarea placeholder='Message... ' className='shadow-md mt-5 outline-none w-full h-24 pl-5 pt-2 rounded-md' name="text" id="massage" cols="30" rows="10"></textarea>
                    <button className='w-full shadow-md bg-blue-600 mt-7 py-2 rounded-md text-white font-bold '>Send Message</button>
                   </div>
               </div>
             </div>
             </div>
         </div>
    </Layout>

  )
}

export default Contact
