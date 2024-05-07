import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

interface UpdateModelProps {
    btnLabel?: string;
    btnIcon?: string;
    btnStyling?: string;
}

export default function UpdateModel({ btnLabel, btnIcon, btnStyling } : UpdateModelProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <button className={`btn ${btnStyling}`} onClick={handleShow}>
                <i className={btnIcon}></i>
                {btnLabel}
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update a customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="input-group">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="firstName" placeholder="Enter first name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" placeholder="Enter last name" />
                        </div>  
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter email" />
                        </div>  
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password" />
                        </div> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-red-border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-theme" onClick={handleClose}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}