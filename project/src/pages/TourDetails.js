import React, {useRef, useState} from 'react';
import '../styles/tour-details.css';
import {Container, Row, Col, Form ,ListGroup} from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourDate from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking';



const TourDetails = () => {
    const {id} = useParams()
    const reviewMsgRef = useRef('')
    const [tour__Rating, setTourRating] = useState(null)

    //dữ liệu tĩnh sau này sẽ gọi API và tải dữ liệu từ tours
    const tour = tourDate.find(tour=> tour.id == id)

    // tách các thuộc tính khỏi tour
    const {photo, title, price, address, reviews, city, maxGroupSize} = tour
    const {totalRating, avgRating} = calculateAvgRating(reviews)

    //định dạng thời gian
    const options = {day: 'numeric', month: 'long', year: 'numeric'};

    //gửi yêu cầu đến máy chủ
    const submitHandler = e=>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.calue
        alert(`${reviewText}, ${tour__Rating}`)
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className= 'tour__content'>
                            <img src={photo} alt='' />
                            <div className='tour__info'>
                                <h2>{title}</h2>
                                <div className='d-flex align-items-center gap-5'>
                                <span className='tour__rating d-flex align-items-center gap-1'>
                                    <i class="ri-star-fill" style={{color: 'var(--secondary-color)'}}></i> 
                                    {avgRating == 0 ? null : avgRating}
                                    {totalRating == 0 ? ( 
                                        'Không được đánh giá'
                                    ) : (
                                <span>({reviews?.length})</span>
                                )}
                                </span>
                                <span>
                                    <i class="ri-map-pin-user-fill"></i>{address}
                                </span>
                                
                                <div className='tour__extra-details'>
                                    <span>
                                        <i className='ri-map-pin-2-line'></i> {city}
                                    </span>
                                    <span>
                                        <i class="ri-money-dollar-circle-line"></i> ${price}/ người
                                    </span>
                                    <span>
                                        <i class="ri-group-line"></i> {maxGroupSize} người
                                    </span>
                                </div>
                                </div>
                            </div>                      
                            <div className='tour_reviews mt-4'>
                                <h4>Reviews ({reviews?.length} reviews)</h4>
                                <Form onSubmit={submitHandler}>
                                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                        <span onClick={()=> setTourRating(1)}>
                                            1 <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={()=> setTourRating(2)}>
                                            2 <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={()=> setTourRating(3)}>
                                            3 <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={()=> setTourRating(4)}>
                                           4 <i class="ri-star-s-fill"></i>
                                        </span>
                                        <span onClick={()=> setTourRating(5)}>
                                            5 <i class="ri-star-s-fill"></i>
                                        </span>
                                    </div>

                                    <div className='review__input'>
                                        <input type="text" ref={reviewMsgRef} placeholder='chia sẻ suy nghĩ của bạn' required />
                                        <button className='btn primary__btn text-white' type='submit'>Submit</button>
                                    </div>
                                </Form>
                                <ListGroup className='user__reviews'>
                                        {
                                            reviews?.map(reviews=>(
                                                <div className='review__item'>
                                                    <img src={avatar} alt=''/>
                                                    <div className='w-100'>
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h5>Huy</h5>
                                                                <p>
                                                                    {new Date('12-10-2023').toLocaleDateString(
                                                                        'en-VN', options
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                5<i class="ri-star-s-fill"></i>
                                                            </span>
                                                        </div>
                                                        <h6>Chuyến đi rất vui</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <Booking tour={tour} avgRating={avgRating} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TourDetails