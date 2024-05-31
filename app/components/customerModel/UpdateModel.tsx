import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

interface UpdateModelProps {
    btnLabel?: string;
    btnIcon?: string;
    btnStyling?: string;
    customer: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }
}

export default function UpdateModel({ btnLabel, btnIcon, btnStyling, customer } : UpdateModelProps) {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState(customer ? customer.firstName : '');
    const [lastName, setLastName] = useState(customer ? customer.lastName : '');
    const [email, setEmail] = useState(customer ? customer.email : '');
    const [password, setPassword] = useState(customer ? customer.password : '');

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFirstName(customer.firstName);
        setLastName(customer.lastName);
        setEmail(customer.email);
        setPassword(customer.password);
        setShow(true);
    }
    
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
                            <input type="text" id="firstName" placeholder="Enter first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" placeholder="Enter last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>  
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>  
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password"  value={password} onChange={e => setPassword(e.target.value)} />
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