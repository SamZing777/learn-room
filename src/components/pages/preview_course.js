import React from "react";
import Navigation from "../partials/navigation";
import learn_javascript from "../../assets/learn_javascript.jpeg";
import Footer from "../partials/footer";
import {
  FaClock,
  FaDownload,
  FaGlobe,
  FaLanguage,
  FaPlayCircle,
  FaStar,
  FaCheck,
  FaFileVideo,
  FaFile,
  FaCloudDownloadAlt,
  FaMobileAlt,
  FaCertificate,
  FaRecycle,
} from "react-icons/fa";
import UserReview from "../partials/user_review";
const tempReviews = [
  {
    name: "Sancho delacus",
    review_message:
      "i loved every minute of the lecture, instructor went straight to the point",
  },
  {
    name: "Patrick daave",
    review_message:
      "I really enjoyed how beginner friendly the course it , really concise and coherrent.",
  },
];

const renderReviews = tempReviews.map((review, index) => {
  return <UserReview review={review} key={index} />;
});
const PreviewCourse = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="course-preview-container">
        <section className="course-description">
          <div className="video-container">
            {/* tmp thumbnail */}
            <div className="video">
              <img src={learn_javascript} alt="learn javascript" />
              <button className="play-button" style={{ color: "green" }}>
                <FaPlayCircle />
              </button>
            </div>

            <div className="desk-action-container">
              <a href="#add_to_cart" className="add-to-cart">
                Add to cart
              </a>
              <a href="#add_to_cart">Buy now</a>
            </div>
            <div className="desk-course-includes">
              <h3>This Course includes: </h3>
              <div>
                <span className="icon">
                  <FaFileVideo />
                </span>
                <span>21.5 hours on demand video</span>
              </div>
              <div>
                <span className="icon">
                  <FaFile />
                </span>
                <span>2 articles</span>
              </div>
              <div>
                <span className="icon">
                  <FaCloudDownloadAlt />
                </span>
                <span>111 downloadable resources</span>
              </div>
              <div>
                <span className="icon">
                  <FaRecycle />
                </span>
                <span>Full lifetime access</span>
              </div>
              <div>
                <span className="icon">
                  <FaMobileAlt />
                </span>
                <span>Acces on both mobile and TV</span>
              </div>
              <div>
                <span className="icon">
                  <FaCertificate />
                </span>
                <span>Certificate of completion</span>
              </div>
            </div>
          </div>

          {/* about the course */}
          <div className="about-course">
            <h3 className="title">Learn Javascript from scratch(ES6)</h3>
            <p className="description">
              Learn to build projects with pure javascript (No Frameworks or
              Libraries)
            </p>
            <div className="star-rating">
              <div class="star-rating-container">
                <span className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="total-rated">(12,621)</span>
                <span className="total-students">80,000 students</span>
              </div>

              <div className="created-by">
                <p>
                  Created by <a href="#toinstructor">Dest ian</a>
                </p>
              </div>
              <div className="offers">
                <div class="an-offer">
                  <FaDownload />
                  <span>Last updated 12/12/2020</span>
                </div>
                <div class="an-offer">
                  <FaGlobe />
                  <span>English</span>
                </div>
                <div class="an-offer">
                  <FaLanguage />
                  <span> English [Auto]</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="price-and-add">
            <div className="price">
              <span>N3800</span>
              <span className="slashed">N40,000</span>
              <span>91% off</span>
            </div>
            <p style={{ color: "red" }} className="price-count">
              <FaClock />
              <span>2 days left at this price</span>
            </p>
            <div>
              <a className="link-btn" href="#addtocart">
                Add to cart
              </a>
            </div>
            <p className="price-durations"> 15 days left at this price</p>
            <div className="other-actions">
              <button>Add to wishlist</button>
              <button>Share</button>
              <button>Gift this Course</button>
              <button>Apply Coupon</button>
            </div>
          </div>
          <div className="what-you-will-learn">
            <h3>What you'll learn</h3>
            <p>
              <span className="check">
                <FaCheck />
              </span>{" "}
              Modulat learning sections and 10 real world projects
            </p>
            <p>
              <span className="check">
                <FaCheck />
              </span>{" "}
              Modulat learning sections and 10 real world projects
            </p>
            <p>
              <span className="check">
                <FaCheck />
              </span>{" "}
              Modulat learning sections and 10 real world projects
            </p>
            <p>
              <span className="check">
                <FaCheck />
              </span>{" "}
              Modulat learning sections and 10 real world projects
            </p>
            <p>
              <span className="check">
                <FaCheck />
              </span>{" "}
              Modulat learning sections and 10 real world projects
            </p>
          </div>
          <div className="course-content">
            <h3>Course Content</h3>
            <div>
              <span>14 sections</span>
              <span>122 lectures</span>
              <span>21h 42 total length</span>
            </div>
          </div>
          <div className="course-includes">
            <h3>This Course includes: </h3>
            <div>
              <span className="icon">
                <FaFileVideo />
              </span>
              <span>21.5 hours on demand video</span>
            </div>
            <div>
              <span className="icon">
                <FaFile />
              </span>
              <span>2 articles</span>
            </div>
            <div>
              <span className="icon">
                <FaCloudDownloadAlt />
              </span>
              <span>111 downloadable resources</span>
            </div>
            <div>
              <span className="icon">
                <FaRecycle />
              </span>
              <span>Full lifetime access</span>
            </div>
            <div>
              <span className="icon">
                <FaMobileAlt />
              </span>
              <span>Acces on both mobile and TV</span>
            </div>
            <div>
              <span className="icon">
                <FaCertificate />
              </span>
              <span>Certificate of completion</span>
            </div>
          </div>

          <div className="requirements-description">
            <h3>Requirements</h3>
            <p>Basic HTML / CSS Knowledge</p>
            <h3>Description</h3>
            <p>
              This is a front to back javascript course for absolutely
              everybody. We start with the basic fundamentals and work our way
              to advanced programing without relying on any frameworks or
              libraries.
            </p>
          </div>
          <div className="instructor-and-feedback">
            <h3>Instructor</h3>
            <p className="instructor-name">Bimbo Oshin</p>
            <p className="title">Fullstack Web Developer & Trainee at Andela</p>
            <p className="about">
              Bimbo oshin has been programming for around a decade and teaching
              for 5 years. She is a passionate lady and a traine in the giant
              Outsoucing I.T company, Andela...
            </p>
          </div>

          <div className="reviews">
            <h3> Reviews</h3>
            <div className="reviews-container">{renderReviews}</div>
            <a href="#more">See more reviews</a>
          </div>
          {/* <div className="more-courses">
          <h3>More courses by Instructor</h3>
        </div> */}
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PreviewCourse;
