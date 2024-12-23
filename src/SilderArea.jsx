import React, { useState } from 'react';
import { IoMdArrowRoundForward,IoMdArrowRoundBack } from "react-icons/io";

function SilderArea() {
    const Sliders =[
        {
            id:'1',
            text:'Teaching is demanding, requiring preparation, assessment, and sometimes extracurricular involvement. A good teacher dedicates time and effort to ensure their students success.',
            names:'Jhon Doe',
            position:'Chief Strategy Officer @ Company'
        },
        {
            id:'2',
            text:'A good teacher is deeply passionate about their subject and the art of teaching. This enthusiasm inspires students to engage with the material and fosters a love for learning',
            names:'Eshan',
            position:'Chief Strategy Officer @ Hablu-programmer Company'
        },
        {
            id:'3',
            text:'A good teacher is a lifelong learner, continuously seeking professional development to improve their skills and stay updated with advances in their field',
            names:'Tutul',
            position:'Co-founder Strategy Officer @ Hablu-programmer Company'
        }
    ];

    const slides = ["Slide1 ", "Slide 2", "Slide 3"];

        const [currentIndex, setCurrentIndex] = useState(0);
        const prev = ()=>{
            setCurrentIndex((index)=> (index === 0 ? Sliders.length - 1 : index -1 ));
        }
        const next = ()=>{
            setCurrentIndex((index)=> (index === Sliders.length - 1 ? 0 : index + 1));
        }

    const {text,names,position} = Sliders[currentIndex];

  return (
    <section className='py-16 px-12'>
        <div className='flex items-center justify-center mb-12 animate-pulse'>
           <img className='w-16' src="Group 9.svg" alt="" />
        </div>
        <div className='text-center space-y-4 relative'>
            <h3 className='text-2xl md:text-3xl lg:text-3xl text-white max-w-4xl mx-auto'>{text}</h3>
            <h4 className='text-primary text-xl md:text-2xl font-bold'>{names}</h4>
            <p className='text-gray-400 md:text-md'>{position}</p>
            <div>
                <button className='hidden md:flex absolute left-10 top-10 bg-[#96ACAF33] p-1 rounded-lg text-gray-400 hover:text-primary transition duration-300' onClick={prev}><IoMdArrowRoundBack size={25} /></button>
                <button className='hidden md:flex absolute right-10 top-10 bg-[#96ACAF33] p-1 rounded-lg text-gray-400 hover:text-primary transition duration-300' onClick={next}><IoMdArrowRoundForward size={25} /></button>
            </div>
            <div className='flex justify-center gap-3'>
                  {slides.map((_, index) => (
                     <button
                         key={index}
                         onClick={() => handleDotClick(index)}
                         className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-slate-800"}`} >
                     </button>
                    ))}
            </div>;
        </div>
    </section>
  )
}

export default SilderArea;