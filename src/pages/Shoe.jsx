import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { Navbars } from '../components/Navbar'

function Shoe() {
  const { id } = useParams();
  return (
    <>
    <Navbars/>
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
          <h1 className='text-3xl mb-2'>₹ 4 995.00</h1>
          <div className='flex mb-2'>
          <h1 className='text-2xl mr-7'><FontAwesomeIcon className='pr-2' icon={faGenderless}/>Men</h1>
          <h1 className='text-2xl'><FontAwesomeIcon className='pr-2' icon={faTape}/>7,8,9</h1>
          </div>
          <h1 className='text-4xl mb-2'>Nike Air Jordan</h1>
          <h1 className='text-xl text-left'>Nike aire jordan bla bal blaa gdf ytrytrhy</h1>
        </div>
        <div className='flex'>
          <div className='text-xl w-1/2 h-[10vh] fixed bottom-0 left-0 bg-[#eee8e8] flex items-center justify-center border-r-2 border-black '>Buy</div>
          <div className='w-1/2 text-lg h-[10vh] fixed bottom-0 right-0 bg-[#eee8e8] flex items-center justify-center'>Add to Cart</div>
        </div>

      </div>

    </>
  )
}

export default Shoe