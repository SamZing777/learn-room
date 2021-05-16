import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound404 from "./components/pages/404";
import Login from "./components/pages/auth pages/login";
import Signup from "./components/pages/auth pages/signup";
import Home from "./components/pages/home";
import PreviewView from "./components/pages/preview_course";
import "./styles/base.css";
import "./styles/style1.css";
import "./styles/auth.css";
import "./styles/preview_course.css";
import "./styles/style2.css";
import "./styles/style3.css";
import "./styles/assessment.css";
import "./styles/media-query1.css";
import "./styles/media-query2.css";
import "./styles/media-query3.css";

import LiveClass from "./components/pages/live_class";
import CourseCategory from "./components/pages/category";
import AddCourse from "./components/pages/create_course";
import Jobs from "./components/pages/jobs";
import ClassRoom from "./components/pages/class";
import WhyChooseUs from "./components/pages/why_choose_us";
import Assessment from "./components/pages/assessment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/signup" exact component={Signup} />
        <Route path="/auth/login" exact component={Login} />
        <Route path="/preview" exact component={PreviewView} />
        <Route path="/live_class" exact component={LiveClass} />
        <Route path="/category" exact component={CourseCategory} />
        <Route path="/add_course" exact component={AddCourse} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/classroom" exact component={ClassRoom} />
        <Route path="/why_choose_us" exact component={WhyChooseUs} />
        <Route path="/assessment" exact component={Assessment} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  );
}

export default App;
