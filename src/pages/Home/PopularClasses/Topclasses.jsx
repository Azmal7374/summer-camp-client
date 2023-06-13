import React from 'react';
import { motion } from "framer-motion";

const Topclasses = ({top}) => {
    const { image,seats, price,name, booking} =top;
    // console.log(top)
    return (
        <div>
        <div className={`card  shadow-xl `}>
        <figure className="px-10 pt-10">
        <motion.div
        className="box"
        
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}>
        <img src={image} alt="Shoes" className="rounded-xl w-96 h-60" />
        </motion.div>
          
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="">Enroll: {booking}</p>
          <p>Available Seats: {seats}</p>
          <p>Available Price: {price}</p>
       
        </div>
      </div>
        </div>
    );
};

export default Topclasses;