import "../../styles/main.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Blog from "../Home/Blogs/Blog";
import { createContext, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";

export const UserContext = createContext();

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/blog/:key'>
            <Blog />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
