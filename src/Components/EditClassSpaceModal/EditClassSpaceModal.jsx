import React, { useState } from 'react';
import './EditClassSpaceModal.css'

const EditClassSpaceModal = ({ onClose }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        // You might want to send the data to a server or manage it locally
        console.log({ name, description, image });
        onClose(); // Close modal after submission
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <h4>Edit class space</h4>
                    <div className="form-group">
                        <label htmlFor="upload-image">Change cover image (Optional)</label>
                        <input type="file" id="upload-image" onChange={handleImageChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-button Button">Save changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditClassSpaceModal;
