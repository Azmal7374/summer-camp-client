import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassesCart = ({classes}) => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const {name, image, instructorName, seats, price} = classes;
    const className = seats < 1 ? 'bg-red-500': 'bg-slate-100'
    return (
        <div>
        <div className={`card w-96 shadow-xl ${className}`}>
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="">Instructor Name: {instructorName}</p>
          <p>Available Seats: {seats}</p>
          <p>Available Price: {price}</p>
          <div className="card-actions">
          {
            seats < 1 || isAdmin || isInstructor ?   <button className="btn  bg-purple-500 hover:bg-purple-600 text-white opacity-50 cursor-not-allowed ">Select</button> :
            <button className="btn  bg-purple-500 hover:bg-purple-600 text-white">Select</button>
          }
          </div>
        </div>
      </div>
        </div>
    );
};

export default ClassesCart;