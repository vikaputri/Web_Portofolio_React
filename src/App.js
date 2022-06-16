import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import Menu from "./containers/Menu";
import Kontak from "./containers/Kontak";
import FAQ from "./containers/FAQ";
import ComingSoon from "./containers/ComingSoon";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Menu" component={Menu} exact />
          <Route path="/Profil" component={Profil} exact />
          <Route path="/FAQ" component={FAQ} exact />
          <Route path="/Kontak" component={Kontak} exact />
          <Route path="/ComingSoon" component={ComingSoon} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;