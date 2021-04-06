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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/signup" exact component={Signup} />
        <Route path="/auth/login" exact component={Login} />
        <Route path="/preview" exact component={PreviewView} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  );
}

export default App;