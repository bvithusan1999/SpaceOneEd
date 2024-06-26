import React, { useState } from 'react'
import './MyClassSpaceCard.css'
import image from '../../Images/Card.png'
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditClassSpaceModal from '../EditClassSpaceModal/EditClassSpaceModal';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const MyClassSpaceCard = ({ classesCount, batch, classSpceDetails, classSpaceId }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };
  
  const classSpacePage = () => { 
    navigate(`/my-class-space-page/${classSpaceId}`);    
  };

  return (
    
    <div className='EnrolledClassCard' onClick={classSpacePage}>
         
          <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <button className='card-edit-button' onClick={toggleEditModal}><FaEdit /></button>
                <button className='card-trash-button'><FaTrash /></button>
            </div>
          <div className="card-details">
              <div className="class-counts">
                  <span>Class space</span>
                  <span>{classesCount} Classes</span>
              </div>
              <div className="card-details-1">
                  <span className="card-subject">{batch}</span>
                  
                  <span className="card-teacher">{ classSpceDetails}</span>
              </div>
            
      </div>
      {isEditModalOpen && (
      <EditClassSpaceModal
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        data={{ batch, classSpceDetails }}
      />
      )}
     
      </div>
      
  )
}

export default MyClassSpaceCard