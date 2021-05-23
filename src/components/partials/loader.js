import React from "react";

const Placeholder = () => {
  return (
    <div className="placeholder-container">
      <div className="thumbnail"></div>
      <div className="title"></div>
      <div className="text" />
      <div className="text" />
      <div className="text" />
    </div>
  );
};
const Loader = () => {
  return (
    <div className="loader-container">
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

export default Loader;
