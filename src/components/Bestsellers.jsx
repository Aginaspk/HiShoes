import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/nike.png'

function Bestsellers() {

    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            <div>
                <div className='flex justify-between mt-5 pb-4 px-8 2xl:px-14'>
                    <h1 className='h1 text-xl '>Best Sellers</h1>
                    <h1 className='h1 text-xl flex  items-baseline'>View More<FontAwesomeIcon className='ml-1 text-sm text-black/70' icon={faArrowRight} /></h1>
                </div>
                <div className='flex flex-col items-center'>

                    <div className='grid grid-cols-1 gap-10  2xl:grid-cols-5 '>
                        {arr.map((item) => {
                            return (<div className='hover:scale-110 transition-[1s] duration-500 '>

                                <div key={item} className='bg-[#f6f6f6] h-[350px] w-[350px] 2xl:h-[250px] 2xl:w-[250px] '>
                                    <img src={nike} alt="" className='w-full h-full object-cover' />
                                </div>
                                <p>Nike Court Vision (Men)</p>
                                <h1 className='h1 font-semibold'>₹4,999.00</h1>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>


        </>
    )
}

export default Bestsellers