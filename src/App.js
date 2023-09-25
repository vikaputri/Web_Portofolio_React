import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Project from "./containers/Project";
import ComingSoon from "./containers/ComingSoon";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={Profil} exact />
          <Route path="/Education" component={Education} exact />
          <Route path="/Experience" component={Experience} exact />
          <Route path="/Project" component={Project} exact />
          <Route path="/ComingSoon" component={ComingSoon} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;