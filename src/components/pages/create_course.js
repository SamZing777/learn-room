import React from "react";
import Footer from "../partials/footer";
import Navigation from "../partials/navigation";

const AddCourse = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container">
        <h3 className="title">Add a new Course</h3>

        <div className="form-container">
          <form>
            <div className="input-container">
              <select>
                <option disabled selected>
                  Select Category
                </option>
                <option>Category a</option>
                <option>Category b</option>
                <option>Category c</option>
                <option>Category d</option>
              </select>
            </div>
            <div className="input-container">
              <select>
                <option disabled selected>
                  Select Sub Category
                </option>
                <option>Category a</option>
                <option>Category b</option>
                <option>Category c</option>
                <option>Category d</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default AddCourse;
