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
        setItems([{ label: 'League' }])
      else {
        console.log(location)
      }
    };
    path();
  }, [location]);
  const home = { icon: 'pi pi-home', url: '/BadmintonLeague/' }
  return (
    <header>
      <h1>Badminton League</h1>
      <BreadCrumb model={items} home={home} />
    </header>
  )
}

export default Header
