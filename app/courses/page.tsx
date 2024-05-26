'use client'

import { useEffect, useState } from 'react';
import styles from './Page.module.css';
import { CourseContent } from "@/app/interfaces/courseTypes";
import CreateModel from '../components/createCourseModel/CreateModel';

export default function Courses() {
  const [courses, setCourses] = useState<CourseContent[]>([]);
  const [update, setUpdate] = useState<boolean>(false);

  const query = `
  query {
    getCourses {
      id
      isBestSeller
      title
      ingress
      starRating
      categories
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
      reviews
      likes
      content {
        description
        includes
        programDetails {
          description
          title
        }
      }
    
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


  const handleCreateCourse = (courseData: CourseContent) => {
    console.log('Creating course...', courseData);

    fetch("http://localhost:7180/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        mutation ($input: CourseCreateRequestInput!) {
          createCourse(input: $input) { id title }}`,   
        variables: {
          input: courseData,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to create course");
        }
      })
      .then((data) => {
        setCourses((prevCourses) => [...prevCourses, data.data.createCourse]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleUpdate = () => {
    setUpdate(prevUpdate => !prevUpdate);
};

    return (
      <main>
        <div className="content"></div>
        <div className={styles.headerContent}>
          <h1>Courses</h1>
          <CreateModel onCreate={handleCreateCourse} onUpdate={handleUpdate} update={update} />
        </div>
     
        <div className={styles.courses}>
          { 
          courses.map((data, index) => (
            <div key={index} className={styles.course}>
              <img src={data.imageUri} alt={data.title} />
              <div className={styles.textContent}>
                <h5>{data.title}</h5>
                <p className={styles.bold}>Ingress: <span className={styles.notBold}>{data.ingress}</span></p>
                <div className={styles.categoryAndAuthorBox}>
                  <p className={styles.bold}>Categories: <span className={styles.notBold}>{data.categories.map((category) => category).join(", ")}</span></p>
                  <p className={styles.bold}>Authors: <span className={styles.notBold}>{data.authors.map((author) => author.name).join(", ")}</span></p>
                </div>
                <div className={styles.tags}>
                  <p className={styles.bold}>Bestseller: <span className={styles.notBold}>{data.isBestSeller ? 'Yes' : 'No'}</span></p>
                  <p className={styles.bold}>Is Digital: <span className={styles.notBold}>{data.isDigital ? 'Yes' : 'No'}</span></p>
                </div>
            
                {
                  data.prices && (
                    data.prices.discount > 0 ? (
                      <div className={styles.priceWithSale}>
                        <p className={styles.bold}>Discount price: <span className={styles.discount}>${data.prices.discount}</span></p>
                        <p className={styles.bold}>Price: <span className={styles.notBold}>${data.prices.price}</span></p>
                      </div>
                    ) : (
                      <p className={styles.bold}>Price:<span className={styles.notBold}> ${data.prices.price}</span></p>
                    )
                  )
                }

                <div className={styles.ratingAndHoursContainer}>
                  <p className={styles.bold}>StarRating: <span className={styles.notBold}>{data.starRating}</span></p>
                  <p className={styles.bold}>Hours: <span className={styles.notBold}>{data.hours}</span></p>
                </div>
               
                <div className={styles.likes}>
                  <p className={styles.bold}>Reviews: <span className={styles.notBold}>{data.reviews}</span></p>
                  <p className={styles.bold}>Likes: <span className={styles.notBold}>{data.likes}</span></p>
                  <p className={styles.bold}>Likes in procent: <span className={styles.notBold}>{data.likesInProcent}</span></p>
                </div>
                <div>
                  <p className={styles.bold}>Description:</p>
                  <p className={styles.notBold}>{data.content.description}</p>
                </div>
                <div>
                  <p className={styles.bold}>Includes:</p>
                  <ul>
                    {
                      data.content.includes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                <p className={styles.bold}>Program details:</p>
                  {      
                    data.content.programDetails.map((item, index) => (
                      <div key={index}>
                        <p className={styles.bold}>Title: <span className={styles.notBold}>{item.title}</span></p>
                        <p className={styles.bold}>Description: <span className={styles.notBold}>{item.description}</span></p>
                      </div>
                    
                    ))
                  }
                </div>
              
              </div>
            </div>
          ))}
        </div>
 

      </main>
    );
  }