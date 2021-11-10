import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import NavBar from "./Shared/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar></NavBar>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
