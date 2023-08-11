import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Project from "./containers/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={Profil} exact />
          <Route path="/Education" component={Education} exact />
          <Route path="/Experience" component={Experience} exact />
          <Route path="/Project" component={Project} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;