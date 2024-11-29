import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/nike.png'
function Mainhome() {
    return (
        <>
            <div className=' '>
                <div className='flex flex-col relative 2xl:static 2xl:flex-row '>
                    <div className='w-full h-[50vh] absolute z-10 top-20 2xl:static 2xl:w-1/2 2xl:h-[90vh] 2xl:bg-[#f6f6f6] 2xl:z-0 '>
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
                        <div className='text-xl mt-64 ml-24 2xl:ml-72 2xl:mt-10'>
                            <button className='bg-[#e3ddd8] rounded-lg py-5 px-20 '>Details</button>
                        </div>
                    </div>
                    <div className='w-full h-[70vh]  z-0 2xl:static 2xl:w-1/2 2xl:h-[90vh]'>
                        <img src={nike} alt="" className='h-full w-full object-cover' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mainhome