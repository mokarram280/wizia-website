import React, { useState } from 'react';
import { LuArrowRightSquare,LuArrowLeftSquare } from "react-icons/lu";

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

        const [currentIndex, setCurrentIndex] = useState(0);
        const prev = ()=>{
            setCurrentIndex((index)=> (index === 0 ? Sliders.length - 1 : index -1 ));
        }
        const next = ()=>{
            setCurrentIndex((index)=> (index === Sliders.length - 1 ? 0 : index + 1));
        }

    const slides = ["Slide 1", "Slide 2", "Slide 3"];
    const {text,names,position} = Sliders[currentIndex];

  return (
    <section className='py-16 px-12'>
        <div className='flex items-center justify-center mb-12'>
           <img className='w-16' src="Group 9.svg" alt="" />
        </div>
        <div className='text-center space-y-4 relative'>
            <h3 className='text-2xl md:text-3xl lg:text-3xl text-white max-w-4xl mx-auto'>{text}</h3>
            <h4 className='text-[#0FF1F6] text-lg md:text-2xl font-bold'>{names}</h4>
            <p className='text-gray-400 md:text-md'>{position}</p>
            <div className=''>
                <button className='hidden md:flex absolute left-0 top-10 text-gray-400 hover:text-[#0FF1F6] transition duration-300' onClick={prev}><LuArrowLeftSquare size={30} /></button>
                <button className='hidden md:flex absolute right-0 top-10 text-gray-400 hover:text-[#0FF1F6] transition duration-300' onClick={next}><LuArrowRightSquare size={30} /></button>
            </div>
            <div className="">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToSlide(index)}
                        style={{
                            cursor: "pointer",
                            margin: "0 5px",
                            padding: "5px",
                            backgroundColor: currentIndex === index ? "#0FF1F6" : "gray",
                            borderRadius: "50%",
                        }}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default SilderArea;