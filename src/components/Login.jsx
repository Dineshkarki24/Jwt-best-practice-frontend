import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UseAuthContext } from '../hooks/useStoreToken';

const Login = () => {
    const [formData, setFormData] = useState({ name: '', password: '' })
    const handleFormChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleFormSubmit = (e) => {
e.preventDefault()
        axios.post(`http://localhost:4000/api/auth/login`,{username:formData.name,password:formData.password},{withCredentials:true}).then((res) => {
            console.log(res)            
        })
    }
    const users = useContext(UseAuthContext);
  console.log(users)
  if (users) {
    return  <Redirect to='/' />
  }
     return (
         <div className="card w-50 my-5 mx-auto">
             <div className="card-body">
                  <form action="" onSubmit={handleFormSubmit} >
         <div className="form-group">

        <input type="text" name="name" placeholder="Name" onChange={handleFormChange} value={formData.name} className="form-control"/>
         </div>
         <div className="form-group">

        <input className="form-control" type="password" onChange={handleFormChange} value={formData.password} name="password" placeholder="Name"/>
                     </div>
                     <button type="submit" className="btn btn-primary btn-sm" >Submit</button>
    </form>
             </div>
         </div>
     )

}
 
export default Login;