import React, { useState } from 'react'
import { Container,Row,Col } from 'reactstrap';
import './ChooseUs.css';
import chooseImg from '../../assests/images/why-choose-us.png';
import {BsPlayCircle} from 'react-icons/bs';
import ReactPlayer from 'react-player'
const ChooseUs = () => {
  const [showVideo,setShowVideo]=useState(false)
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className='choose_content'>
            <h2>Why Choose Us?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptatum, eaque pariatur modi aliquam praesentium corporis quasi quisquam numquam deserunt dicta fuga, soluta animi libero at in ut similique perferendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptatum, eaque pariatur modi aliquam praesentium corporis quasi quisquam numquam deserunt dicta fuga, soluta animi libero at in ut similique perferendis. soluta animi libero at in ut similique perferendis.</p>
          </div>
          </Col>

          <Col lg='6'>
          <div className='choose_img'>
            {
               showVideo ? <ReactPlayer url='https://www.youtube.com/watch?v=Dhp4H706Ra4' controls width='100%' height='300px'/>:<img src={chooseImg} alt="" className='w-100'/>
           
            }
            
            {
              !showVideo&& <span className='play_icon'>
              <BsPlayCircle size={25} color='teal' onClick={()=>setShowVideo(!showVideo)}/>
              </span>
            }
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUs