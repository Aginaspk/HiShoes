import { Footers } from './components/Footer.jsx';
import { Navbars } from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Shoe from './pages/Shoe.jsx';


function App() {


  return (
    // <div className='h-screen flex flex-col justify-between'>
        <><Navbars />
          <Outlet />
        <Footers/>
        </>

    // </div>
  )
}

export default App
