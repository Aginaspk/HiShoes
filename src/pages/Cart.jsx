import React, { useEffect, useState } from 'react'
import api from '../api/get'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const user = localStorage.getItem('loginUser');
    const userData = JSON.parse(user);

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [ordersId, setOrdersId] = useState([]);


    useEffect(() => {
        api.get(`users/${userData.id}`)
            .then(response => {
                const user = response.data;
                console.log(response.data)
                setCartItems(user.usercart);
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching data');
                setLoading(false);
            });

            api.get('orders')
            .then(response => {
                setOrdersId(response.data.length);
            }).catch(err => {
                console.error(err);
            });


    }, []);



    const incrementQty = (itemId) => {
        const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, qty: Number(item.qty) + 1, totalPrice: Number(item.totalPrice) + Number(item.rs) } : item
        );
        setCartItems(updatedCart);

        api.patch(`users/${userData.id}`, {
            usercart: updatedCart
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    };
    const decrementQty = (itemId) => {
        const updatedCart = cartItems.map(item =>
            item.id === itemId && item.qty > 1 ? { ...item, qty: Number(item.qty) - 1, totalPrice: Number(item.totalPrice) - Number(item.rs) } : item
        );
        setCartItems(updatedCart);

        axios.patch(`users/${userData.id}`, {
            usercart: updatedCart
        }).catch(err => {
            console.error(err);
        });
    };

    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);

        api.patch(`users/${userData.id}`, {
            usercart: updatedCart
        }).catch(err => {
            console.error(err);
        });
    };

    const placeOrder = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            navigate('/')
            return; 
        }


        const order = {
            id: ordersId + 1,
            userId: userData.id,
            items: cartItems,
            totalAmount: cartItems.reduce((total, item) => {
                const price = Number(item.price) || 0;
                const qty = Number(item.qty) || 0;
                return total + price * qty;
            }, 0)
        }

        api.post(`orders`, order)
            .then(response => {
                console.log(response)
                alert("Order placed");
                const updatedCart = [];
                setCartItems(updatedCart);
                api.patch(`users/${userData.id}`, {
                    usercart: updatedCart,
                }).catch(err => {
                    console.error(err);
                });
            })
            .catch(err => {
                console.error(err);
            });
            navigate('/')

    }



    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='w-full pt-16 min-h-[75vh] flex mb-2 2xl:items-start 2xl:flex-row flex-col relative'>
            <div className='mb-30 grid grid-cols-1  gap-5 2xl:w-[70%] '>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => {
                        return (
                            <div key={index} className='w-full min-h-[25vh] pt-4 flex  bg-[#d6d1d1]/50 justify-between 2xl:items-center 2xl:static relative'>
                                <div className='2xl:flex flex'>
                                    <div className='w-[150px] h-[150px] ml-4'><img src={item.imgurl1} alt="" className='w-full h-full object-cover' /></div>

                                    <div className='ml-5'>
                                        <h1 className='text-2xl py-1'>{item.shortName}</h1>
                                        <h1 className='text-2xl py-1'>{item.price}</h1>
                                        <div className='flex  justify-between items-center py-3'>
                                            <button className='w-7 h-7  bg-black text-white ' onClick={() => decrementQty(item.id)} >-</button>
                                            <p className='text-2xl'>{item.qty}</p>
                                            <button className='w-7 h-7  bg-black text-white border-0' onClick={() => incrementQty(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className=' 2xl:flex 2xl:items-center 2xl:justify-center 2xl:static bottom-0 w-full absolute text-2xl text-center mr-5 bg-black  text-white 2xl:w-52 2xl:h-20 2xl:rounded-3xl  cursor-pointer hover:text-blue-500 mt-14 2xl:mt-0 ' onClick={() => removeItem(item.id)}>Remove item</div>
                            </div>
                        )
                    })
                ) : <h1 className='text-center text-2xl'>Your Cart is Empty</h1>}
            </div>
            <div className=' 2xl:w-[25%] h-auto px-5 bg-[#d6d1d1] 2xl:ml-10 mx-2 2xl:mx-0 my-3 2xl:my-0'>
                {cartItems.length > 0 ?
                    (cartItems.map((item, index) => {
                        return (
                            <div className='flex justify-between px-5' key={index}>
                                <h1 className='text-lg py-5'>{item.shortName}({item.qty})</h1>
                                <h1 className='text-lg py-5'>₹ {item.totalPrice}.00</h1>
                            </div>)
                    })
                    ) : <div></div>}
                <hr />
                <div className='py-3 flex justify-between'>
                    <h1>Total Amount</h1>
                    <h1>₹ {cartItems.reduce((a, item) => {
                        const price = Number(item.rs)
                        const qty = Number(item.qty)
                        return a + price * qty;

                    }, 0)}.00</h1>
                </div>
            </div>
            {cartItems.length > 0 ? (
                <div className='w-full absolute bg-[#d6d1d1] h-[15vh] bottom-0 flex 2xl:justify-end justify-center items-center '>
                <div className='w-60 h-20 rounded-2xl bg-black text-white flex text-2xl justify-center items-center cursor-pointer' onClick={placeOrder}>Place Oder</div>
                <div className='2xl:ml-24'></div>
            </div>
            ):<div></div>}
            

        </div>
    )
}

export default Cart