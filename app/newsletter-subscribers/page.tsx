'use client'

import Table from 'react-bootstrap/Table';
import UpdateModel from '../components/newsletterModel/UpdateModel';
import styles from './NewsletterSubscribers.module.css';
import DeleteModel from '../components/deleteModel/DeleteModel';
import { useEffect, useState } from 'react';

export default function Newsletter() {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [tableData, setTableData] = useState<any[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch('https://newsletterprovider-silicon-win23-annaozmehak.azurewebsites.net/api/Subscribers?code=P3hlk3Ram5q0zQ-2E9WwlKGxyZCTJfi_92lR32urf20yAzFuF3QGdw%3D%3D', {
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
      setTableData(data.subscribers);
      handleUpdate();
    })
    .catch(error => {
      setError(error.message);
    });
    
  }, [update]);

  const unSubscribeUser = (email: string) => {
    fetch('https://newsletterprovider-silicon-win23-annaozmehak.azurewebsites.net/api/UnSubscribe?code=VqznU5w3x0sagOJvE_rOhM6MtbH-JJ4sXA5hpFK2TbktAzFu5Y4zPA%3D%3D', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(res => {
        if (res.ok) {
          setSuccess('The user is now unsubscribed');
          handleUpdate();
            
        } else {
          setError('Unable to unsubscribe the user. Try again.');
        }
    })
  }

  const handleUpdate = () => {
    setUpdate(!update);
};

  return (
    <main className={`main ${styles.newsletterContainer}`}>
      <h1 className={styles.title}>Newsletter Subscribers</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Customer</th>
              <th>Daily Newsletter</th>
              <th>Advertising Updates</th>
              <th>Week in Review</th>
              <th>Event Updates</th>
              <th>Startups Weekly</th>
              <th>Podcasts</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            Array.isArray(tableData) && tableData.map((data) => (
              <tr key={data.email}>
                <td>
                  <UpdateModel btnIcon="fa-regular fa-pen-to-square" />
                </td>
                <td>{data.email}</td>
                <td>{data.dailyNewsletter.toString()}</td>
                <td>{data.advertisingUpdates.toString()}</td>
                <td>{data.weekInReview.toString()}</td>
                <td>{data.eventUpdates.toString()}</td>
                <td>{data.startupsWeekly.toString()}</td>
                <td>{data.podcasts.toString()}</td>
                <td>
                    <DeleteModel 
                      btnIcon="fa-regular fa-trash" 
                      modelTitle="Delete subscriptions" 
                      modelQuestion="Are you sure you want to delete all subscriptions for this user?" 
                      modelConfirmText="Yes, remove all subscriptions" 
                      onUnsubscribe={() => unSubscribeUser(data.email)}
                      onUpdate={handleUpdate}
                      update={update}
                      
                      />
                  </td>
              </tr>
            ))
          }
            
          </tbody>
        </Table>
    </main>
  );
}