import React from 'react'

function Form (){
    
    const [formData, setFormData] = React.useState({firstName:"", 
            lastName:"",
            email:""}
            )
    
    console.log(formData)
    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                 [event.target.name]: event.target.value
            }
        })
    }

    
    return(
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"        
            />
            <input 
                type="text"
                placeholder='Last Name'
                onChange={handleChange}
                name="lastName"
            />
            <input
                type="email"
                placeholder='email address'
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}

export default Form