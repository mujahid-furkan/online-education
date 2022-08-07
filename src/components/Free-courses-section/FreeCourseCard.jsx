import React from "react";
import { AiOutlineUser,AiFillStar } from "react-icons/ai";

const FreeCourseCard = ({ imgUrl, title, students, rating }) => {
  

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <AiOutlineUser/> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <AiFillStar/> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
