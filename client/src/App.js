/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

import './App.css'
import axios from 'axios'
// eslint-disable-next-line
import {useState, useEffect} from 'react'
import Bounty from './Bounty'
import BountyFormHandler from './BountyFormHandler'


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
  
  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => {
          setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
      axios.put(`/bounties/${bountyId}`,updates)
        .then(res => {
          setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data ))
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {getBounties()}, [])


  const bountyList = 
    bounties.map(bounty => 
    <Bounty 
    {...bounty} 
    deleteBounty={deleteBounty}  
    editBounty={editBounty}
    key={bounty._id}/>)



  return (
    <div className="bounties-container">
          <BountyFormHandler 
          btnText= 'Add Bounty'
          submit={addBounty}/>
          {bountyList}
    </div>
  )

}

export default App
