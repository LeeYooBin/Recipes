import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
    const {characters} = this.state;
    return (

      <Router>
      <div>
       <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">RECIPES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Recipes</Nav.Link>
              <Nav.Link href="/">Subscribe</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
              <div className="container">
                <h1 style={{textAlign: 'center'}}>Hello, React!</h1>
              </div>
          </Route>
        </Switch> 
      </div>
    </Router>

    );
}
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

