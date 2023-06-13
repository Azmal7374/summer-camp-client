import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCard from '../../AllInstructors/InstructorCard';
import PopularInstructorCard from './PopularInstructorCard';
import { Fade } from 'react-awesome-reveal';

const TopInstructors = () => {
    const [axiosSecure] =useAxiosSecure();

    const {data: allInstructor =[]} = useQuery(['topInstructor'], async () =>{
        const res = await axiosSecure.get('/instructor');
        return res.data;
    })
    console.log(allInstructor)
    return (
        <div>
        <div className='text-center'>
        <Fade className=' text-3xl font-bold' delay={1e3} cascade damping={1e-1}>
        Popular Instructors 
     </Fade>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
            allInstructor.slice(0,6).map(instructor => <PopularInstructorCard key={instructor._id} instructor={instructor}></PopularInstructorCard>)
            }
        </div>
        </div>
    );
};

export default TopInstructors;