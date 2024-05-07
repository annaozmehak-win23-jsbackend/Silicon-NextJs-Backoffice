import Table from 'react-bootstrap/Table';

export default function Orders() {
  return (
    <main>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anna Özmehak</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Calle Özmehak</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Astrid Özmehak</td>
            </tr>
          </tbody>
        </Table>
    </main>
  );
}