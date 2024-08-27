import React, { useState } from 'react'
import { Button } from 'primereact/button';
import CreateLeague from '../league/CreateLeague';

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <p>home</p>
      <Button label="League" icon="pi pi-plus" onClick={()=>{setVisible(true)}}/>
      <CreateLeague visible={visible} setVisible={setVisible}/>
    </div>
  )
}

export default Home
