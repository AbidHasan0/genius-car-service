import React from 'react';
import notfound from "../../Images/notfound.jpg"

const NotFound = () => {
   return (
      <div>
         <h2 className='text-primary text-center '>Mechanic is slepping</h2>
         <img className='w-100' src={notfound} alt="" />
      </div>
   );
};

export default NotFound;