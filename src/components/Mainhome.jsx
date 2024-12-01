import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
function Mainhome({ shoes }) {

    const randomNumber = Math.floor(Math.random() * 5) + 1;

    const lastShoe = shoes.filter((item) => (item.id == randomNumber));


    return (
        <>
            {lastShoe.map((item, index) => (

                <div key={index} className='mb-5 '>
                    <div className='flex flex-col relative 2xl:static 2xl:flex-row '>
                        <div className='w-full h-[60vh] absolute z-20 top-20 2xl:static 2xl:w-1/2 2xl:h-[90vh] 2xl:bg-[#f9f9f9] 2xl:z-0 '>
                            <div className='2xl:w-[500px] 2xl:mt-64'>
                                <div className='w-full 2xl:ml-28'>
                                    <h1 className='h1 text-4xl text-center'>{item.name}</h1>
                                </div>
                                <p className='p text-xl ml-3 mt-4 2xl:ml-40'>{item.price}</p>
                            </div>
                            <div className='text-xl flex ml-3 mt-4 2xl:ml-40'>
                                <i><FontAwesomeIcon icon={faGenderless} className='mr-1' /></i>
                                <p className='mr-10'>{item.gender}</p>
                                <i><FontAwesomeIcon icon={faTape} className='mr-1' /></i>
                                <p>{item.sizes}</p>

                            </div>
                            <div className='text-xl mt-52 ml-24 2xl:ml-72 2xl:mt-10 hidden 2xl:block'>
                                <button className='bg-[#eee8e8] rounded-lg py-5 px-20 '>Details</button>
                            </div>
                        </div>
                        <div className='w-full h-[60vh] z-10 2xl:static 2xl:w-1/2 2xl:h-[90vh] bg-[#f9f9f9] flex justify-center overflow-hidden'>
                            <img src={item.url} alt="" className='h-full w-full object-cover mt-28 2xl:mt-10' />
                        </div>
                    </div>
                </div>




            ))}


        </>
    )
}

export const Mainhomes = React.memo(Mainhome)