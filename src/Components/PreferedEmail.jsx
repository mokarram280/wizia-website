import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

function PreferedEmail() {
    const Info = [
        {line:'Quick to ramp'},
        {line:'Easy to optimize'},
        {line:'Quick to scale up'},
        {line:'Works with all your existing tools'},
    ]
  return (
    <section className='bg-[url(BG.svg)] bg-no-repeat bg-cover flex flex-col items-center justify-center py-8 md:py-16 mx-8 md:mx-12 rounded-2xl'>
        <div className='text-center md:text-start space-y-3'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>Train your aiDR on your...</h3>
            <h4 className='text-[#0FF1F6] text-xl md:text-2xl lg:text-3xl italic'>prefered email st/</h4>
            <p className='text-gray-400 text-md max-w-72'>You&apos;re in control. Train your aiDR on elements of your Marketing strategy.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 ms-20 mt-10 space-y-3 text-[#0FF1F6]'>
                {
                    Info.map((all,i)=>(
                        <div key={i} className='flex items-center gap-2'>
                            <FaRegCircleCheck />
                            <h5>{all.line}</h5>  
                        </div>
                    ))
                }
            </div>
    </section>
  )
}

export default PreferedEmail;