
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data);

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);

      // Check if login was successful
      if (result.success) {
        // Show success message
        setLoginSuccess(true);

        // Redirect to the products page after a brief delay
        setTimeout(() => {
          navigate('/products');
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {loginSuccess && <p>Login successful!</p>}
      <form className='form' onSubmit={handleSubmit}>
        
          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required placeholder='Enter username'
          />
           <br/>
           <br/>
       
       
          
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Enter password'
          />
          <br/>
          <br/>
       
        <button className="btn" type="submit">
          <Link to="/products">Login</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


