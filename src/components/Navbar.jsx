import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'




function Navbar() {

  const Navigate = useNavigate();

  const handleFilter = (value,category)=>{
    Navigate('/shoes',{state:{value,category}});
  }

    return (
        <>
            <div className='w-full flex justify-between fixed z-30 bg-[#d6d1d1] bg-opacity-50'>
                <div className='flex list-none ml-3'>
                    <Link to={'/'}><li className='text-2xl py-[10px] border-black logo'>HiShoes</li></Link>
                    <li className='leftList' onClick={()=>handleFilter("All","gender")}>Shop All</li>
                    <li className='leftList' onClick={()=>handleFilter("Male","gender")}>Male</li>
                    <li className='leftList' onClick={()=>handleFilter("Female","gender")}>Female</li>
                </div>
                <div className='flex'>
                    <div className='flex relative py-[10px] mr-3'>
                        <input type="text" placeholder='Seacrh...' className=' pl-1 pr-5 rounded-sm w-40 outline-none' />
                        <i className='flex items-center'><FontAwesomeIcon icon={faSearch} className=' absolute right-1' /></i>
                    </div>
                    <div className='flex py-[15px] mr-3'>
                        <i><FontAwesomeIcon icon={faUser} className='px-2' /></i>
                        <p>Login</p>
                    </div>
                    <div className='py-[15px] mr-3'>
                        <i><FontAwesomeIcon icon={faBagShopping} /></i>
                    </div>


                </div>
            </div>
        </>
    )
}

export const Navbars = React.memo(Navbar);