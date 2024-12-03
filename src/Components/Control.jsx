import React from 'react'

function Control() {
    const Lists = [
        {
            img:'ph_magic-wand-duotone.svg',
            title:"You're in Control",
            description:'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.'
        },
        {
            img:'ph_graph-duotone.svg',
            title:'Infinitely Scalable',
            description:'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.'
        },
        {
            img:'ph_arrows-out-cardinal-duotone.svg',
            title:'Incredibly Flexible',
            description:'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'
        },
    ];
  return (
    <section className='py-6 md:py-16 px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                Lists.map((items,i)=>(
                    <div key={i} className='space-y-3'>
                        <img className='w-8 md:w-10 animate-bounce' src={items.img} alt="" />
                        <h3 className='text-lg md:text-2xl font-semibold text-white'>{items.title}</h3>
                        <p className='text-md md:text-lg text-gray-400 md:max-w-72'>{items.description}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Control;