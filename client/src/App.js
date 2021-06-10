/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

import './App.css'
import axios from 'axios'
// eslint-disable-next-line
import {useState, useEffect} from 'react'
import Bounty from './Bounty'
import AddBountyForm from './AddBountyForm'


function App () {
  const [bounties, setBounties] = useState([])
  
  const getBounties = () =>{
    axios.get('/bounties')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
  }

  const addBounty = (newBounty) =>{
    axios.post('/bounties', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }
  
  const deleteBounty = (bountyID) => {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  useEffect(() => {getBounties()}, [])


  const bountyList = bounties.map(bounty => <Bounty {...bounty} deleteBounty={deleteBounty}  key={bounty._id}/>)



  return (
    <div className="bounties-container">
          <AddBountyForm addBounty={addBounty}/>
          {bountyList}
    </div>
  )

}

export default App
