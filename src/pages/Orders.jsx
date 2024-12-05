import React, { useEffect, useState } from 'react'
import api from '../api/get'

function Orders() {

    const user = localStorage.getItem('loginUser');
    const userData = JSON.parse(user);
    const [orders, setOrders] = useState([]);
    const [orderItems,setOrderItems] = useState([]);

    useEffect(() => {

        api.get(`orders?userId=${userData.id}`)
            .then(response => {
                const orders = response.data;
                setOrders(orders);
                const items = orders.map((item)=>item.items);
                setOrderItems(items)
                console.log(items);
                
                

                

            }).catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <div className='w-full pt-16 min-h-[75vh] flex mb-2 2xl:items-start 2xl:flex-row flex-col relative'>
                <div className='mb-30 grid grid-cols-1  gap-5 w-full '>
                    {orders.length > 0 ? (
                        orderItems.map((item, index) => {
                            return (
                                <div key={index} className='w-full min-h-[25vh] pt-4 flex  bg-[#d6d1d1]/5 items-start  2xl:justify-between 2xl:items-center 2xl:static relative '>
                                    <div className='2xl:flex flex'>
                                        <div className='w-[150px] h-[150px] ml-4'><img src={item[0].imgurl1} alt="" className='w-full h-full object-cover' /></div>

                                        <div className='ml-5'>
                                            <h1 className='text-2xl py-1'>{item[0].shortName} x {item[0].qty}</h1>
                                            <h1 className='text-2xl py-1'>{item[0].price}</h1>
                                        </div>

                                    </div>

                                    <div className=' 2xl:flex 2xl:items-center 2xl:justify-center 2xl:static bottom-0 w-full absolute text-2xl text-center mr-5 bg-black  text-white 2xl:w-52 2xl:h-20 2xl:rounded-3xl  cursor-pointer hover:text-blue-500 mt-14 2xl:mt-0 ' >Cancel Order</div>
                                </div>
                            )
                        })
                    ) : <h1 className='text-center text-2xl'>Your have no orders</h1>}
                </div>
            </div>
        </>
    )
}

export default Orders