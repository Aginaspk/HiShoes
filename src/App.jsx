import { Footers } from './components/Footer.jsx';
import { Navbars } from './components/Navbar.jsx';
import api from './api/get.js'
import { useEffect, useState } from "react"
import { Outlet } from 'react-router-dom';

import { createContext } from 'react';

export const AppContext = createContext();
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
  }, [])

  return (
    <>
      <AppContext.Provider value={shoes}>

        <Navbars />
        <Outlet />
        <Footers />
      </AppContext.Provider>



    </>
  )
}

export default App
