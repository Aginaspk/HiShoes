import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PaymentSection = () => {

    const navigate = useNavigate();



    const [selectedPayment, setSelectedPayment] = useState("Cash on Delivery")

    const paymentOption = ["Cash on Delivery", "Upi", "Card"]

    const selectedPaymentOption = (option) => {
        setSelectedPayment(option);
    }



    




    return (
        <div className="flex">
            <div className="w-full text-center">
                <h2 className="text-2xl">Choose Your Payment Method</h2>
                <div className="flex flex-col items-center ">
                    {paymentOption.map((item, index) => {
                        return (
                            <>
                                <button onClick={() => selectedPaymentOption(item)} className={`w-[90%] h-20 my-4 text-xl ${selectedPayment === item ? 'bg-black text-white' : 'bg-white text-black'}`} >{item}</button>
                            </>
                        )
                    })}
                </div>
                <div className="">
                    
                </div>
            </div>
            <div>
            </div>

        </div>
    );
};



export default PaymentSection;
