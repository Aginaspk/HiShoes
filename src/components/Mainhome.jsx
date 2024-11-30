import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/tori.png'
function Mainhome() {



    return (
        <>







            <div className='mb-5 '>
                <div className='flex flex-col relative 2xl:static 2xl:flex-row '>
                    <div className='w-full h-[60vh] absolute z-20 top-20 2xl:static 2xl:w-1/2 2xl:h-[90vh] 2xl:bg-[#f6f6f6] 2xl:z-0 '>
                        <div className='2xl:w-[500px] 2xl:mt-64'>
                            <div className='w-full 2xl:ml-28'>
                                <h1 className='h1 text-4xl text-center'>Nike Court Vision Low Next Nature</h1>
                            </div>
                            <p className='p text-xl ml-3 mt-4 2xl:ml-40'>MRP : ₹4,999.00</p>
                        </div>
                        <div className='text-xl flex ml-3 mt-4 2xl:ml-40'>
                            <i><FontAwesomeIcon icon={faGenderless} className='mr-1' /></i>
                            <p className='mr-10'>Men</p>
                            <i><FontAwesomeIcon icon={faTape} className='mr-1' /></i>
                            <p>7,8,9,10,11</p>

                        </div>
                        <div className='text-xl mt-52 ml-24 2xl:ml-72 2xl:mt-10'>
                            <button className='bg-[#eee8e8] rounded-lg py-5 px-20 '>Details</button>
                        </div>
                    </div>
                    <div className='w-full h-[60vh] z-10 2xl:static 2xl:w-1/2 2xl:h-[90vh] bg-[#f6f6f6] flex justify-center'>
                        <img src={nike} alt="" className='h-[95%] w-[95%] object-contain mt-24 overflow-hidden' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mainhome