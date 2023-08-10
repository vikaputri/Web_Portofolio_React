import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import ComingSoon from "./containers/ComingSoon";
import Education from "./containers/Education";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={Profil} exact />
          <Route path="/Education" component={Education} exact />
          <Route path="/Experience" component={ComingSoon} exact />
          <Route path="/Project" component={ComingSoon} exact />
          <Route path="/ComingSoon" component={ComingSoon} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;