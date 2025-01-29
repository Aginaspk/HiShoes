import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Products from '../components/Products'
import UsersList from './UsersList'
import ViewUser from './ViewUser'
import ViewOrders from './ViewOrders'

function Admin() {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [whichOpen, setWhichOpen] = useState(false)
  const [browseProduct,setBrowseProduct] = useState("all");
  const [dash,setDash] = useState("products")
  const toggleOpen = (val) => {
    setWhichOpen(val)
    setIsOpen(!isOpen)
  }
  const logoutAdmin = () => {
    localStorage.clear();
    alert("Logout Succesfully")
    navigate('/',{ replace: true });
}
  const openSideBar = () => {
    setIsSideOpen(!isSideOpen)
  }
  return (
    <div className='relative 2xl:static flex overflow-hidden'>

      {/* nav */}
      <div className='w-full flex justify-between fixed z-50 bg-[#d6d1d1]'>
        <div className='flex list-none ml-3'>
          <Link to={'/'}><li className='text-2xl py-[10px] border-black logo'>HiShoes</li></Link>
        </div>
      </div>


      <div className=' 2xl:hidden absolute w-full flex justify-end text-4xl px-5 z-50 top-20'>{!isSideOpen ? <FontAwesomeIcon onClick={openSideBar} icon={faBars} /> : <FontAwesomeIcon onClick={openSideBar} icon={faX} />}</div>
      <div className={`2xl:fixed  2xl:w-[20%] 2xl:bg-[#d6d1d1]   2xl:pt-40 w-full top-0 absolute bg-[#f6f6f6] h-screen  z-30 pt-20 transition-all duration-[1s] ease-in-out overflow-hidden ${!isSideOpen ? "translate-x-full 2xl:translate-x-0" : "translate-x-0"} `}>
        <h1 className='2xl:text-xl 2xl:pl-5 text-3xl text-left mb-5 pb-5 border-b-2 mx-5 2xl:font-semibold'>DASHBOARD</h1>
        <div>
          <h1 className='2xl:text-lg text-2xl flex justify-between py-5 px-10 ' onClick={() => toggleOpen('products')}>Products <FontAwesomeIcon className={isOpen && whichOpen === "products" ? "rotate-180 transition-all duration-[1s] ease-in-out" : "rotate-0 transition-all duration-[1s] ease-in-out"} icon={faAngleDown} /></h1>
          <div className={`overflow-hidden transition-all duration-[1s] ease-in-out ${isOpen && whichOpen === "products" ? "max-h-[500px]" : "max-h-0"}`}>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10 cursor-pointer'  onClick={()=>{setDash("products");setBrowseProduct("all");}} >Shoes </h1>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10 cursor-pointer' onClick={()=>{setDash("products");setBrowseProduct("Male")}}>Men </h1>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10 cursor-pointer'  onClick={()=>{setDash("products");setBrowseProduct("Female")}}>Woman </h1>

          </div>
        </div>
        <div>
          <h1 className='2xl:text-lg text-2xl flex justify-between py-5 px-10' onClick={() => toggleOpen('users')}>Users <FontAwesomeIcon className={isOpen && whichOpen === "users" ? "rotate-180 transition-all duration-[1s] ease-in-out" : "rotate-0 transition-all duration-[1s] ease-in-out"} icon={faAngleDown} /></h1>
          <div className={`overflow-hidden transition-all duration-[1s] ease-in-out ${isOpen && whichOpen === "users" ? "max-h-[500px]" : "max-h-0"}`}>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10' onClick={()=>setDash("user")}>Users List </h1>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10' onClick={()=>setDash("orders")} >Oders </h1>

          </div>
        </div>
        <div>
          <h1 className='2xl:text-lg text-2xl flex justify-between py-5 px-10' onClick={() => toggleOpen('sales')}>Sales <FontAwesomeIcon className={isOpen && whichOpen === "sales" ? "rotate-180 transition-all duration-[1s] ease-in-out" : "rotate-0 transition-all duration-[1s] ease-in-out"} icon={faAngleDown} /></h1>
          <div className={`overflow-hidden transition-all duration-[1s] ease-in-out ${isOpen && whichOpen === "sales" ? "max-h-[500px]" : "max-h-0"}`}>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10'>Oders</h1>
            <h1 className='2xl:text-lg text-2xl text-center py-5 px-10'>Revenue</h1>

          </div>
          <h1 className='2xl:text-lg text-2xl text-center py-5 px-10 cursor-pointer' onClick={logoutAdmin}>Logout</h1>


        </div>
      </div>
      <div className='w-full'>
        {dash === "products" ? <Products browse={browseProduct}/> : dash === "user" ? <UsersList/> : <ViewOrders/>}

        
      </div>
    </div>
  )
}

export default Admin