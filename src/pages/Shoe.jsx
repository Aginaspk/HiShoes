import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'

function Shoe() {
  const { id } = useParams();
  return (
    <>
      <div>
        <div className='flex pt-20'>

          <div className='w-[80%] flex justify-center'>

            <div className='w-[300px] h-[300px] bg-black mt-2 ' >
              <img src="" alt="" />
            </div>
          </div>
          <div className=' h-[40vh] w-[20%] flex flex-col items-center'>
            <div className='shoeGrid'></div>
            <div className='shoeGrid'></div>
            <div className='shoeGrid'></div>
            <div className='shoeGrid'></div>
          </div>

        </div>
        <div className='pl-3'>
          <h1 className='text-3xl'>₹ 4 995.00</h1>
          <div className='flex'>
          <h1 className='text-2xl mr-7'><FontAwesomeIcon className='pr-2' icon={faGenderless}/>Men</h1>
          <h1 className='text-2xl'><FontAwesomeIcon className='pr-2' icon={faTape}/>7,8,9</h1>
          </div>
          <h1 className='text-4xl'>Nike Air Jordan</h1>
          <h1 className='text-xl'>Nike aire jordan bla bal blaa gdf ytrytrhy</h1>
        </div>

      </div>

    </>
  )
}

export default Shoe