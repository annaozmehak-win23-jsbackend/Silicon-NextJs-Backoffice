import { ChangeEvent, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './UpdateModal.module.css';
import { CourseContent } from "@/app/interfaces/courseTypes";
import Form from 'react-bootstrap/Form';

interface UpdateModelProps {
    onUpdateCourse: (courseData: CourseContent) => void;
    onUpdate: () => void;
    update: boolean;
    course: CourseContent;
}

export default function UpdateModel({ onUpdateCourse, onUpdate, update, course } : UpdateModelProps) {
    const [show, setShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState<string>('');
    const [title, setTitle] = useState<string>(course.title);
    const [ingress, setIngress] = useState<string>(course.ingress);
    const [isBestseller, setIsBestseller] = useState<boolean>(course.isBestSeller);
    const [isDigital, setIsDigital] = useState<boolean>(course.isDigital);
    const [categories, setCategories] = useState<string[]>(course.categories);
    const [authors, setAuthors] = useState<string>(course.authors[0].name);
    const [starRating, setStarRating] = useState<number>(course.starRating);
    const [price, setPrice] = useState<number>(course.prices.price);
    const [discountPrice, setDiscountPrice] = useState<number>(course.prices.discount);
    const [currency, setCurrency] = useState<string>(course.prices.currency);
    const [hours, setHours] = useState<string>(course.hours);
    const [reviews, setReviews] = useState<string>(course.reviews);
    const [likesInProcent, setLikesInProcent] = useState<string>(course.likesInProcent);
    const [likes, setLikes] = useState<string>(course.likes);
    const [description, setDescription] = useState<string>(course.content.description);
    const [includes, setIncludes] = useState<string[]>(course.content.includes);
    const [programDetailTitle, setProgramDetailTitle] = useState<string>(course.content.programDetails[0].title);
    const [programDetailDescription, setProgramDetailDescription] = useState<string>(course.content.programDetails[0].description);

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleUpdate = () => {
        const authorsInput = (document.querySelector('input[name="author"]') as HTMLInputElement).value;
        const authorsArray = authorsInput.split(',').map(author => ({ name: author.trim() }));

        const priceInput = (document.querySelector('input[name="price"]') as HTMLInputElement).value;
        const price = Number(priceInput);

        const discountPriceInput = (document.querySelector('input[name="discountPrice"]') as HTMLInputElement).value;
        const discount = Number(discountPriceInput);

        const currencyInput = (document.querySelector('input[name="currency"]') as HTMLInputElement).value;

        const starRatingInput = (document.querySelector('input[name="starrating"]') as HTMLInputElement).value;
        const starRating = Number(starRatingInput);
        
        const courseData: CourseContent = {
            id: course.id,
            imageUri: '',
            imageHeaderUri: '',
            title: title,
            ingress: ingress,
            isBestSeller: isBestseller,
            isDigital: isDigital,
            starRating: starRating,
            categories: categories,
            authors: authorsArray,
            prices: {
                price: price,
                currency: currencyInput,
                discount: discount,
            },
            hours: hours,
            reviews: reviews,
            likesInProcent: likesInProcent,
            likes: likes,
            content: {
                description: description,
                includes: includes,
                programDetails: [
                    {
                        id: 1,
                        title: programDetailTitle,
                        description: programDetailDescription,
                    }
                ]
            },
        };
        onUpdateCourse(courseData);
        handleClose();
        onUpdate();
    };

      useEffect(() => {

      }, [update]);

    return (
        <div>
            <button className="btn btn-theme" onClick={handleShow}>Update course</button>

            <Modal show={show} onHide={handleClose} className={styles.modalContent}>
                <Modal.Header closeButton>
                <Modal.Title>Create a course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div> 
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="ingress">Ingress</label>
                            <input type="text" name='ingress' value={ingress} onChange={(e) => setIngress(e.target.value)} />
                        </div> 
                        <div className={styles.bestsellerAndCategoryContainer}>
                            <div className={`checkbox-group ${styles.inputGroup}`}>
                                <label htmlFor="bestseller">Bestseller</label>
                                <input type="checkbox" name='bestseller' checked={isBestseller} onChange={(e) => setIsBestseller(e.target.checked)} />
                            </div> 
                            <div className={`checkbox-group ${styles.inputGroup}`}>
                                <label htmlFor="isdigital">Is Digital?</label>
                                <input type="checkbox" name='isdigital' checked={isDigital} onChange={(e) => setIsDigital(e.target.checked)} />
                            </div> 
                        </div>
                      
                            <Form.Select id='categories' aria-label="Categories">
                                <option value="web">Web</option>
                                <option value="fullstack">Fullstack</option>
                                <option value="developer">Developer</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="javascript">JavaScript</option>
                            </Form.Select>
                        
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="author">Author</label>
                            <input type="text" name='author' value={authors} onChange={(e) => setAuthors(e.target.value)} />
                        </div> 
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="starrating">Star rating</label>
                            <input type="text" name='starrating' value={starRating} onChange={(e) => setStarRating(Number(e.target.value))} />
                        </div> 
                        <div className={styles.priceContainer}>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="price">Price</label>
                                <input type="number" name='price' value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                            </div> 
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="discountPrice">Discount Price</label>     
                                <input type="number" name='discountPrice' value={discountPrice} onChange={(e) => setDiscountPrice(Number(e.target.value))} />
                            </div> 
                          
                        </div>  
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="currency">Currency</label>     
                            <input type="text" name='currency' value={currency} onChange={(e) => setCurrency(e.target.value)} />
                        </div> 
                        <div className={styles.hoursAndReviewsContainer}>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="hours">Hours</label>
                                <input type="text" name='hours' value={hours} onChange={(e) => setHours(e.target.value)} />
                            </div>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="reviews">Reviews</label>
                                <input type="text" name='reviews' value={reviews} onChange={(e) => setReviews(e.target.value)} />
                            </div>
                        </div>
                       
                        <div className={styles.likesContainer}>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="likesInProcent">Likes In Procent</label>
                                <input type="text" name='likesInProcent' value={likesInProcent} onChange={(e) => setLikesInProcent(e.target.value)} />
                            </div>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="likes">Likes</label>
                                <input type="text" name='likes' value={likes} onChange={(e) => setLikes(e.target.value)} />
                            </div>
                        </div>
                         
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="includes">Includes</label>
                            {
                                includes.map((include, index) => (
                                    <input 
                                        key={index}
                                        type="text" 
                                        name='includes' 
                                        value={include} 
                                        onChange={(e) => {
                                        const newIncludes = [...includes];
                                        newIncludes[index] = e.target.value;
                                        setIncludes(newIncludes);
                                    }} 
                                />
                                ))
                            }
                            <button onClick={() => setIncludes([...includes, ""])}>Add new</button>

                        </div>
                        <h5 className={styles.programDetailsTitle}>Program Details</h5>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="programDetailTitle">Title</label>
                            <input type='text' name="programDetailTitle" value={programDetailTitle} onChange={(e) => setProgramDetailTitle(e.target.value)} />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="programDetailDescription">Description</label>
                            <textarea name="programDetailDescription" value={programDetailDescription} onChange={(e) => setProgramDetailDescription(e.target.value)} />
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-red-border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-red" type='submit' onClick={handleUpdate}>
                    Create
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}