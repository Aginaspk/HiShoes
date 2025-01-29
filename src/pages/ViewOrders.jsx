import React, { useEffect, useState } from 'react'
import api from '../api/get'

function ViewOrders() {

    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([])
    const [orderItems, setOrderItems] = useState([])

    useEffect(() => {
        api.get(`users`)
            .then(response => {
                const users = response.data;
                setUsers(users);
            }).catch(err => {
                console.error(err);
            });

        api.get(`orders`)
            .then(response => {
                const orders = response.data;
                setOrders(orders);
                const filterItem = orders.map((item) => item.items);
                setOrderItems(filterItem)
                console.log(filterItem);

            }).catch(err => {
                console.error(err);
            });

    }, []);


    return (
        <div className='mt-10'>

            <div className="overflow-x-auto 2xl:ml-[20%] 2xl:px-5  py-20">
            <h1 className='text-4xl 2xl:mt-14 mb-10 '>Orders</h1>

                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Price</th>
                            <th>Ordered by</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {orders.map((item, index) => {
                            return orders[index].items.map((val, i) => {
                                return (
                                    <tr key={index}>
                                    

                                        <td className='py-3'>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12 ">
                                                        <img
                                                            src={val.imgurl1}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{val.name} x {val.qty}</div>
                                                    <div className="text-sm opacity-50">{val.brand}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center py-3'>
                                            {val.totalPrice}
                                        </td>
                                        <td className='text-center py-3'>
                                            {users.find(user => user.id === item.userId)?.name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{users.find(user => user.id === item.userId)?.email}</span>
                                        </td>
                                        <td className='text-center py-3'>Shipped</td>
                                        <th className='py-3'>
                                            <button className="w-28 h-11 bg-black text-white">Status</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }

                        )}

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default ViewOrders