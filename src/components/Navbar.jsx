import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <>
            <div className='w-full flex justify-between fixed z-30 bg-[#eee8e8] bg-opacity-50'>
                <div className='flex list-none ml-3'>
                    <li className='text-2xl py-[10px] border-black logo'>HiShoes</li>
                    <li className='leftList'>Shop All</li>
                    <li className='leftList'>Male</li>
                    <li className='leftList'>Female</li>
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

export default Navbar