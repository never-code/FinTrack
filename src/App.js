import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Emi } from "./components/Pages/Emi";
import {News} from "./components/Pages/News";
import { Contact } from "./components/Pages/Contact";
import { First } from "./components/Pages/first";
const App = () => {
    return (
   
        <div>
             <>
        <Router>
          <Navbar />
  
          <div className="pages">
            <Switch>
            <Route exact path="/" component={First} />
              <Route exact path="/budget-tracker" component={Home} />
              <Route path="/emi" component={Emi} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
          </>
        </div>
    )

}
export default App;
