import React, { useEffect, useState } from 'react'
import { Mainhomes } from "../components/Mainhome"
import { Bestsellerss } from "../components/Bestsellers"
import { Categoryshops } from "../components/Categoryshop"
import useFetchShoes from '../customhooks/useFetchShoes'
function Home() {
    const { data: shoes, loading, error } = useFetchShoes('Shoes')



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <>
            <Mainhomes shoes={shoes} />
            <Bestsellerss shoes={shoes} />
            <Categoryshops />
        </>
    )
}

export default Home