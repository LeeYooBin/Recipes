import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
  
    render(){
      const {characters} = this.state;
      return (
  
        <>
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
      </>
  
      );
  }
}