import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

 import { Link } from 'react-router-dom'
 import logo from "../../assets/images/logo.png"

 const quick__links = [
    {
        path: '/home',
        display: 'Trang chủ'
    },
    {
        path: '/about',
        display: 'Giới thiệu'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]

 const quick_links2 = [
    {
        path: '/gallery',
        display: 'Giới thiệu'
    },
    {
        path: '/Login',
        display: 'Đăng nhập'
    },
    {
        path: '/register',
        display: 'Đăng kí'
    }
]

const Footer = () => {

    const year = new Date().getFullYear
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odit id amet assumenda laudantium hic ea rem enim.</p>

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer__link-title'>Quay lại</h5>

                        <ListGroup className='footer__quick-links'>
                            {
                                quick__links.map((item,index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                        
                    </Col>
                    <Col lg='3'>
                    <h5 className='footer__link-title'>Quay lại</h5>

                        <ListGroup className='footer__quick-links'>
                            {quick_links2.map((item,index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                        <h5 className='footer__link-title'>Thông tin</h5>

                        <ListGroup className='footer__quick-links'>
                            
                                    <ListGroupItem className='ps-0 border-0 d-flex
                                    align-item-center gap-3'>

                                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                                            <span><i class="ri-map-pin-line"></i></span>
                                            Địa chỉ:
                                        </h6>

                                        <p className='mb-0'>Hoa Xuan, Cam Le</p>
                                        
                                    </ListGroupItem>
                                    <ListGroupItem className='ps-0 border-0 d-flex
                                    align-item-center gap-3'>

                                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                                            <span><i class="ri-mail-line"></i></span>
                                            Email:
                                        </h6>

                                        <p className='mb-0'>sinhvien@donga.edu.vn</p>
                                        
                                    </ListGroupItem>
                                    <ListGroupItem className='ps-0 border-0 d-flex
                                    align-item-center gap-3'>

                                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                                            <span><i class="ri-phone-fill"></i></span>
                                            Điện thoại:
                                        </h6>

                                        <p className='mb-0'>0356.841.923</p>
                                        
                                    </ListGroupItem>
                               
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer