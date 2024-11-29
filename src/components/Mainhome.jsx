import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/nike.png'
function Mainhome() {
    return (
        <>
            <div className='flex flex-col relative 2xl:static 2xl:flex-row'>
                <div className='w-full h-[50vh] absolute z-10 top-20 2xl:static 2xl:w-1/2 2xl:h-screen 2xl:z-0'>
                    <div className=''>
                        <div className='w-full'>
                            <h1 className='h1 text-4xl text-center'>Nike Court Vision Low Next Nature</h1>
                        </div>
                        <p className='p text-xl ml-3 mt-4'>MRP : ₹4,999.00</p>
                    </div>
                    <div className='text-xl flex ml-3 mt-4'>
                        <i><FontAwesomeIcon icon={faGenderless} className='mr-1' /></i>
                        <p className='mr-10'>Men</p>
                        <i><FontAwesomeIcon icon={faTape} className='mr-1' /></i>
                        <p>7,8,9,10,11</p>

                    </div>
                    <div className='text-xl mt-64 ml-24'>
                        <button className='bg-[#e3ddd8] rounded-lg py-5 px-20'>Details</button>
                    </div>
                </div>
                <div className='w-full h-[70vh] absolute z-0 2xl:static 2xl:w-1/2 2xl:h-screen'>
                    <img src={nike} alt="" className='h-full w-full object-cover' />
                </div>
            </div>
        </>
    )
}

export default Mainhome