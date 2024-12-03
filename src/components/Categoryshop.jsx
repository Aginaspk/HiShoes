import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';



function Categoryshop() {

    const Navigate = useNavigate();
    const naviagteToCategory = ( value, category)=>{
        Navigate('/shoes',{state:{value,category}});
    }
    return (
        <>
            <div className='flex flex-col mb-5'>
                <div className=' mt-5 pb-4 px-4 flex justify-between'>
                    <h1 className='h1 text-xl 2xl:pl-10'>Shop By Category</h1>
                    <h1 className='h1 text-xl flex  items-baseline hover:scale-110 transition-[1s] duration-500 2xl:pr-10 cursor-pointer' onClick={()=>naviagteToCategory("All","gender")}>Shop All<FontAwesomeIcon className='ml-1 text-sm text-black/70' icon={faArrowRight} /></h1>

                </div>
                <div className='w-full 2xl:flex 2xl:justify-between'>
                    <div className='w-full h-[50vh] relative text-lg mb-2 2xl:w-2/5  2xl:h-[70vh] 2xl:ml-14 rounded-sm'>
                        <h1 className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl hover:scale-125 transition-[1s] duration-500'>For him</h1>
                        <h1 className=' absolute bottom-5 right-5 hover:scale-110 transition-[1s] duration-500 cursor-pointer' onClick={()=>naviagteToCategory("Male","gender")}>View more<FontAwesomeIcon className='pl-2' icon={faArrowRight} /></h1>
                        <img src='https://ludic.life/cdn/shop/files/1_12b50717-5cf8-4501-b9cf-08d2c307c0bb.jpg?v=1711691354%20w' alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-[50vh] relative text-lg 2xl:w-2/5 2xl:h-[70vh] 2xl:mr-14 rounded-sm'>
                        <h1 className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl hover:scale-125 transition-[1s] duration-500'>For her</h1>
                        <h1 className=' absolute bottom-5 right-5 hover:scale-110 transition-[1s] duration-500 cursor-pointer'   onClick={()=>naviagteToCategory("Female","gender")}>View more<FontAwesomeIcon className='pl-2' icon={faArrowRight} /></h1>
                        <img src='https://ludic.life/cdn/shop/files/2_c4822769-5545-46ec-851e-dc7a13671f85.jpg?v=1711691353%20w' alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </>
    )
}

export const Categoryshops = React.memo(Categoryshop);