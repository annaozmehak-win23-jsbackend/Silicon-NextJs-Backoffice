'use client'

import Table from 'react-bootstrap/Table';
import UpdateModel from '../components/customerModel/UpdateModel';
import DeleteModel from '../components/deleteModel/DeleteModel';
import styles from './Customers.module.css';
import { useEffect, useState } from 'react';

export default function Customers() {
  const [error, setError] = useState<string>('');
  const [customerData, setCustomerData] = useState<any[]>([]);
  const [success, setSuccess] = useState<string>('');
  const [update, setUpdate] = useState<boolean>(false);
  
  useEffect(() => {
    fetch('https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/Customers?code=bax7xnUhb9bZdmO0UJYcLKZUPzDAKBQyaOLOaQRUFX0nAzFu-GyBow%3D%3D', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(res => {
        if (res.ok) {
            return res.json();
            
        } else {
            throw new Error('Failed to fetch data');
        }
    })
    .then(data => {
      setCustomerData(data.customers);
    })
    .catch(error => {
      setError(error.message);
    }); 
  }, []);

  
  const deleteCustomer = (id: string) => {
    fetch(`https://accountprovider-silicon-win23-annaozmehak.azurewebsites.net/api/DeleteCustomer?code=OY4t260N5P0LeHmiVaodxR0oYcuyW_nNDODplZkwFrnEAzFuWYroQA%3D%3D&id=${id}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(res => {
        if (res.ok) {    
          setSuccess('The customer is now deleted');
          handleUpdate();
            
        } else {
          console.log(res)
          setError('Unable to delete the customer. Try again.');
        }
    })
  }

  const handleUpdate = () => {
    setUpdate(prevUpdate => !prevUpdate);
};
  
  return (
    <main className={`main ${styles.customersContainer}`}>
      <div className="content"></div>
        <h1 className={styles.title}>Customers</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Edit</th>
              <th>CustomerId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            customerData.map((data) => (
              <tr key={data.id}>
                <td>
                  <UpdateModel btnIcon="fa-regular fa-pen-to-square" customer={data} />
                </td>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>
                    <DeleteModel 
                      btnIcon="fa-regular fa-trash" 
                      modelTitle="Delete user" 
                      modelQuestion="Are you sure you want to delete this user?" 
                      modelConfirmText="Yes, delete user"  
                      onDelete={() => deleteCustomer(data.id)}
                      onUpdate={handleUpdate}
                      update={update} />
                  </td>
              </tr>
            ))
          }
    
        </tbody>
      </Table>
    </main>
  );
}