import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useFetchShoes from '../customhooks/useFetchShoes';



function ShoesList() {
  const location = useLocation();
  const { value, category } = location.state;

  const { data: shoes, loading, error } = value === "All" ?
    useFetchShoes(`Shoes`) :
    useFetchShoes(`Shoes?${category}=${value}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className='flex flex-col items-center pl-2 py-20'>

        <div className='grid grid-cols-2 gap-5 2xl:gap-10  2xl:grid-cols-5 '>
          {shoes.map((item, index) => {
            return (<Link to={`/viewshoe/${item.id}`}>

              <div key={index} className='hover:scale-110 transition-[1s] duration-500'>

                <div className='bg-[#f6f6f6] h-44 w-44 2xl:h-[250px] 2xl:w-[250px] rounded-sm '>
                  <img src={item.imgurl1} alt="" className='w-full h-full object-cover rounded-sm bg-[#f6f6f6]' />
                </div>
                <p>{item.shortName} ({item.gender})</p>
                <h1 className='h1 font-semibold'>₹{item.price}.00</h1>
              </div>

            </Link>


            )
          })}

        </div>
      </div>
    </>
  )
}

export default ShoesList