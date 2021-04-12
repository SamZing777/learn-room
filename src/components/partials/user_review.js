import React from "react";
import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const UserReview = ({ review }) => {
  const { name, review_message } = review;
  return (
    <div className="user-review">
      <h3>{name}</h3>
      <div className="rating-and-time">
        <span className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <span className="time"> 20 days ago</span>
      </div>
      <p className="review-message">{review_message}</p>
      <p>Was this review helpful ?</p>
      <div className="reaction">
        <button className="thumbs-up">
          <FaThumbsUp />
        </button>
        <button className="thumbs-down">
          <FaThumbsDown />
        </button>
        <button className="report">report</button>
      </div>
    </div>
  );
};

export default UserReview;
