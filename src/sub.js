import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sub extends Component {
  
  
  render(){
    return (
      <div>
        <header className="App-header">
              <div>
                <header className="head-tag">Which of these has the most importance?</header>
                <input type="button" className="questions" value="Input Button"></input>
                <input type="button" className="questions" value="Input Button"></input>
                <input type="button" className="questions" value="Input Button"></input>
                <input type="button" className="questions" value="Input Button"></input>
              </div>
            </header>
      </div>
    );
  }
};


export default Sub;
