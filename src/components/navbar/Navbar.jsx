import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="main flex justify-between font-serif items-center px-6 md:px-12 lg:px-20 bg-blue-950  h-16 shadow-xl  border-b-2  w-full z-10">
        <div className="left">
            <h1 className='text-3xl cursor-pointer text-white font-bold'>Portfolio</h1>
        </div>
        <div className="right ">
            <ul className='md:flex hidden space-x-5 text-xl text-white'>
               <Link to={"/"}> <li className='cursor-pointer transition-all ease-in-out hover:scale-110'>Home</li></Link>
               <Link to={'/blog'}> <li className='cursor-pointer transition-all ease-in-out hover:scale-110'>Blog</li></Link>
               <Link to={'/about'}> <li className='cursor-pointer transition-all ease-in-out hover:scale-110'>Gallery</li></Link>
               <Link to={'/contact'}> <li className='cursor-pointer transition-all ease-in-out hover:scale-110'>Contact</li></Link>
            </ul>
            <div className="div md:hidden">
               {!toggle?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(true)} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-9 w-9 brightness-75 bg-slate-100 rounded-md">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(false)} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 bg-slate-100 rounded-md brightness-75 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
}  

            </div>
        </div>
      </div> 
      {toggle?
        <ul className='text-xl text-white bg-blue-800/40 w-full font-serif pl-3 mt-16 fixed z-10'>
          <Link to={'/'} ><li className='cursor-pointer hover:translate-y-1 p-2'>Home</li></Link>
           <Link to={'/blog'}> <li className='cursor-pointer hover:translate-y-1 p-2'>Blog</li></Link>
            <Link to={'/gallery'}> <li className='cursor-pointer hover:translate-y-1 p-2'>Gallery</li></Link>
             <Link to={'/contact'}> <li className='cursor-pointer hover:translate-y-1 p-2'>Contact</li> </Link>
        </ul>:null}
    </div>
  )
}

export default Navbar
