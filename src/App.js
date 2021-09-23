import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Buildings from "./screens/Buildings";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/buildings" component={Buildings} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
