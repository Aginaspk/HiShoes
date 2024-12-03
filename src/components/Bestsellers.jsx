import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Bestsellers({ shoes }) {
    const bestSeller = shoes.filter((item) => (item.id <= 5));
    return (
        <>
            <div className='mb-5'>
                <div className='flex justify-between mt-5 pb-4 px-8 2xl:px-14'>
                    <h1 className='h1 text-xl '>Best Sellers</h1>
                    <h1 className='h1 text-xl flex  items-baseline hover:scale-110 transition-[1s] duration-500'>View More<FontAwesomeIcon className='ml-1 text-sm text-black/70' icon={faArrowRight} /></h1>
                </div>
                <div className='flex flex-col items-center'>

                    <div className='grid grid-cols-1 gap-10  2xl:grid-cols-5 '>
                        {bestSeller.map((item, index) => {
                            return (<Link to={`/viewshoe/${item.name}`}>

                                <div key={index} className='hover:scale-110 transition-[1s] duration-500'>

                                    <div className='bg-[#f6f6f6] h-[350px] w-[350px] 2xl:h-[250px] 2xl:w-[250px] rounded-sm '>
                                        <img src={item.url} alt="" className='w-full h-full object-cover rounded-sm bg-[#f6f6f6]' />
                                    </div>
                                    <p>{item.shortName} ({item.gender})</p>
                                    <h1 className='h1 font-semibold'>{item.price}</h1>
                                </div>

                            </Link>


                            )})}

                    </div>
                </div>
            </div>


        </>
    )
}

export const Bestsellerss = React.memo(Bestsellers);