import React from 'react';
import './Service.css'

const Service = ({ service }) => {
   const { name, price, description, img } = service
   return (
      <div className='service-container'>
         <img classname='w-100' src={img} alt="" />
         <h1>Name:{name}</h1>
         <h3>Price:{price}</h3>
         <p>Description:{description}</p>
         <button className='btn btn-primary'>Book:{name}</button>

      </div>
   );
};

export default Service;