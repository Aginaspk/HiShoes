import Mainhome from "./components/Mainhome"
import Navbar from "./components/Navbar"
import Bestsellers from "./components/Bestsellers"
import Categoryshop from "./components/Categoryshop"
import Social from "./components/Social"
import api from './api/get.js'
import { useEffect, useState } from "react"
function App() {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    const getShoes = async () => {
      try {
        const response = await api.get('/Shoes')
        setShoes(response.data)
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }
    getShoes();
  },[])

  return (
    <>
      <Navbar shoes={shoes} />
      <Mainhome shoes={shoes} />
      <Bestsellers shoes={shoes} />
      <Categoryshop shoes={shoes} />
      <Social shoes={shoes} />


    </>
  )
}

export default App
