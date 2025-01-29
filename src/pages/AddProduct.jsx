import React, { useEffect, useState } from 'react'
import api from '../api/get'
import { Link, useNavigate } from 'react-router-dom';




function AddProduct() {

    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [products, setProducts] = useState([]);
    const [addProduct, setAddProduct] = useState({
        name: "",
        shortName: "",
        price: "",
        gender: "",
        sizes: "",
        brand: "",
        imgurl1: "",
        imgurl2: "",
        imgurl3: "",
        imgurl4: "",
        totalPrice: ""
    })
    const navigate = useNavigate()

    useEffect(() => {

        api.get(`Shoes`)
            .then(response => {
                const products = response.data;
                setProducts(products);
            }).catch(err => {
                console.error(err);
            });
    }, []);



    const handleCheckboxChange = (id) => {
        setSelectedCheckbox(id);
        setAddProduct({ ...addProduct, gender: id })
        
    };

    const addProductToDb = (e) => {
        const { name, value } = e.target;
        const id = products.length;
        setAddProduct({ ...addProduct, [name]: value, id: id + 1,totalPrice:addProduct.price })
        console.log(addProduct);


    }
    const publishProduct = (e) => {
        e.preventDefault();
        console.log(addProduct);


        api.post(`Shoes`, addProduct)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.error(err);
            });
        navigate('/admin')
    }

    return (
        <div>
            <div className='px-8 w-full '>
                <form action="" className='' onSubmit={publishProduct}>
                    <div className='2xl:w-full 2xl:flex'>
                        <div className='mt-5 2xl:w-1/2 2xl:px-20'>
                            <h1 className='text-xl mt-10'>Genaral Information</h1>

                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Name</label>
                                <input onChange={addProductToDb} name='name' value={addProduct.name} type="text" className='h-12 rounded-xl px-3' placeholder='Enter Full Name..' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Short Name</label>
                                <input onChange={addProductToDb} name='shortName' value={addProduct.shortName} type="text" className='h-12 rounded-xl px-3' placeholder='Enter Short Name..' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Brand</label>
                                <input onChange={addProductToDb} name='brand' value={addProduct.brand} type="text" className='h-12 rounded-xl px-3' placeholder='Enter Brand:Nike,Adidas.. ' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Sale Price</label>
                                <input onChange={addProductToDb} name='price' value={addProduct.price} type="text" className='h-12 rounded-xl px-3' placeholder='₹00.00' />
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
                                <input onChange={addProductToDb} name='sizes' value={addProduct.sizes} type="text" placeholder='Eg: 7,6,8' className='h-12 rounded-xl px-3' />
                            </div>

                        </div>
                        <div className='my-5 2xl:w-1/2 2xl:mt-5 2xl:px-20'>
                            <h1 className='text-xl 2xl:mt-10 2xl:mb-12'>Product Images</h1>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 1</label>
                                <input onChange={addProductToDb} name='imgurl1' value={addProduct.imgurl1} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 2</label>
                                <input onChange={addProductToDb} name='imgurl2' value={addProduct.imgurl2} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 3</label>
                                <input onChange={addProductToDb} name='imgurl3' value={addProduct.imgurl3} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>
                            <div className='flex flex-col py-3'>
                                <label htmlFor="" className='pl-1 mb-1'>Image 4</label>
                                <input onChange={addProductToDb} name='imgurl4' value={addProduct.imgurl4} type="text" className='h-12 rounded-xl px-3' placeholder='https/:' />
                            </div>

                            <div className='mt-10 w-full flex justify-evenly items-center'>
                            <Link to={'/admin'}><button className='w-40 h-12 bg-[#d6d1d1] rounded-xl  '>Cancle</button></Link>
                            <button className='w-40 h-12 bg-[#d6d1d1] rounded-xl' type='submit'>Publish</button>
                            </div>
                        </div>

                    </div>




                </form>
            </div>
        </div>
    )
}

export default AddProduct