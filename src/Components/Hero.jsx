import { Button } from '@mui/material';
import React from 'react';
import { LuArrowUpRightSquare } from "react-icons/lu";

const BtnStyle = {
    fontSize:'12px',textTransform:'capitalize',color:'black',borderRadius:'20px',fontWeight:'bold','&.MuiButton-contained':{backgroundColor:'#0FF1F6'}
}

function Hero() {
  return (
    <section className='bg-[url(Img.png)] bg-no-repeat bg-cover'>
        <div className='flex flex-col md:items-start items-center justify-center py-8 md:py-16 px-10 md:px-20 space-y-6 w-full text-center md:text-left'>
            <h5 className='text-[#0FF1F6] text-lg md:text-xl lg:text-2xl'>AI SDRs (aiDRs)</h5>
            <h1 className='text-5xl md:text-6xl lg:text-6xl font-bold text-white max-w-80 md:max-w-96'>More <span className='font-normal italic'>leads,</span> less <span className='font-normal italic'>people.</span></h1>
            <p className='text-md md:text-lg text-gray-400 md:max-w-md mt-4'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button variant='contained' size='large' sx={BtnStyle} endIcon={<LuArrowUpRightSquare size={15} />}>Sign Up for the Beta</Button>
        </div>
    </section>
  )
}

export default Hero;