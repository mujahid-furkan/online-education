import React from 'react'
import './Company.css';
import {Container,Row,Col } from 'reactstrap';
import {RiVimeoLine} from 'react-icons/ri';
import {FiDribbble} from 'react-icons/fi';
import {BsApple,BsGoogle,BsMicrosoft} from 'react-icons/bs';
import {ImPinterest2} from 'react-icons/im';

const Company = () => {
  return (
    <section>
      <Container>
      <Row>
        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
              <RiVimeoLine size={30} color='teal '/> Vimeo</h3>
        </Col>

        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
              <ImPinterest2 color='teal'/> Pinterest</h3>
        </Col>

        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
              <FiDribbble color='teal'/> Dribble</h3>
        </Col>

        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
              <BsApple color='teal'/> Apple</h3>
        </Col>

        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
              <BsGoogle color='teal'/> Google</h3>
        </Col>

        <Col lg='2' md='3'>
          <h3 className='d-flex align-items-center gap-1'>
            <BsMicrosoft color='teal'/> Microsoft</h3>
        </Col>

      </Row>
      </Container>
      
    </section>
  )
}

export default Company