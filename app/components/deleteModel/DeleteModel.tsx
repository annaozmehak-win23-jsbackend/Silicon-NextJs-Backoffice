import { ChangeEvent, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './DeleteModel.module.css';

interface DeleteModelProps {
    btnIcon?: string;
    modelTitle?: string;
    modelQuestion?: string;
    modelConfirmText?: string;
    onDelete: () => void;
    onUpdate: () => void;
    update: boolean;
}

export default function DeleteModel({ btnIcon, modelTitle, modelQuestion, modelConfirmText, onDelete, onUpdate, update } : DeleteModelProps) {
    const [show, setShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState<string>('');
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleDelete = () => {
        if (isChecked) {
            onDelete();
            handleClose();
            onUpdate();
        }
        else {
            setError('Please confirm the action by checking the checkbox');
        }
      };

      useEffect(() => {

      }, [update]);
    
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
                            <input type="checkbox" id="confirm" onChange={handleCheckboxChange} />
                            <label htmlFor="confirm">{modelConfirmText}</label>
                        </div> 
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-red-border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-red" type='submit' onClick={handleDelete}>
                    Delete
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}