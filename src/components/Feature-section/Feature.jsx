import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {RiDraftLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {TbCertificate} from 'react-icons/tb'
import './Feature.css'
const featureData=[
    {
      title:'Quick Learning',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, necessitatibus inventore. Distinctio expedita alias porro? Eligendi, necessitatibus inventore.',
      icon:RiDraftLine
    },
    {
      title:'Full-Time Support',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, necessitatibus inventore. Distinctio expedita alias porro? Eligendi, necessitatibus inventore.',
      icon:BiMessageRoundedDetail
    },
    {
      title:'Certification',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, necessitatibus inventore. Distinctio expedita alias porro? Eligendi, necessitatibus inventore.',
      icon:TbCertificate
    },


]

const Feature = () => {
  return (
    <section>
      <Container>
        <Row>
        {
          featureData.map((item,index)=>(
            <Col lg='4' key={index}>
            <div className='single_feature text-center p-2'>
              <h2>
                <item.icon size={33} color='teal'/>
              </h2>
              <h6>{item.title}</h6>
              <p>{item.desc}</p>
            </div>
            </Col>
          ))
        }
         
        </Row>
      </Container>
    </section>
  )
}

export default Feature