import React from 'react';
import google from '../../../Images/social/google.png';
import github from '../../../Images/social/github.png';
import facebook from '../../../Images/social/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

   const navigate = useNavigate();
   let errorElement = '';

   if (error || error1) {
      errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


   }

   if (user || user1) {
      navigate('/')
   }



   return (
      <div>
         <div className='d-flex align-items-center'>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
         </div>
         {errorElement}
         <div>
            <button
               onClick={() => signInWithGoogle()}
               className='btn btn-info d-block mx-auto w-50 my-3'>
               <img src={google} alt="" />
               <span className='px-2'>Google Signin</span>
            </button>
            <button

               className='btn btn-info d-block mx-auto w-50 my-3'>
               <img src={facebook} alt="" />
               <span className='px-2'>Facebook Signin</span>
            </button>
            <button
               onClick={() => signInWithGithub()}
               className='btn btn-info d-block mx-auto w-50 my-3'>
               <img src={github} alt="" />
               <span className='px-2'>Github Signin</span>
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;