'use client'

import Table from 'react-bootstrap/Table';
import UpdateModel from '../components/newsletterModel/UpdateModel';
import styles from './NewsletterSubscribers.module.css';
import DeleteModel from '../components/deleteModel/DeleteModel';

export default function Newsletter() {
  const tableData = [
    {
      customerId: 1,
      firstName: 'Anna',
      lastName: 'Özmehak',
      dailyNewsletter: 'yes',
      advertisingUpdates: 'no',
      weekInReview: 'no',
      eventUpdates: 'yes',
      startupsWeekly: 'no',
      podcasts: 'no'
    },
    {
      customerId: 2,
      firstName: 'Calle',
      lastName: 'Özmehak',
      dailyNewsletter: 'no',
      advertisingUpdates: 'yes',
      weekInReview: 'yes',
      eventUpdates: 'yes',
      startupsWeekly: 'no',
      podcasts: 'yes'
    },
    {
      customerId: 3,
      firstName: 'Astrid',
      lastName: 'Özmehak',
      dailyNewsletter: 'yes',
      advertisingUpdates: 'no',
      weekInReview: 'yes',
      eventUpdates: 'yes',
      startupsWeekly: 'no',
      podcasts: 'yes'
    }
  ]

  return (
    <main className={`main ${styles.newsletterContainer}`}>
      <h1 className={styles.title}>Newsletter Subscribers</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Edit</th>
              <th>CustomerId</th>
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
            tableData.map((data) => (
              <tr>
                <td>
                  <UpdateModel btnIcon="fa-regular fa-pen-to-square" />
                </td>
                <td>{data.customerId}</td>
                <td>{data.firstName} {data.lastName}</td>
                <td>{data.dailyNewsletter}</td>
                <td>{data.advertisingUpdates}</td>
                <td>{data.weekInReview}</td>
                <td>{data.eventUpdates}</td>
                <td>{data.startupsWeekly}</td>
                <td>{data.podcasts}</td>
                <td>
                    <DeleteModel btnIcon="fa-regular fa-trash" modelTitle="Delete subscriptions" modelQuestion="Are you sure you want to delete all subscriptions for this user?" modelConfirmText="Yes, remove all subscriptions" />
                  </td>
              </tr>
            ))
          }
            
          </tbody>
        </Table>
    </main>
  );
}