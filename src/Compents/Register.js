import React, { useState } from 'react'
import "./Register.css"
function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const[number ,SetNumber]= useState('')
    const[userName, SetUserName]= useState('')
  
    function handleSubmit(e) {
      e.preventDefault();
  
      console.log('Name:', name);
      console.log('Password:', password);
  
      setName('');
      setPassword('');
      setEmail('');
      SetNumber('');
      SetUserName('');
    }
  
    return (
      <div className="login-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />

    <input
          type="Email"
          placeholder="Enter your Email"
          value={password}
          onChange={(e) => setEmail(e.target.value)}

        />


     <input
          type="UserName"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => SetUserName(e.target.value)}

        />


     <input
          type="Number"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => SetNumber(e.target.value)}

        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
export default Register

