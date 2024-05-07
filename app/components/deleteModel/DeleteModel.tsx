import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './DeleteModel.module.css';

interface DeleteModelProps {
    btnIcon?: string;
    modelTitle?: string;
    modelQuestion?: string;
    modelConfirmText?: string;
}

export default function DeleteModel({ btnIcon, modelTitle, modelQuestion, modelConfirmText } : DeleteModelProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <button className="btn" onClick={handleShow}>
                <i id="delete-icon" className={btnIcon}></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{modelTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>{modelQuestion}</p>

                        <div className={`input-group ${styles.inputGroup}`}>
                            <input type="checkbox" id="confirm" />
                            <label htmlFor="confirm">{modelConfirmText}</label>
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