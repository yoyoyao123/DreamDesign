
import React from 'react';
import './UserIcon.css'; 
import { Link } from 'react-router-dom';

const UserIcon = ({onClick}) => {
  const andelClik = () =>{onClick()

  }
  return (
  
      /*<Link to = "inscription">*/
      
    <div onClick={andelClik} className="user-icon">
    <i className="fas fa-user"></i> 
  </div>
  /*</Link>*/

   
  

  );
};

export default UserIcon;





