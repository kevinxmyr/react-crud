import React from "react";
import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import Update from "./components/update/Update.js";
import Delete from "./components/delete/Delete";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='main'>
      <nav>
        <ul  style={{listStyle: 'none', display: 'flex'}}>
          <Link to='/create'>
            <li style={{marginRight: '10px'}}>Create</li>
          </Link>
          <Link to='/read'>
            <li>Read</li>
          </Link>
        </ul>
      </nav>
      
        <div style={{ marginBottom: "20px" }}>
          <h3>React CRUD</h3>

          <div>
            <Route exact path='/create' component={Create} />
          </div>

          <div style={{ marginTop: "20px" }}>
            <Route exact path='/read' component={Read} />
          </div>

          <div>
            <Route path='/update' component={Update} />
            <Route exact path='/delete' component={Delete} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
