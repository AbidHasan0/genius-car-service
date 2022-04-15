import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
   const [agree, setAgree] = useState(false);
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
   const [updateProfile, updating, updateError] = useUpdateProfile(auth);

   const navigate = useNavigate();

   const navigateLogin = () => {
      navigate('/login')
   }

   // if (user) {
   //    navigate('/');
   // }

   const handleRegister = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      // const agree = event.target.terms.checked;

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      alert('Updated profile');
      navigate('/')

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
            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Terms and Condition</label>
            <br />
            <input
               disabled={!agree}
               className='w-50 mx-auto btn btn-primary'
               type="submit"
               value="Register" />

         </form>
         <p>Already have an account?? <Link className='text-decoration-none pe-auto' to="/login" onClick={navigateLogin}>Please Login</Link></p>
         <SocialLogin></SocialLogin>
      </div>
   );
};

export default Register;