import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTape, faGenderless, faPlane, faClock, faHandshake, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { Navbars } from '../components/Navbar'
import useFetchShoes from '../customhooks/useFetchShoes'
import api from '../api/get'

function Shoe() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);
  const { data: shoe, loading, error } = useFetchShoes(`Shoes?id=${id}`)
  const [currentShoe, setCurrentShoe] = useState('imgurl1');

  const user = localStorage.getItem('loginUser');
  const userData = JSON.parse(user);



  useEffect(() => {
    api.get(`users/${userData.id}`)
      .then(response => {
        const user = response.data;
        console.log(response.data)
        setCartItems(user.usercart);
      })
      .catch(err => {
        console.log(err);

      });
  }, [userData.id]);

  const changeShoe = (shoeUrl) => {
    setCurrentShoe(shoeUrl);

  }


  const addToCart = () => {

    const isAlreadyInCart = cartItems.some(item => item.id === shoe[0].id);


    if (!isAlreadyInCart) {
      const updatedCart = [...cartItems, {...shoe[0],qty:1}];
  
      api.patch(`users/${userData.id}`, {
        usercart: updatedCart
      })
        .then(response => {
          console.log(response.data);
          setCartItems(updatedCart); 
          alert("One item added to cart");
          navigate('/');
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert("This item is already in the cart");
    }
  };

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  if (!shoe || shoe.length === 0) return <p>No data available</p>;
  return (
    <>
      <Navbars />
      <div className='2xl:flex 2xl:flex-row'>
        <div className='flex pt-20 2xl:flex-row-reverse'>

          <div className='w-[80%] flex justify-center'>

            <div className='w-[300px] h-[300px]  mt-2 2xl:w-[700px] 2xl:h-[500px]' >
              <img src={shoe[0][currentShoe]} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className=' h-[40vh] w-[20%] flex flex-col items-center'>
            <div className='shoeGrid'><img src={shoe[0].imgurl1} alt="" className='w-full h-full object-cover' onClick={() => changeShoe('imgurl1')} /></div>
            <div className='shoeGrid'><img src={shoe[0].imgurl2} alt="" className='w-full h-full object-cover' onClick={() => changeShoe('imgurl2')} /></div>
            <div className='shoeGrid'><img src={shoe[0].imgurl3} alt="" className='w-full h-full object-cover' onClick={() => changeShoe('imgurl3')} /></div>
            <div className='shoeGrid'><img src={shoe[0].imgurl4} alt="" className='w-full h-full object-cover' onClick={() => changeShoe('imgurl4')} /></div>
          </div>

        </div>
        <div className='2xl:pt-24 2xl:pl-12 2xl:flex 2xl:flex-col 2xl:justify-evenly'>
          <div className='px-3 '>
            <h1 className='text-3xl mb-2 2xl:mb-5'>{shoe[0].price}</h1>
            <div className='flex mb-2'>
              <h1 className='text-2xl mr-7 2xl:mb-5'><FontAwesomeIcon className='pr-2' icon={faGenderless} />{shoe[0].gender}</h1>
              <h1 className='text-2xl 2xl:mb-5'><FontAwesomeIcon className='pr-2' icon={faTape} />{shoe[0].sizes}</h1>
            </div>
            <h1 className='text-4xl mb-2 2xl:mb-5'>{shoe[0].shortName}</h1>
            <h1 className='text-xl text-left mb-5'>{shoe[0].name}</h1>

          </div>
          <div className=' mx-1 px-1' >
            <div className='flex justify-between py-5'>
              <h1><FontAwesomeIcon icon={faHandshake} />Cash on delivery Available</h1>
              <h1><FontAwesomeIcon icon={faRetweet} />return available</h1>
            </div>
            <div className='flex justify-between py-5'>
              <h1><FontAwesomeIcon icon={faPlane} />All Over India delivery</h1>
              <h1><FontAwesomeIcon icon={faClock} />delivery with in One week</h1>
            </div>
          </div>
        </div>

        <div className='flex fixed bottom-0 w-full'>
          <div className='text-xl w-1/2 h-[10vh]  bg-[#eee8e8] flex items-center justify-center border-r-2 border-black cursor-pointer '>Buy</div>
          <div className='w-1/2 text-lg h-[10vh]  bg-[#eee8e8] flex items-center justify-center cursor-pointer' onClick={() => addToCart()}>Add to Cart</div>
        </div>


      </div>

    </>
  )
}

export default Shoe
