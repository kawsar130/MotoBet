import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MotorcycleDetail from "./Pages/MotorcycleDetail/MotorcycleDetail";
import AllMotorcycles from "./Pages/AllMotorcycles/AllMotorcycles";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <NavBar></NavBar>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/allMotorcycles">
                            <AllMotorcycles></AllMotorcycles>
                        </Route>
                        <PrivateRoute path="/motorcycle/:motorcycleId">
                            <MotorcycleDetail></MotorcycleDetail>
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard">
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
