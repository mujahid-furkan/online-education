import React, { useState } from 'react'
import { Container,Row,Col } from 'reactstrap';
import './Newsletter.css'


const Newsletter = () => {
  const [subscribe,setSubscribe]=useState('')

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <div className="newsletter">
            <h2 className='mb-3'>Subscribe Our Newsletter!</h2>
            <div className="subscribe">
                <input className='ms-2' type="text" placeholder='Your Email' value={subscribe} onChange={(e)=>setSubscribe(e.target.value)} />
                <button className='btn'>Subscribe</button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter