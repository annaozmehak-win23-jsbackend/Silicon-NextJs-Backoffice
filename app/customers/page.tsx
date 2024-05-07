'use client'

import Table from 'react-bootstrap/Table';
import UpdateModel from '../components/customerModel/UpdateModel';
import DeleteModel from '../components/administrationModel/DeleteModel';

export default function Customers() {
  const tableData = [
    {
      id: 1,
      firstName: 'Anna',
      lastName: 'Özmehak',
      email: 'anna.ozmehak@gmail.com'
    },
    {
      id: 2,
      firstName: 'Calle',
      lastName: 'Özmehak',
      email: 'ozmehak.calle@gmail.com'
    },
    {
      id: 3,
      firstName: 'Astrid',
      lastName: 'Özmehak',
      email: 'astrid.ozmehak@gmail.com'
    }
  ]
  
  return (
    <main>
      <div className="content"></div>
        <h1>Customers</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Edit</th>
              <th>CustomerId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
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
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
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