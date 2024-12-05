import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




function Navbar() {

    const Navigate = useNavigate();
    const [serachInput, setSearchInput] = useState('');

    const handleFilter = (value, category) => {
        Navigate('/shoes', { state: { value, category } });
    }
    const getSearchInput = (e) => {
        setSearchInput(e.target.value.toLowerCase());
        console.log(serachInput);

    }
    const seacrhNavigate = (e) => {
        e.preventDefault();
        const category = "brand";
        const value = serachInput;
        Navigate('/shoes', { state: { value, category } });
    }
    const isLogin = () =>{
        const user = localStorage.getItem('loginUser');
        if(user){
            const userData = JSON.parse(user);
            if(userData.role === "user"){
                Navigate('/user')
            }else{
                Navigate('/admin')
            }
        }else{
            Navigate('login');
        }
    }
    return (
        <>
            <div className='w-full flex justify-between fixed z-30 bg-[#d6d1d1] bg-opacity-50'>
                <div className='flex list-none ml-3'>
                    <Link to={'/'}><li className='text-2xl py-[10px] border-black logo'>HiShoes</li></Link>
                    <li className='leftList' onClick={() => handleFilter("All", "gender")}>Shop All</li>
                    <li className='leftList' onClick={() => handleFilter("Male", "gender")}>Male</li>
                    <li className='leftList' onClick={() => handleFilter("Female", "gender")}>Female</li>
                </div>
                <div className='flex'>
                    <div className='flex relative py-[10px] mr-3'>
                        <form action="" onSubmit={seacrhNavigate}>
                            <input type="text" placeholder='Seacrh...' className=' pl-1 pr-5 rounded-sm w-40 outline-none mt-1' onChange={getSearchInput} />
                            <button className=' absolute right-1 pt-2' type='submit'> <i className='flex items-center'><FontAwesomeIcon icon={faSearch} /></i></button>
                        </form>
                    </div>

                    <div className='flex py-[15px] mr-3 cursor-pointer' onClick={isLogin}>
                        <i><FontAwesomeIcon icon={faUser} className='px-2' /></i>
                        <p>User</p>
                    </div>

                    <Link to={'/cart'}>
                    <div className='py-[15px] mr-3'>
                        <i><FontAwesomeIcon icon={faBagShopping} /></i>
                    </div>
                    </Link>



                </div>
            </div>
        </>
    )
}

export const Navbars = React.memo(Navbar);