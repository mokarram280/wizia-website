import React from 'react';

const Companies = [
    {Images:'BackHub logo.svg'},
    {Images:'CableLabs logo.svg'},
    {Images:'DBS logo.svg'},
    {Images:'EasyEuro logo.svg'},
    {Images:'AMD logo.svg'},
]

function Trusted() {
  return (
    <section className='bg-[#07292F] py-6 space-y-6'>
        <h4 className='text-2xl text-[#0FF1F6] text-center uppercase'>our trusted partners</h4>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {
                Companies.map((item,i)=>(
                    <div key={i} className='flex items-center justify-center'>
                        <img src={item.Images} alt="" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Trusted;