import { ChangeEvent, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './CreateModel.module.css';
import { CourseContent } from "@/app/interfaces/courseTypes";
import Form from 'react-bootstrap/Form';

interface CreateModelProps {
    onCreate: (courseData: CourseContent) => void;
    onUpdate: () => void;
    update: boolean;
    handleFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CreateModel({ onCreate, onUpdate, update, handleFile } : CreateModelProps) {
    const [show, setShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState<string>('');
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleCreate = () => {
        const categoriesSelect = document.getElementById('categories') as HTMLSelectElement;
        const selectedCategory = categoriesSelect.value;

        const authorsInput = (document.querySelector('input[name="author"]') as HTMLInputElement).value;
        const authorsArray = authorsInput.split(',').map(author => ({ name: author.trim() }));

        const priceInput = (document.querySelector('input[name="price"]') as HTMLInputElement).value;
        const discountPriceInput = (document.querySelector('input[name="discountPrice"]') as HTMLInputElement).value;
        const currencyInput = (document.querySelector('input[name="currency"]') as HTMLInputElement).value;

        const starRating = (document.querySelector('input[name="starrating"]') as HTMLInputElement).value;

        const descriptionInput = (document.querySelector('textarea[name="description"]') as HTMLInputElement).value;
        const includesInput = (document.querySelector('textarea[name="includes"]') as HTMLInputElement).value;
        const includesArray = includesInput.split(',').map(include => include.trim());
        const programDetailTitleInput = (document.querySelector('input[name="programDetailTitle"]') as HTMLInputElement).value;
        
        const courseData: CourseContent = {
            imageUri: (document.querySelector('input[name="file"]') as HTMLInputElement).value,
            imageHeaderUri: '',
            title: (document.querySelector('input[name="title"]') as HTMLInputElement).value,
            ingress: (document.querySelector('input[name="ingress"]') as HTMLInputElement).value,
            isBestSeller: (document.querySelector('input[name="bestseller"]') as HTMLInputElement).checked,
            isDigital: (document.querySelector('input[name="isdigital"]') as HTMLInputElement).checked,
            starRating: parseFloat(starRating),
            categories: [selectedCategory],
            authors: authorsArray,
            prices: {
                price: parseFloat(priceInput),
                currency: currencyInput,
                discount: parseFloat(discountPriceInput),
            },
            hours: (document.querySelector('input[name="hours"]') as HTMLInputElement).value,
            reviews: (document.querySelector('input[name="reviews"]') as HTMLInputElement).value,
            likesInProcent: (document.querySelector('input[name="likesInProcent"]') as HTMLInputElement).value,
            likes: (document.querySelector('input[name="likes"]') as HTMLInputElement).value,
            content: {
                description: descriptionInput,
                includes: includesArray,
                programDetails: [
                    {
                        id: 1,
                        title: programDetailTitleInput,
                        description: (document.querySelector('textarea[name="programDetailDescription"]') as HTMLInputElement).value,
                    }
                ]
            },
        };
        onCreate(courseData);
        handleClose();
        onUpdate();
    };

      useEffect(() => {

      }, [update]);

    return (
        <div>
            <button className="btn btn-theme" onClick={handleShow}>Create course</button>

            <Modal show={show} onHide={handleClose} className={styles.modalContent}>
                <Modal.Header closeButton>
                <Modal.Title>Create a course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="updateProfileImage" encType='multipart/form-data'>
                        <label htmlFor='fileInput' className={`btn btn-circle btn-circle-sm ${styles.label}`}>Upload image</label>
                        <input id="fileInput" type="file" name="file" accept='image/*' onChange={handleFile} />
                    </form>
                    <form>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' />
                        </div> 
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="ingress">Ingress</label>
                            <input type="text" name='ingress' />
                        </div> 
                        <div className={styles.bestsellerAndCategoryContainer}>
                            <div className={`checkbox-group ${styles.inputGroup}`}>
                                <label htmlFor="bestseller">Bestseller</label>
                                <input type="checkbox" name='bestseller' checked={isChecked} onChange={handleCheckboxChange} />
                            </div> 
                            <div className={`checkbox-group ${styles.inputGroup}`}>
                                <label htmlFor="isdigital">Is Digital?</label>
                                <input type="checkbox" name='isdigital' />
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
                            <input type="text" name='author' />
                        </div> 
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="starrating">Star rating</label>
                            <input type="text" name='starrating' />
                        </div> 
                        <div className={styles.priceContainer}>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="price">Price</label>
                                <input type="number" name='price' />
                            </div> 
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="discountPrice">Discount Price</label>     
                                <input type="number" name='discountPrice' />
                            </div> 
                          
                        </div>  
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="currency">Currency</label>     
                            <input type="text" name='currency' />
                        </div> 
                        <div className={styles.hoursAndReviewsContainer}>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="hours">Hours</label>
                                <input type="text" name='hours' />
                            </div>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="reviews">Reviews</label>
                                <input type="text" name='reviews' />
                            </div>
                        </div>
                       
                        <div className={styles.likesContainer}>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="likesInProcent">Likes In Procent</label>
                                <input type="text" name='likesInProcent' />
                            </div>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <label htmlFor="likes">Likes</label>
                                <input type="text" name='likes' />
                            </div>
                        </div>
                         
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="includes">Includes</label>
                            <textarea name="includes" />
                        </div>
                        <h5 className={styles.programDetailsTitle}>Program Details</h5>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="programDetailTitle">Title</label>
                            <input type='text' name="programDetailTitle" />
                        </div>
                        <div className={`input-group ${styles.inputGroup}`}>
                            <label htmlFor="programDetailDescription">Description</label>
                            <textarea name="programDetailDescription" />
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-red-border" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-red" type='submit' onClick={handleCreate}>
                    Create
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}