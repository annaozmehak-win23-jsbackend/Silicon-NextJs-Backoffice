import Table from 'react-bootstrap/Table';

export default function Orders() {
  const tableData = [
  {
    firstName: 'Anna',
    lastName: 'Özmehak',
    course: 'React'
  },
  {
    firstName: 'Calle',
    lastName: 'Özmehak',
    course: 'HTML & CSS'
  },
  {
    firstName: 'Astrid',
    lastName: 'Özmehak',
    course: 'JavaScript'
  }
  ]

  return (
    <main>
      <h1>Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.firstName} {row.lastName}</td>
                  <td>{row.course}</td>
                </tr>
              ))
            }
            
          </tbody>
        </Table>
    </main>
  );
}