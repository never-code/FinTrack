import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Emi } from "./components/Pages/Emi";
import {News} from "./components/Pages/News";
import { Contact } from "./components/Pages/Contact";
import { First } from "./components/Pages/first";
import Footer from "./components/Footer/Footer";
const App = () => {
    return (
   
        <div>
             <>
        <Router>
          <Navbar />
  
          <div className="pages">
            <Switch>
            <Route exact path="/" component={First} />
              <Route exact path="/expensecal" component={Home} />
              <Route path="/emi" component={Emi} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
        <Footer/>
          </>
        </div>
    )

}
export default App;
