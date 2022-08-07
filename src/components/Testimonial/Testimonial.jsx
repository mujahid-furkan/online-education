import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import testimonialImg from '../../assests/images/testimonial01.png';
import './Testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='10' className='m-auto'>
          <div className="testimonial_wrapper d-flex justify-content-between align-items-center">
            <div className="testimonial_img w-50">
                <img src={testimonialImg} alt="testimonial" className='w-100' />
            </div>

          <div className="testimonial_content w-50 ps-5">
            <h2 className='mb-4 fw-bold'>Our Student Voice</h2>

            <Slider {...settings}>
            <div>
             <div className="single_testimonial">
                <h6 className='mb-3'>Exelent Course Of Meterials</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo veniam ut iste obcaecati sapiente fugiat soluta animi laboriosam deleniti.</p>

                <div className="student_info mt-4"> 
                  <h6 className='fw-bold'>Arafat Islam</h6>
                  <p>Califonia, United States</p>
                </div>
              </div>
             </div> 
             
             <div>
             <div className="single_testimonial">
                <h6 className='mb-3'>Exelent Course Of Meterials</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo veniam ut iste obcaecati sapiente fugiat soluta animi laboriosam deleniti.</p>

                <div className="student_info mt-4"> 
                  <h6 className='fw-bold'>Amirul Islam</h6>
                  <p>Califonia, United States</p>
                </div>
              </div>
             </div>
             
              <div>
             <div className="single_testimonial">
                <h6 className='mb-3'>Exelent Course Of Meterials</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo veniam ut iste obcaecati sapiente fugiat soluta animi laboriosam deleniti.</p>

                <div className="student_info mt-4"> 
                  <h6 className='fw-bold'>Mujahidul Islam</h6>
                  <p>Califonia, United States</p>
                </div>
              </div>
             </div>
            </Slider>
          </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial