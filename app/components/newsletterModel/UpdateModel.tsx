import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './UpdateModel.module.css';

interface SubscribeEntity {
    dailyNewsletter: boolean;
    advertisingUpdates: boolean;
    weekInReview: boolean;
    eventUpdates: boolean;
    startupsWeekly: boolean;
    podcasts: boolean;
}

interface UpdateModelProps {
    btnIcon?: string;
    email: string;
    initalData: SubscribeEntity,
    onUpdate: (email: string, updatedData: SubscribeEntity) => void;
}

export default function UpdateModel({ btnIcon, email, initalData, onUpdate } : UpdateModelProps) {
    const [show, setShow] = useState(false);
    const [dailyNewsletter, setDailyNewsletter] = useState(initalData.dailyNewsletter);
    const [advertisingUpdates, setAdvertisingUpdates] = useState(initalData.advertisingUpdates);
    const [weekInReview, setWeekInReview] = useState(initalData.weekInReview);
    const [eventUpdates, setEventUpdates] = useState(initalData.eventUpdates);
    const [startupsWeekly, setStartupsWeekly] = useState(initalData.startupsWeekly);
    const [podcasts, setPodcasts] = useState(initalData.podcasts);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleUpdate = () => {
        const updatedData = {
          dailyNewsletter,
          advertisingUpdates,
          weekInReview,
          eventUpdates,
          startupsWeekly,
          podcasts
        };
        handleClose();
        onUpdate(email, updatedData);
      };

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
                            <input type="checkbox" id="dailyNewsletter" checked={dailyNewsletter} onChange={e => setDailyNewsletter(e.target.checked)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="advertisingUpdates">Advertising Updates</label>
                            <input type="checkbox" id="advertisingUpdates" checked={advertisingUpdates} onChange={e => setAdvertisingUpdates(e.target.checked)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="weekInReview">Week in Review</label>
                            <input type="checkbox" id="weekInReview" checked={weekInReview} onChange={e => setWeekInReview(e.target.checked)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="eventUpdates">Event Updates</label>
                            <input type="checkbox" id="eventUpdates" checked={eventUpdates} onChange={e => setEventUpdates(e.target.checked)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="startupsWeekly">Startups Weekly</label>
                            <input type="checkbox" id="startupsWeekly" checked={startupsWeekly} onChange={e => setStartupsWeekly(e.target.checked)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="podcasts">Podcasts</label>
                            <input type="checkbox" id="podcasts" checked={podcasts} onChange={e => setPodcasts(e.target.checked)} />
                        </div>
                  
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-red-border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-theme" onClick={handleUpdate}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}