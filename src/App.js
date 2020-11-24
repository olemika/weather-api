import React from "react";
import './App.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Week from "./Week";
import Today from "./Today";

class App extends React.Component {
  render() {
    return(
      <HashRouter>
      <div className="container">
          <h1> Weather app</h1>
          <ul className="header">
              <li><NavLink to="/today">Сегодня</NavLink></li>
              <li><NavLink to="/week">Неделя</NavLink></li>
          </ul>
          <div className="content">
              <Route path="/today" component={Today}/>
              <Route path="/week" component={Week}/>
          </div>
      </div>
      </HashRouter>
  );
}
}

export default App;