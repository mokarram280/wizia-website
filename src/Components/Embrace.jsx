import { Button } from '@mui/material';
import React from 'react';
import { LuArrowUpRightSquare } from "react-icons/lu";

const BtnStyle = {
    fontSize:'12px',textTransform:'capitalize',color:'black',borderRadius:'20px',fontWeight:'bold','&.MuiButton-contained':{backgroundColor:'#0FF1F6'}
}

function Embrace() {
  return (
    <section className='py-16 px-12'>
        <div className='text-center space-y-6'>
            <h5 className='text-md md:text-xl text-[#0FF1F6]'>GET STARTED</h5>
            <h3 className='text-3xl md:text-4xl text-white italic max-w-52 md:max-w-none mx-auto'>Embrace <span className='font-semibold not-italic text-nowrap md:text-wrap'>the new era of</span> outbound.</h3>
            <p className='text-md text-gray-400 max-w-lg mx-auto'>Wizia lets you train, activate, and optimize aiDRs. <br /> Take your outbound to new levels of performance and efficiency.</p>
            <Button variant='contained' size='large' sx={BtnStyle} endIcon={<LuArrowUpRightSquare size={15} />}>Sign Up for the Beta</Button>
        </div>
    </section>
  )
}

export default Embrace;