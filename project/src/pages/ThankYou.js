import React from 'react'
import { Container,Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
import Newsletter from'../shared/Newsletter'



const ThankYou = () => {
    return <><section>
        <Container>
            <Col lg= '12' className='pt-5 text-center'>
                <div className='thank__you'>
                    <span>
                        <i class="ri-checkbox-circle-line"></i>
                    </span>
                    <h1 className='mb-3 fw-semibold'>Cảm ơn bạn đã ủng hộ </h1>
                    <h3 className='mb-4'>Đặt vé thành công</h3>
                    <Button className='btn primary__btn w-25'>
                        <Link to="/home">Trở về trang chủ</Link>
                    </Button>


                </div>
            </Col>
        </Container>
    </section>
    <Newsletter/>
    </>
    
    
}

export default ThankYou