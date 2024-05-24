'use client'

import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

interface Author {
  name: string;
}

interface Price {
  price: number;
  currency: string;
  discount: number;
}

interface Course {
  id: string;
  isBestSeller: boolean;
  title: string;
  authors: Author[];
  prices: Price[];
  hours: number;
  likesInProcent: number;
  likes: number;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  const query = `
  query {
    getCourses {
      id
      isBestSeller
      title
      authors {
        name
      }
      prices {
        price
        currency
        discount
      }
      hours
      likesInProcent
      likes
    }
  }
`;
const json = JSON.stringify({ query });

  useEffect(() => {
    fetch("http://localhost:7180/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json
    })
      .then((res) => res.json())
      .then((result) => {
        setCourses(result.data.getCourses);
      });
  }, []);

 
 
  // const res = await fetch("http://localhost:7180/api/graphql", {
  // method: "POST",
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // body: json
  // })

  // const result = await res.json()

  // var courses = result.data.getCourses[0].id
  

    return (
      <main>
        <div className="content"></div>
        <h1>Courses</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>Edit</th> */}
              <th>Title</th>
              <th>Hours</th>
              <th>Likes</th>
              <th>Likes in procent</th>
            </tr>
          </thead>
          <tbody>
          {
            courses.map((data) => (
              <tr key={data.id}>
                {/* <td>
                  <UpdateModel 
                    btnIcon="fa-regular fa-pen-to-square"
                    email={data.email}
                    initalData={data}
                    onUpdate={updateSubscriber} />
                </td> */}
                <td>{data.title}</td>
                <td>{data.hours}</td>
                <td>{data.likes}</td>
                <td>{data.likesInProcent}</td>
                {/* <td>
                    <DeleteModel 
                      btnIcon="fa-regular fa-trash" 
                      modelTitle="Delete subscriptions" 
                      modelQuestion="Are you sure you want to delete all subscriptions for this user?" 
                      modelConfirmText="Yes, remove all subscriptions" 
                      onDelete={() => unSubscribeUser(data.email)}
                      onUpdate={handleUpdate}
                      update={update}
                      
                      />
                  </td> */}
              </tr>
            ))
          }
            
          </tbody>
        </Table>
      </main>
    );
  }