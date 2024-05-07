import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './UpdateModel.module.css';

interface UpdateModelProps {
    btnIcon?: string;
}

export default function UpdateModel({ btnIcon } : UpdateModelProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <button className="btn" onClick={handleShow}>
                <i className={btnIcon}></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update newsletter subscription</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="dailyNewsletter">Daily Newsletter</label>
                            <input type="checkbox" id="dailyNewsletter" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="advertisingUpdates">Advertising Updates</label>
                            <input type="checkbox" id="advertisingUpdates" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="weekInReview">Week in Review</label>
                            <input type="checkbox" id="weekInReview" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="eventUpdates">Event Updates</label>
                            <input type="checkbox" id="eventUpdates" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="startupsWeekly">Startups Weekly</label>
                            <input type="checkbox" id="startupsWeekly" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="podcasts">Podcasts</label>
                            <input type="checkbox" id="podcasts" />
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