import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Cart from './Cart';

const PopularClasses = () => {

    const [axiosSecure] =useAxiosSecure();

    const {data: selectClasses =[]} = useQuery(['class'], async () =>{
        const res = await axiosSecure.get('/payment');
        return res.data;
    })
    console.log(selectClasses)
    return (
        <div>
            {
                selectClasses.map(classes => <Cart key={classes._id} classes={classes}></Cart>)
            }
        </div>
    );
};

export default PopularClasses;