import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBoxOpen, faCartShopping, faPhone, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

function User() {
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        alert("Logout Succesfully")
        navigate('/', { replace: true });
    }
    return (
        <div className='pt-16'>
        
            <div className='p-10'>
                <div className='grid grid-cols-2 gap-10'>
                    <Link to={'/orders'}>
                    <div className='flex flex-col justify-center items-center w-full h-32 bg-[#d6d1d1]/50'>
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <h1>Orders</h1>
                    </div>
                    </Link>
                    
                    <Link to={'/cart'}>
                        <div className='flex flex-col justify-center items-center w-full h-32 bg-[#d6d1d1]/50'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <h1>Cart</h1>
                        </div>
                    </Link>


                    <div className='flex flex-col justify-center items-center w-full h-32 bg-[#d6d1d1]/50 '>
                        <FontAwesomeIcon icon={faPhone} />
                        <h1>Help Center</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-32 bg-[#d6d1d1]/50'>
                        <FontAwesomeIcon icon={faUser} />
                        <h1>Profile</h1>
                    </div>

                    <div className='w-full col-[1/3] cursor-pointer'>
                        <div className='flex flex-col justify-center items-center w-full h-32 bg-[#d6d1d1]/50 cursor-pointer' onClick={logoutUser}>
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <h1>Logout</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default User