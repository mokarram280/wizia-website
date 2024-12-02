import React from 'react'

function Footer() {
  return (
    <footer className='bg-secondary'>
        <div className='flex flex-col sm:flex-row items-center justify-between space-y-2 py-6 mx-12'>
            <img className='w-20' src="Logowhite.svg" alt="" />
            <p className='text-gray-400 text-base'>Copyright © 2023 Wizia. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;