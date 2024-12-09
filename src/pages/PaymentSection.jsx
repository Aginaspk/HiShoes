import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PaymentSection = () => {

    const navigate = useNavigate();



    const [selectedPayment, setSelectedPayment] = useState("Cash on Delivery")

    const paymentOption = ["Cash on Delivery", "Upi", "Card"]

    const selectedPaymentOption = (option) => {
        setSelectedPayment(option);
    }



    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Card Payment Details:', formData);
        alert('Order Placed');
        navigate('/')

    };




    return (
        <div className="flex">
            <div className="w-[30%] pl-10">
                <h2 className="text-3xl">Choose Your Payment Method</h2>
                <div className="flex flex-col ">
                    {paymentOption.map((item, index) => {
                        return (
                            <>
                                <button onClick={() => selectedPaymentOption(item)} className={`w-72 h-40 text-xl ml-16 mt-10 ${selectedPayment === item ? 'bg-black text-white' : 'bg-white text-black'}`} >{item}</button>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="w-[70%]">
                {selectedPayment === "Card" ? <div className="pt-32">
                    <div className="max-w-md mx-auto p-6  rounded-md">
                        <h2 className="text-lg font-bold text-black mb-4">Card Payment</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="cardholderName"
                                    className="block text-sm font-medium text-black"
                                >
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    name="cardholderName"
                                    id="cardholderName"
                                    value={formData.cardholderName}
                                    onChange={handleChange}
                                    placeholder="Enter cardholder name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="cardNumber"
                                    className="block text-sm font-medium text-black"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    id="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    maxLength="16"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="expiryDate"
                                    className="block text-sm font-medium text-black"
                                >
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    name="expiryDate"
                                    id="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    placeholder="MM/YY"
                                    maxLength="5"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="cvv"
                                    className="block text-sm font-medium text-black"
                                >
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    name="cvv"
                                    id="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    placeholder="123"
                                    maxLength="3"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-black hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm">
                                Order Now
                            </button>
                        </form>
                    </div>
                </div> :


                    selectedPayment === "Cash on Delivery" ?

                        <div className="mt-60 w-[500px] ml-60">

                            <form onSubmit={handleSubmit}>
                                <button
                                    type="submit"
                                    className="w-full text-xl h-56 px-4 py-2 text-white bg-black hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm">
                                    Order Now
                                </button>
                            </form>
                        </div>




                        :

                        <div className="mt-60 w-[500px] ml-60">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label

                                        className="block text-sm font-medium text-black">
                                        Upi Id
                                    </label>
                                    <input
                                        type="email"
                                        name="upi"
                                        id="upi"
                                        placeholder="Enter Upi id"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-black hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm">
                                    Order Now
                                </button>
                            </form>

                        </div>


                }
            </div>

        </div>
    );
};



export default PaymentSection;
