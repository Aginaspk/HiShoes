import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/nike.png'

function Categoryshop() {
    return (
        <>
            <hr />
            <div className='flex flex-col'>
                <div className=' mt-5 pb-4 pl-4'>
                    <h1 className='h1 text-xl'>Shop By Category</h1>
                </div>
                <div className='w-full'>
                    <div className='w-full h-[50vh] relative text-lg mb-2'>
                        <h1 className=' absolute top-5 left-5'>For him</h1>
                        <h1 className=' absolute bottom-5 right-5'>View more<FontAwesomeIcon className='pl-2' icon={faArrowRight} /></h1>
                        <img src={nike} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-[50vh] relative text-lg'>
                        <h1 className=' absolute top-5 left-5'>For her</h1>
                        <h1 className=' absolute bottom-5 right-5'>View more<FontAwesomeIcon className='pl-2' icon={faArrowRight}  /></h1>
                        <img src={nike} alt="" className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categoryshop