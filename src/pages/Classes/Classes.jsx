import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassesCart from './ClassesCart';

const Classes = () => {

    


    const {user, loading} = useAuth();
    const [axiosSecure] =useAxiosSecure();

    const {data: allClasses =[]} = useQuery(['class'], async () =>{
        const res = await axiosSecure.get('/approve');
        return res.data;
    })
    // console.log(allClasses)

    return (
        <div className='mt-10 px-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20'>
            {
                allClasses.map(classes => <ClassesCart key={classes._id} classes={classes}></ClassesCart>)
            }
        </div>
    );
};

export default Classes;