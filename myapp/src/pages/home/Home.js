import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import CreateLeague from '../league/CreateLeague';
import { useLeagueContext } from '../../context/LeagueContext';
import { useNavigate } from 'react-router-dom';
import CardItem from '../../components/CardItem';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const {leagueContext, setLeagueContext} = useLeagueContext()
  const navigate = useNavigate()


  const handleMount = () => {
    setLeagueContext(null)
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div>
      <p>{leagueContext}</p>
      <Button label="League" size='small' icon="pi pi-plus" onClick={()=>{setVisible(true)}}/>
      <Button label="Leaguenav" icon="pi pi-plus" onClick={()=>{setLeagueContext('test');navigate('league/')}}/>
      <CreateLeague visible={visible} setVisible={setVisible}/>
      <div className="grid m-2">
        <CardItem />
      </div>
    </div>
  )
}

export default Home
