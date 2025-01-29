import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import api from '../api/get';

function Products({browse}) {
  const [products, setProducts] = useState([]);
  const [filtered,setFiltered] = useState([])

  useEffect(() => {
    api.get(`Shoes`)
      .then(response => {
        const products = response.data;
        setProducts(products);
      }).catch(err => {
        console.error(err);
      });
  }, []);
  useEffect(()=>{
    if(browse === "all"){
      setFiltered(products)
    }else{
      const filters = products.filter(product => product.gender === browse)
      setFiltered(filters)
    }
  },[browse,products])

  const deleteShoe = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };


  return (
    <div className='flex flex-col items-center pl-3 2xl:pl-14 py-20 z-0 2xl:ml-[15%] '>
      <h1 className='text-4xl 2xl:my-14 '>Products</h1>
      <div className='grid grid-cols-2 gap-5 2xl:gap-10  2xl:grid-cols-4 '>
        {filtered.map((item, index) => (
          <Card key={item.id} deleteShoe={deleteShoe} id={item.id} imgs={item.imgurl1} name={item.shortName} />
        ))}
        <Link to={`/addProduct`}>
          <div className='bg-[#d6d1d1]/50 h-44 w-44 2xl:h-[250px] 2xl:w-[250px] rounded-sm text-9xl text-black/50 flex justify-center items-center'>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Products;
