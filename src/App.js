import "./styles.css";
import TopMenu from "./components/TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/pages/Products";
import { CardProvier } from "./components/contexts/Card";
export default function App() {
  return (
    <CardProvier>
      <Router>
        <div className="App">
          <TopMenu />
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/products" component={Products}></Route>
        </div>
      </Router>
    </CardProvier>
  );
}
const Index = () => <h2>helllo</h2>;
