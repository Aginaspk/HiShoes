import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
import nike from '../images/nike.png'
function Mainhome() {
    return (
        <>
            <div className='flex max-sm:flex-col-reverse'>
                <div className='w-1/2 h-screen max-sm:w-full max-sm:h-[70vh] '>
                    <div className='mt-72 ml-20 max-sm:mt-36 max-sm:ml-10'>
                        <div className='w-[500px] max-sm:w-[400px]'>
                            <h1 className='h1 text-5xl text-center'>Nike Court Vision Low Next Nature</h1>
                        </div>
                        <p className='p ml-4 text-xl mt-10'>MRP : ₹4,999.00</p>
                    </div>
                    <div className='text-xl flex ml-24 mt-5 max-sm:ml-12'>
                        <i><FontAwesomeIcon icon={faGenderless} className='mr-1' /></i>
                        <p className='mr-10'>Men</p>
                        <i><FontAwesomeIcon icon={faTape} className='mr-1' /></i>
                        <p>7,8,9,10,11</p>

                    </div>
                    <div className='text-xl ml-60 mt-10 max-sm:ml-32'>
                        <button className='bg-[#e3ddd8] px-20 py-3 rounded-lg'>Details</button>
                    </div>
                </div>
                <div className='w-1/2 h-screen max-sm:w-full max-sm:h-[70vh]'>
                    <img src={nike} alt="" className='h-full w-full object-cover' />
                </div>
            </div>
        </>
    )
}

export default Mainhome