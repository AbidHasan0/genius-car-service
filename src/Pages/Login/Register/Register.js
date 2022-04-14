import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"





const Register = () => {
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

   const navigate = useNavigate();

   const navigateLogin = () => {
      navigate('/login')
   }

   if (user) {
      navigate('/');
   }

   const handleRegister = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(name, email, password);

      createUserWithEmailAndPassword(email, password);




   }

   return (
      <div className='register-form'>
         <h2 className='text-center'>Please Register</h2>
         <form onSubmit={handleRegister}>
            <input type="name" name="name" placeholder="Your Name" />
            <br />
            <input type="email" name="email" id="" placeholder='Your Email' />
            <br />
            <input type="password" name="password" id="" placeholder='Your password' />
            <br />
            <input type="submit" value="Register" />

         </form>
         <p>Already have an account?? <Link className='text-decoration-none pe-auto' to="/login" onClick={navigateLogin}>Please Login</Link></p>
      </div>
   );
};

export default Register;