import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <>
            <div className='flex flex-col justify-between 2xl:flex-row bg-[#f6f6f6]'>
                <div className='w-full pt-5 flex  items-center px-4 justify-between border-b-2 border-black pb-5 2xl:flex-row-reverse 2xl:justify-end 2xl:pt-3 2xl:w-1/2'>

                    <div className=''>
                        <h1 className='text-xl text-left'>FIND US <br /> ON INSTAGRAM</h1>
                        <h1 className='text-lg text-left'>Stay updated on the latest <br /> trends and releases.</h1>

                    </div>
                    <div className='px-4'><FontAwesomeIcon className='text-8xl' icon={faInstagram} /></div>

                </div>
                <div className='flex justify-between px-5 py-5'>
                    <div className='2xl:px-10 '>
                        <h1 className='text-lg pb-2'>Legal</h1>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Shipping Policy</li>
                            <li>Refund Policy</li>
                            <li>Accessibility Statement</li>
                        </ul>
                    </div>
                    <div className='2xl:px-10'>
                        <h1 className='text-lg pb-2'>Social</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>X</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>)
}

export const Footers = React.memo(Footer);