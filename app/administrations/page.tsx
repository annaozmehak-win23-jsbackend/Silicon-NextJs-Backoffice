'use client'

import Table from 'react-bootstrap/Table';
import styles from './Administrations.module.css';
import AdministrationModel from '../components/administrationModel/AddModel';
import DeleteModel from '../components/administrationModel/DeleteModel';

export default function Administrations() {
    const tableData = [
      {
        id: 1,
        firstName: 'Anna',
        lastName: 'Özmehak',
        role: 'Admin'
      },
      {
        id: 2,
        firstName: 'Calle',
        lastName: 'Özmehak',
        role: 'Admin'
      },
      {
        id: 3,
        firstName: 'Astrid',
        lastName: 'Özmehak',
        role: 'Admin'
      }
    ]

    return (
      <main className={`main ${styles.administrationContainer}`}>
        <div className={styles.titleContainer}>
          <h1>User Adminstration</h1>
          <AdministrationModel btnLabel="Create" btnStyling="btn-theme" />
        </div>
  
        <Table striped bordered hover>
          <thead>
              <tr>
                <th>Edit</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
          </thead>
          <tbody>
            {
              tableData.map((data) => (
                <tr>
                  <td>
                    <AdministrationModel btnIcon="fa-regular fa-pen-to-square" />
                  </td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.role}</td>
                  <td>
                    <DeleteModel btnIcon="fa-regular fa-trash" />
                  </td>
                </tr>
              ))
            }

          </tbody>
        </Table>
      
      </main>
    );
  }