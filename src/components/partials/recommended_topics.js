import React from "react";

const RecommendedTopics = () => {
  return (
    <div className="recommended-topics">
      <a href="http://localhost:3000/category/?category=1&title=Finance">
        Finacial Market
      </a>
      <a href="http://localhost:3000/category/?category=4&title=Linguistics">
        Linguistics
      </a>
      <a href="http://localhost:3000/category/?category=3&title=Master Class">
        Master Class
      </a>
      <a href="http://localhost:3000/category/?category=2&title=Professional">
        Professional
      </a>
    </div>
  );
};

export default RecommendedTopics;
