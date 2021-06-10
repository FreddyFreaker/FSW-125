/* eslint-disable no-undef */
import {useState} from 'react'

function AddBountyForm({addBounty}){
        const initialInputs = {
            FirstName: '',
            LastName: '',
            Worth: '',
            Type: ''
        };
        const [inputs, setInputs] = useState(initialInputs);

        const handleChange = (e) => {
            const {name, value} = e.target
            setInputs(prevInputs => ({...prevInputs, [name]: value}))
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            addBounty(inputs)
            setInputs(initialInputs)
        }

        
     return(   
        <form onSubmit={handleSubmit}>
            
            <input
            type = 'text'
            name= 'FirstName'
            value= {inputs.Name}
            onChange={handleChange}
            placeholder= 'FirstName'
            />
            <br></br>
            <input
            type = 'text'
            name= 'LastName'
            value= {inputs.LastName}
            onChange={handleChange}
            placeholder= 'LastName'
            />
            <br></br>
            <input
            type = 'text'
            name= 'Type'
            value=  {inputs.Type}
            onChange={handleChange}
            placeholder='Type'
            />
            <br></br>
            <input
            type = 'number'
            name= 'Worth'
            value= {inputs.Worth}
            onChange={handleChange}
            placeholder='Worth'
            />
            <button>Add Bounty</button>
        </form>


     )
}


export default AddBountyForm;