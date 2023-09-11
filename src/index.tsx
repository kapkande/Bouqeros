import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(


  <Router >
    <Switch>
      <Route path="/" element={<App/>} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </Switch>
  </Router>





)
