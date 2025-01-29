import React, { useEffect } from 'react'
import { useState } from 'react';
import api from '../api/get'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
    const {id} = useParams();
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const Navigate = useNavigate()

    const [updateProduct, setUpdateProduct] = useState({})
    useEffect(() => {

        api.get(`Shoes/${id}`)
            .then(response => {
                const products = response.data;
                const checked = products.gender;
                setSelectedCheckbox(checked)
                setUpdateProduct(products)
            }).catch(err => {
                console.error(err);
            });
    }, []);
    const handleCheckboxChange = (id) => {
        setSelectedCheckbox(id);
        setUpdateProduct({ ...updateProduct, gender: id })
    };

    const updateProductToDb = (e) => {
        const { name, value } = e.target;
        setUpdateProduct({ ...updateProduct, [name]: value })
    }
    const publishUpdatedProduct = (e) => {
        e.preventDefault();
        console.log(updateProduct);

        api.patch(`Shoes/${id}`,updateProduct)
            .then(response => {
                console.log(response.data);
                alert('Product Updated Successfully')
                Navigate('/admin',{replace:true})
                
            })
            .catch(err => {
                console.error(err);
            });

    }
    return (
        <div>
            <div className='px-8 w-full '>
                <form action="" className='' onSubmit={publishUpdatedProduct}>
                    <div className='2xl:w-full 2xl:flex'>
                        <div className='mt-5 2xl:w-1/2 2xl:px-20'>
                            <h1 className='text-xl mt-10'>Genaral Information</h1>

                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Name</label>
                                <input onChange={updateProductToDb} name='name' value={updateProduct.name} type="text" className='h-12 rounded-xl px-3' placeholder='Enter Full Name..' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Short Name</label>
                                <input onChange={updateProductToDb} name='shortName' value={updateProduct.shortName} type="text" className='h-12 rounded-xl px-3' placeholder='Enter Short Name..' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Brand</label>
                                <input onChange={updateProductToDb} name='brand' value={updateProduct.brand} type="text" className='h-12 rounded-xl px-3' placeholder='Enter Brand:Nike,Adidas.. ' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Sale Price</label>
                                <input onChange={updateProductToDb} name='price' value={updateProduct.price} type="text" className='h-12 rounded-xl px-3' placeholder='₹00.00' />
                            </div>
                            <div className='py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Gender</label>
                                <div className='flex justify-between 2xl:justify-start'>
                                    <div className={`2xl:mr-10 w-40 h-12 rounded-xl pl-3 text-left  flex ${selectedCheckbox === "Male" ? "bg-[#d6d1d1]" : "bg-white"} items-center  `}>
                                        <p>Male</p>
                                        <input
                                            name='gender'
                                            value='Male'
                                            type="checkbox"
                                            className='appearance-none h-12 w-full checked:bg-[#d6d1d1] rounded-e-xl'
                                            checked={selectedCheckbox === "Male"}
                                            onChange={() => handleCheckboxChange("Male")} />
                                    </div>
                                    <div className={`w-40 h-12 rounded-xl pl-3 text-left ${selectedCheckbox === "Female" ? "bg-[#d6d1d1]" : "bg-white"} flex items-center`}>
                                        <p>Female</p>
                                        <input
                                            name='gender'
                                            value='Female'
                                            type="checkbox"
                                            className='appearance-none h-12 w-full checked:bg-[#d6d1d1] rounded-e-xl'
                                            checked={selectedCheckbox === "Female"}
                                            onChange={() => handleCheckboxChange("Female")} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Sizes</label>
                                <input onChange={updateProductToDb} name='sizes' value={updateProduct.sizes} type="text" placeholder='Eg: 7,6,8' className='h-12 rounded-xl px-3' />
                            </div>

                        </div>
                        <div className='my-5 2xl:w-1/2 2xl:mt-5 2xl:px-20'>
                            <h1 className='text-xl 2xl:mt-10 2xl:mb-12'>Product Images</h1>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 1</label>
                                <input onChange={updateProductToDb} name='imgurl1' value={updateProduct.imgurl1} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 2</label>
                                <input onChange={updateProductToDb} name='imgurl2' value={updateProduct.imgurl2} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 3</label>
                                <input onChange={updateProductToDb} name='imgurl3' value={updateProduct.imgurl3} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 4</label>
                                <input onChange={updateProductToDb} name='imgurl4' value={updateProduct.imgurl4} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>

                            <div className='mt-10 w-full flex justify-evenly items-center'>
                                <Link to={'/admin'}><button className='w-40 h-12 bg-[#d6d1d1] rounded-xl  '>Cancle</button></Link>
                                <button className='w-40 h-12 bg-[#d6d1d1] rounded-xl' type='submit'>Update</button>
                            </div>
                        </div>

                    </div>




                </form>
            </div>
        </div>
    )
}

export default UpdateProduct