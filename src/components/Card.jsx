import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import api from '../api/get'

function Card({ deleteShoe, id, imgs, name, key }) {

    const [isSelected, setIsSelected] = useState(false);

    const deleteProduct = () =>{
        deleteShoe(id)

        api.delete(`Shoes/${id}`)
        .then(response => {
            console.log(response);
            
        }).catch(err => {
            console.error(err);
        });
    }


    const selectedProduct = () => {
        setIsSelected(!isSelected);
    }
    return (
        <div key={key} className=' overflow-hidden z-0 ' >

            <div className='bg-[#f6f6f6] h-44 w-44 2xl:h-[250px] 2xl:w-[250px] rounded-sm relative overflow-hidden' onClick={selectedProduct}>
                <img src={imgs} alt="" className='w-full h-full object-cover rounded-sm bg-[#f6f6f6] absolute z-30' />
                <div className={` cursor-pointer text-xl text-black/90 flex justify-center items-center absolute w-[200px] h-[75px] bg-[#d6d1d1]/50 top-8 left-6 transform transition-transform duration-300 ease-in-out ${isSelected ? "translate-y-0 z-50" : "-translate-y-full z-0 bg-transparent"} `} onClick={deleteProduct}><FontAwesomeIcon icon={faTrashCan} /></div>
                <Link to={`/updateProduct/${id}`}><div className={`cursor-pointer text-xl text-black/90 flex justify-center items-center absolute w-[200px] h-[75px] bg-[#d6d1d1]/50  bottom-8 left-6 transform transition-transform duration-300 ease-in-out ${isSelected ? "translate-y-0 z-50" : "translate-y-full z-0 bg-transparent"}`}><FontAwesomeIcon icon={faPen} /></div></Link>
            </div>
            <h1 className='font-semibold'>{name}</h1>
        </div>

    )
}

export default Card