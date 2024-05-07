import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './DeleteModel.module.css';

interface AdministrationModelProps {
    btnLabel?: string;
    btnIcon?: string;
    btnStyling?: string;
}

export default function DeleteModel({ btnLabel, btnIcon, btnStyling } : AdministrationModelProps) {
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
                <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>Are you sure you want to delete this user?</p>

                        <div className={`input-group ${styles.inputGroup}`}>
                            <input type="checkbox" id="confirm" />
                            <label htmlFor="confirm">Yes, l want to delete this user</label>
                        </div> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-red-border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-red" onClick={handleClose}>
                    Delete
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}