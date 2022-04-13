import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
   const { id, name, price, description, img } = service;
   const navigate = useNavigate();
   const navigateToServiceDetail = (id) => {
      navigate(`/service/${id}`)

   }
   return (
      <div className='service-container'>
         <img classname='w-100' src={img} alt="" />
         <h1>Name:{name}</h1>
         <h3>Price:{price}</h3>
         <p>Description:{description}</p>
         <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>

      </div>
   );
};

export default Service;