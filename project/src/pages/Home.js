import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'



const Home = () => {
    return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Biết trước khi bạn đi'}/>
                            <img src={worldImg} alt=''/>
                        </div>
                        <h1>Du lịch mở ra cơ hội tạo ra <span
                         className='highloght'>những kỷ niệm</span></h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, esse! Hic eligendi doloremque earum? Quia corrupti soluta corporis animi vitae perspiciatis odit, enim, ipsam sint, repellat excepturi mollitia aliquam quas.</p>
                    </div>
                </Col>

                <Col lg="2">
                    <div className='hero__img-box'>
                        <img src={heroImg} alt=''/>
                    </div>
                </Col>
                <Col lg="2">
                    <div className='hero__img-box mt-4'>
                        <video src={heroVideo} alt='' controls/>
                    </div>
                </Col>
                <Col lg="2">
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt=''/>
                    </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>
{/* giới thiệu*/}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>Những gì chúng tôi phục vụ</h5>
                    <h2 className='services__title'>Chúng tôi cung cấp dịch vụ tốt nhất của chúng tôi</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>
    {/* nơi du lịch */}
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Khám phá'}/>
                    <h2 className='featured__tour-title'>Các tour du lịch nổi bật của chúng tôi</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section>
    {/* kinh nghiệm */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='experience__content'>
                        <Subtitle subtitle={"Kinh nghiệm"}/>
                        <h2>
                        Với tất cả kinh nghiệm <br/> chúng tôi sẽ phục vụ bạn
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing <br/> sit amet consectetur adipisicing
                        
                        </p>
                    </div>

                    <div className='counter__wrapper d-flex align-items-center gap-5'>
                        <div className='counter__box'>
                            <span>12k+</span>
                            <h6>Chuyến đi thành công</h6>
                        </div>
                        <div className='counter__box'>
                            <span>2k+</span>
                            <h6>Khách hàng thường xuyên</h6>
                        </div>
                        <div className='counter__box'>
                            <span>15</span>
                            <h6>Năm kinh nghiệm</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/* phòng trưng bày*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Phòng trưng bày'} />
                    <h2 className='gallery__title'>
                    Ghé thăm phòng trưng bày tour du lịch của khách hàng của chúng tôi
                    </h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>
    {/*đánh giá */}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Người hâm mộ yêu thích'} />
                    <h2 className='testimonial__title'>
                    Người hâm mộ nói gì về chúng tôi
                    </h2>
                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
    );
};

export default Home;