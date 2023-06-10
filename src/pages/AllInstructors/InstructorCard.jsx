import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const InstructorCard = ({instructor}) => {
    const {user, loading}= useAuth()
    const {name} = instructor;
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
           
          <div className="card-actions">
           <Link to=''>
           <button className="btn  bg-purple-500 hover:bg-purple-600 text-white">See Classes</button>
           </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default InstructorCard;