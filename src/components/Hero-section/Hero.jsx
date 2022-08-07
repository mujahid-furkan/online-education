import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../../assests/images/hero-img1.png';
import './Hero.css'
const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
             <div className="hero_content">
             <h2 className='mb-4'>Anytime Anywhere Learn Your Suitable Schedule</h2>
              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta natus aliquam vero veniam perferendis saepe aperiam in quis rerum!</p>

              <div className="search">
                <input type="text" placeholder='Search'/>
                <button className='btn'>Search</button>

              </div>
             </div>
          </Col>
          <Col lg='6' md='6'>
            <img src={heroImg} alt="Hero Image" className='w-100'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero