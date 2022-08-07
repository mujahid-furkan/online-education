import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import './about.css';
import aboutImg from '../../assests/images/about-us.png'
import CountUp from 'react-countup';

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="about_img">
            <img src={aboutImg} alt="About Image" className='w-100'/>
          </div>
          </Col>

          <Col lg='6' md='6'>
           <div  className="about_content">
           <div>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas consectetur quidem soluta officia mollitia suscipit atque. Officiis, ratione?</p>
            </div>
            <div className="about_counter">
                <div className='d-flex gap-5 align-items-center'>
                <div className="single_count">
                <span className='counter'>
                  <CountUp start={0} end={25} duration={3} suffix='K'/>
                  </span>
                <p className='counter_title'>Complited Projects</p>
                </div>

                <div className="single_count">
                <span className='counter'>
                  <CountUp start={0} end={25} duration={3} suffix='M'/>
                  </span>
                <p className='counter_title'>Patient Around World</p>
                </div>

                
                </div>

                <div className='d-flex gap-5 align-items-center'>
                <div className="single_count">
                <span className='counter'>
                  <CountUp start={0} end={50} duration={3} suffix='K'/>
                  </span>
                <p className='counter_title'>Complited Projects</p>
                </div>

                <div className="single_count">
                <span className='counter'>
                  <CountUp start={0} end={50} duration={3} suffix='M'/>
                  </span>
                <p className='counter_title'>Patient Around World</p>
                </div>

                
                </div>
            </div>
            <button className='btn hire_btn'>Hire Us</button>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs