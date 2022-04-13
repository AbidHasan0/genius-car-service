import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
   const navigate = useNavigate();

   const navigateLogin = () => {
      navigate('/login')
   }

   const handleRegister = event => {
      const event = preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

   }

   return (
      <div>
         <h2 className='text-center'>Please Register</h2>
         <form onSubmit={handleRegister} className='register-form'>
            <input type="name" name="name" placeholder="Your Name" />
            <br />
            <input type="email" name="email" id="" placeholder='Your Email' />
            <br />
            <input type="password" name="password" id="" placeholder='Your password' />
            <br />
            <input type="submit" value="Register" />
            <p>Already have an account?? <Link className='text-decoration-none pe-auto' to="/login" onClick={navigateLogin}>Please Login</Link></p>


         </form>
      </div>
   );
};

export default Register;