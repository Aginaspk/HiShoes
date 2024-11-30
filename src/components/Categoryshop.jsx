import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/nike.png'

function Categoryshop() {
    return (
        <>
            <div className='flex flex-col mb-5'>
                <div className=' mt-5 pb-4 pl-4'>
                    <h1 className='h1 text-xl 2xl:pl-10'>Shop By Category</h1>
                </div>
                <div className='w-full 2xl:flex 2xl:justify-between'>
                    <div className='w-full h-[50vh] relative text-lg mb-2 2xl:w-2/5  2xl:h-[70vh] 2xl:ml-14 rounded-sm'>
                        <h1 className=' absolute top-5 left-5 font-semibold'>For him</h1>
                        <h1 className=' absolute bottom-5 right-5 hover:scale-110 transition-[1s] duration-500'>View more<FontAwesomeIcon className='pl-2' icon={faArrowRight} /></h1>
                        <img src={nike} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-[50vh] relative text-lg 2xl:w-2/5 2xl:h-[70vh] 2xl:mr-14 rounded-sm'>
                        <h1 className=' absolute top-5 left-5 font-semibold'>For her</h1>
                        <h1 className=' absolute bottom-5 right-5 hover:scale-110 transition-[1s] duration-500'>View more<FontAwesomeIcon className='pl-2' icon={faArrowRight}  /></h1>
                        <img src={nike} alt="" className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categoryshop