import React from 'react';

const SelectedClassCard = ({classes}) => {
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Seats</th>
              <th>Status</th>
              <th>Enroll</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((classes, index) => (
              <tr key={classes._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classes.image} alt="img" />
                    </div>
                  </div>
                </td>
                <td>{classes.name}</td>
                <td>{classes.price}</td>
                <td>{classes.seats}</td>
                <td>{classes.status}</td>
                <td>4</td>
                <td> 
         
                {
                  classes.status === 'pending'  ? <button onClick={()=>handleMakeAdmin(user)} className={`btn btn-ghost bg-purple-600 hover:bg-purple-600 text-white   `}> Feedback </button> :
                   ""
                }
             
            
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default SelectedClassCard;