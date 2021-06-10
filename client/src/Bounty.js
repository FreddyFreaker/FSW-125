

function Bounty({deleteBounty ,FirstName,LastName,Type,Worth, _id}) {
    console.log()
    
    
    return (
        <div className='bounty'>
          <h1>Name: {FirstName} {LastName}</h1>
          <h2>Faction: {Type}</h2>
          <h3>Worth: {Worth}</h3>
          <button className='delete-btn' onClick={deleteBounty}>Delete</button>
        </div>
    )
}

export default Bounty