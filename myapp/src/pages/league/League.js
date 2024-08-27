import React, { useState } from 'react'
import { Button } from 'primereact/button';
import CreateSession from '../session/CreateSession'

const League = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <p>League Leaderboard</p>
      <Button label="Session" icon="pi pi-plus" onClick={()=>{setVisible(true)}}/>
      <CreateSession visible={visible} setVisible={setVisible}/>
    </div>
  )
}

export default League
