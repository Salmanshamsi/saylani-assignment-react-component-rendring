import React from 'react'
import { useState } from 'react'

const Room = () => {

    const [mode,setMode] = useState(true);
    const [daytemp,setDayTemp] = useState(22);
    const [nighttemp,setnightTemp] = useState(32);

    return (
    <div>

      <div className={`z-50 ${mode?"bg-yellow-50 text-gray-900 ":"bg-slate-900 text-white"} flex justify-center fixed top-0 w-full`}>
        <h1 className='w-52 h-20 flex items-center  justify-center p-5 shadow-sm ' >
            <span className='me-5'>
                <i class="fa-solid fa-temperature-high fa-2xl"></i>
            </span>
            Room Temprature
        <span className='text-3xl ml-5 '>{mode?daytemp:nighttemp}°C</span></h1>
        <div className='flex flex-col justify-center items-center gap-5' >
            <button 
            onClick={()=>{mode?setDayTemp(daytemp+1):setnightTemp(nighttemp+1)}}
            className='flex items-center justify-center' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button>
            <button
            onClick={()=>{mode?setDayTemp(daytemp-1):setnightTemp(nighttemp-1)}}
            className='  flex items-center justify-center' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </button>
        </div>
      </div>

        <div className={`  h-screen md:p-24 z-50 ${mode?"bg-slate-800":"bg-yellow-50"} flex items-center justify-center flex-col g-4`}>
            <div className='mb-10'>
                {
                    
                    mode?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-44 h-44 ${mode ?"text-white" : "text-gray-800" }`}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>:
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-44 h-44 ${mode ?"text-white" : "text-gray-800" }`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                }
            </div>
            <div>
                <button onClick={()=>{
                    if(!mode){
                        setMode(true);
                    }}} className='bg-slate-900 text-lg text-white text-center h-10 w-20 rounded-lg shadow-xl me-5 hover:shadow'>OFF</button>
                <button onClick={()=>{if(mode){
                        setMode(false);
                    }}} className='text-slate-900 text-lg bg-yellow-50 text-center h-10 w-20 rounded-lg shadow-lg  hover:shadow'>ON</button>
            </div>
        </div>

      </div>
  )
}

export default Room


