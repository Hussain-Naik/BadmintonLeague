import React, { useState } from 'react'
import { Button } from 'primereact/button';
import CreateSession from '../session/CreateSession'
import { useLeagueContext } from '../../context/LeagueContext';
import { useSessionContext } from '../../context/SessionContext';

const League = () => {
  const [visible, setVisible] = useState(false);
  const {leagueContext, setLeagueContext} = useLeagueContext()
  const {sessionContext, setSessionContext} =  useSessionContext()
  console.log(leagueContext)

  return (
    <div>
      <p>League Leaderboard {leagueContext}</p>
      <Button label="Session" icon="pi pi-plus" onClick={()=>{setVisible(true)}}/>
      <CreateSession visible={visible} setVisible={setVisible}/>
    </div>
  )
}

export default League
