import React from 'react'
import {AiOutlineUser,AiFillStar} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';

const CourseCard = ({imgUrl,title,lession,student,rating}) => {
  return (
    <div className="single_course_item">
    <div className="course_img">
      <img src={imgUrl} alt="" className='w-100'/>
    </div>
    <div className="course_details p-2">
      <h5 className='course"title'>{title}</h5>
      <div className='d-flex justify-content-between align-items-center'>
        <p  className='lession d-flex align-items-center gap-1'>
          <BsBook color='teal'/> {lession} lession
        </p>
        <p  className='student d-flex align-items-center gap-1'>
          <AiOutlineUser color='teal'/> {student}k
        </p>
      </div>
       <div className='d-flex justify-content-between align-items-center'>
        <p  className='rating d-flex align-items-center gap-1'>
          <AiFillStar color='teal'/> {rating}k
        </p>
        <p  className='enrol d-flex align-items-center gap-1'>
          <button className=' enroll-btn'><a href="#">Enrol Now</a></button>
        </p>
      </div>
    </div>
</div>
  )
}

export default CourseCard