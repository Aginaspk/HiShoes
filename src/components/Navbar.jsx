import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <>
            <div className='container w-[100%] flex justify-between bg-[#e3ddd8]'>
                <div className='flex list-none'>
                    <li className='max-sm:border-0 max-sm:px-2 text-2xl py-[10px] px-10 border-r-[1px] border-black logo'>HiShoes</li>
                    <li className='max-sm:hidden listStyle border-r-[1px] border-black'>Shop All</li>
                    <li className='max-sm:hidden listStyle border-r-[1px] border-black'>Male</li>
                    <li className='max-sm:hidden listStyle border-r-[1px] border-black'>Female</li>
                </div>
                <div className='flex max-sm:justify-between'>
                    <div className='flex relative rightList max-sm:px-0'>
                        <input type="text" placeholder='Seacrh...' className=' pl-1 pr-8 rounded-sm max-sm:pr-6 max-sm:w-36 max-md:w-72' />
                        <i className='flex items-center'><FontAwesomeIcon icon={faSearch} className=' absolute right-8 max-sm:right-1'/></i>
                    </div>
                    <div className='flex rightList'>
                        <i><FontAwesomeIcon icon={faUser} className='px-2 max-sm:px-1' /></i>
                        <p>Login</p>
                    </div>
                    <i className='rightList'><FontAwesomeIcon icon={faBagShopping} /></i>


                </div>
            </div>
        </>
    )
}

export default Navbar