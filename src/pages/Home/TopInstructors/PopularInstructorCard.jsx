import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const PopularInstructorCard = ({instructor}) => {
    const {name,photo,email} = instructor;

    return (
        <div>
        <div className=" card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <motion.div
        className="box"
        
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}>
        <img src={photo} alt="Shoes" className="rounded-xl h-60 w-80" />
        </motion.div>
         
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="font-semibold">Instructor Name:{name}</h2>
          <h2 className="font-semibold">Instructor Email:{email}</h2>
           
         
        </div>
      </div>
        </div>
    );
};

export default PopularInstructorCard;