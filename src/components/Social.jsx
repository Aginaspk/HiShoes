import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Social() {
    return (
        <>
            <div>
                <div className='w-full pt-5 flex'>
                    <div className='pl-5'>
                        <h1 className='text-xl text-left'>FIND US <br /> ON INSTAGRAM</h1>
                        <h1 className='text-lg text-left'>Stay updated on the latest <br /> trends and releases.</h1>
                    </div>
                    <div><FontAwesomeIcon className='text-8xl pl-12 pt-4' icon={faInstagram}/></div>
                </div>
                <div>
                    <h1>Legal</h1>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Refund Policy</li>
                        <li>Accessibility Statement</li>
                    </ul>
                </div>
                <div>
                    <h1>Social</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>X</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Social