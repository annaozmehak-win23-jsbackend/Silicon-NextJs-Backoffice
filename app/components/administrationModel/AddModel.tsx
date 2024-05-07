import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

interface AdministrationModelProps {
    btnLabel?: string;
    btnIcon?: string;
    btnStyling?: string;
}

export default function AdministrationModel({ btnLabel, btnIcon, btnStyling } : AdministrationModelProps) {
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
                <Modal.Title>Add a new user role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="input-group">
                            <label htmlFor="role">Role</label>
                            <input type="text" id="role" placeholder="Enter role" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter name" />
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