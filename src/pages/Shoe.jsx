import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbars } from '../components/Navbar';
import { Footers } from '../components/Footer';

function Shoe() {
    const {id} = useParams();
  return (
    <>
        <div>Shoe is {id}</div>
 
    </>
  )
}

export default Shoe