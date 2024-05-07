import Table from 'react-bootstrap/Table';

export default function Customers() {
  return (
    <main>
      <div className="content"></div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>CustomerId</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td>1</td>
              <td>Anna</td>
              <td>Özmehak</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Calle</td>
              <td>Özmehak</td>
          </tr>
            <tr>
              <td>3</td>
              <td>Astrid</td>
              <td>Özmehak</td>
            </tr>
          </tbody>
        </Table>
    </main>
  );
}