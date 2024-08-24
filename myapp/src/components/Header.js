import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Header = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const path = async () => {
      if (location.pathname.startsWith('/league/'))
        setItems()
      else if (location.pathname.startsWith('/session/'))
        setItems([{ label: 'League', url: '/BadmintonLeague/league/' }])
      else {
        console.log(location)
      }
    };
    path();
  }, [location]);
  const home = { icon: 'pi pi-home', url: '/BadmintonLeague/' }
  return (
    <header className='col-12 md:col-6 m-auto p-0'>
      <h1 className='text-center'>Badminton League</h1>
      <BreadCrumb model={items} home={home} className='border-none px-1'/>
    </header>
  )
}

export default Header
