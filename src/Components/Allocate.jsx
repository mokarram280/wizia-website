import React from 'react'

function Allocate() {
    const lists = [
        {
            rate:'32%',
            improv:'Improvement in Open Rates'
        },
        {
            rate:'75%',
            improv:'Improvement in Ramp Time'
        },
        {
            rate:'35%',
            improv:'Improvement in Meetings Booked'
        }
    ];
  return (
    <section className='bg-[url(BG1.svg)] bg-no-repeat bg-cover mx-8 md:mx-16 rounded-2xl'>
        <div className='flex flex-col md:items-start items-center justify-center py-8 md:py-16 px-10 md:px-20 space-y-3 w-full text-center md:text-left'>
            <h2 className='text-2xl lg:text-3xl text-white font-semibold max-w-md'>Allocate effort where your reps make an inpact.</h2>
            <h3 className='text-2xl lg:text-3xl text-primary italic'>Let us handle the rest.</h3>
            <p className='text-gray-400 text-base md:text-md max-w-md'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
        </div>
        <div className='flex flex-col md:flex-row items-start pb-8 px-10 md:px-20 max-w-xl'>
            {
                lists.map((item,i)=>(
                    <div key={i}>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl text-primary font-bold'>{item.rate}</h2>
                        <p className='text-gray-300 max-w-48'>{item.improv}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Allocate;