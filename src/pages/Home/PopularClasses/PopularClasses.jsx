import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Topclasses from './Topclasses';
import { Fade } from 'react-awesome-reveal';

const PopularClasses = () => {

    const [axiosSecure] =useAxiosSecure();

    const {data: topClasses =[]} = useQuery(['class'], async () =>{
        const res = await axiosSecure.get('/topClass');
        return res.data;
    })
    // console.log(topClasses)
    return (
     <div className='mt-16'>
    <div className='text-center'>
    <Fade className=' text-3xl font-bold' delay={1e3} cascade damping={1e-1}>
    Popular Classes 
 </Fade>
    </div>
      
     <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mb-20'>
     {
      topClasses.slice(0,6).map(top => <Topclasses key={top._id} top={top}></Topclasses>)
     }
  
  </div>
     </div>
    );
};

export default PopularClasses;