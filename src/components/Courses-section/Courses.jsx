import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import Img1 from '../../assests/images/graphics-design.png';
import Img2 from '../../assests/images/web-design.png';
import Img3 from '../../assests/images/web-development.png';
import Img4 from '../../assests/images/ui-ux.png';
import './Courses.css';
import CourseCard from './CourseCard';

const courseData=[
  {
    id:1,
    title:'Mearn Stack web Development',
    lession:12,
    student:22,
    rating:19,
    imgUrl:Img2
  },
  {
    id:2,
    title:'Grapics Design With Freelancing',
    lession:22,
    student:20,
    rating:18.3,
    imgUrl:Img1
  },
  {
    id:3,
    title:'Web Design & Development wordpress',
    lession:26,
    student:24,
    rating:22,
    imgUrl:Img4
  },
  {
    id:4,
    title:'Ui&Ui Designer With Figma',
    lession:20,
    student:54,
    rating:44,
    imgUrl:Img3
  },
  {
    id:5,
    title:'Mearn Stack web Development',
    lession:12,
    student:22,
    rating:19,
    imgUrl:Img2
  },
  {
    id:6,
    title:'Grapics Design With Freelancing',
    lession:22,
    student:20,
    rating:18.3,
    imgUrl:Img1
  },
  {
    id:7,
    title:'Web Design & Development wordpress',
    lession:26,
    student:24,
    rating:22,
    imgUrl:Img4
  },
  {
    id:8,
    title:'Ui&Ui Designer With Figma',
    lession:20,
    student:54,
    rating:44,
    imgUrl:Img3
  },
]

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
     
         <h1>Our Popular Courses</h1>
         
            {
              courseData.map(item=>(
                <Col lg='3'>
                <CourseCard key={item.id} {...item}/>
                </Col>
              ))
            }
        </Row>
      </Container>
    </section>
  )
}

export default Courses