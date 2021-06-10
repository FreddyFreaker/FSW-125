import {useState} from 'react'
import BountyFormHandler from './BountyFormHandler'

function Bounty({deleteBounty, editBounty ,FirstName,LastName,Type,Worth, _id}) {
    console.log()
    
    const [editToggle, setEditToggle] = useState(false)
    
    return (
        <div className='bounty'>
          {!editToggle?
            <>
          <h1>Name: {FirstName} {LastName}</h1>
          <h2>Faction: {Type}</h2>
          <h3>Worth: {Worth}</h3>
          <button 
          className='delete-btn' onClick={() => deleteBounty(_id)}>Delete</button>
          <button className='edit-btn' onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
          </>
          
          :

          <>
          <BountyFormHandler
            FirstName={FirstName}
            LastName={LastName}
            Type={Type}
            Worth={Worth}
            _id={_id}
            btnText='Submit Edit'
            submit={editBounty}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
          
        
        </>
        }
        </div>
    )
}

export default Bounty

//{btnText}