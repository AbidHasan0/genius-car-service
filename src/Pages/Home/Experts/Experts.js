import React from 'react';
import expert1 from '../../../Images/experts/expert-1.jpg'
import expert2 from '../../../Images/experts/expert-2.jpg'
import expert3 from '../../../Images/experts/expert-3.jpg'
import expert4 from '../../../Images/experts/expert-4.jpg'
import expert5 from '../../../Images/experts/expert-5.jpg'
import expert6 from '../../../Images/experts/expert-6.png'
import Expert from '../Expert/Expert';



const Experts = () => {

   const experts = [
      { id: 1, name: 'will smith', img: expert1 },
      { id: 2, name: 'will jack', img: expert2 },
      { id: 3, name: 'will teen', img: expert3 },
      { id: 4, name: 'will josef', img: expert4 },
      { id: 5, name: 'will milta', img: expert5 },
      { id: 6, name: 'will bravo', img: expert6 },
   ];

   return (
      <div>
         <h1 className='text-primary text-center mt-5'>Our Experts</h1>
         <div className='row'>
            {
               experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
            }
         </div>
      </div>
   );
};

export default Experts;