import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sub from './sub'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img-1.png';
import img2 from './img-2.png';
import img3 from './img-3.png';
import img4 from './img-4.png';
import {Card, Button, CardDeck} from 'react-bootstrap';


class App extends Component {
  state = {
    pageNum: 100,
  }
  changePageNum = (pageNum) => {
    this.setState({pageNum:pageNum});
  }
  render() {
    return (
      <div>
          <div className="nav-bar">
            <input onClick={()=>{this.changePageNum(100)}} type="button" className="nav-bar-elements" value="Donate-a-bull"></input>
          </div>
          
          {(this.state.pageNum === 0) ? 
            <div>
                <header className="App-header">
                  <div className="whl-div">
                    <header className="head-tag">Which of these has the most importance?</header>
                    <input onClick={()=>{this.changePageNum(1)}} type="button" className="questions" value="Nature"></input>
                    <input onClick={()=>{this.changePageNum(2)}} type="button" className="questions" value="Medicine"></input>
                    <input onClick={()=>{this.changePageNum(3)}} type="button" className="questions" value="Education"></input>
                    <input onClick={()=>{this.changePageNum(4)}} type="button" className="questions" value="Internal Affairs"></input>
                    <input onClick={()=>{this.changePageNum(4)}} type="button" className="questions" value="Random"></input>
                  </div>
                </header>
            </div> 
          : 
          (this.state.pageNum === 1) ?
          <div>
          <header className="App-header">
            <div className="whl-div">
              <header className="head-tag">In regards to the Enviornment, would you like to donate to ...</header>
              <input onClick={()=>{this.changePageNum(5)}} type="button" className="questions" value="Animals"></input>
              <input onClick={()=>{this.changePageNum(6)}} type="button" className="questions" value="Ecological"></input>
            </div>
          </header>
          </div>
          : 
          (this.state.pageNum === 2) ?
          <div>
          <header className="App-header">
            <div className="whl-div">
              <header className="head-tag">Medicine tree</header>
              <input onClick={()=>{this.changePageNum(9)}} type="button" className="questions" value="Disease Prevention"></input>
              <input onClick={()=>{this.changePageNum(10)}} type="button" className="questions" value="Mental Health Awareness"></input>
              <input onClick={()=>{this.changePageNum(11)}} type="button" className="questions" value="Care funds"></input>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 3) ?
          <div>
          <header className="App-header">
            <div className="whl-div">
              <header className="head-tag">Education</header>
              <input onClick={()=>{this.changePageNum(13)}} type="button" className="questions" value="Primary Education"></input>
              <input onClick={()=>{this.changePageNum(14)}} type="button" className="questions" value="Undergrauate Research"></input>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 4) ?
          <div>
          <header className="App-header">
            <div className="whl-div">
              <header className="head-tag">International Affairs</header>
              <input onClick={()=>{this.changePageNum(17)}} type="button" className="questions" value="Disaster Relief"></input>
              <input onClick={()=>{this.changePageNum(18)}} type="button" className="questions" value="Impoverished Countries"></input>
              <input onClick={()=>{this.changePageNum(19)}} type="button" className="questions" value="Food Assistance"></input>
              <input onClick={()=>{this.changePageNum(20)}} type="button" className="questions" value="Necessity Assistance"></input>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 5) ?
          <div>
          <header className="App-header">
            <div className="whl-div">
              <header className="head-tag">What type of animal organization would you like to donate to?</header>
              <input onClick={()=>{this.changePageNum(6)}} type="button" className="questions" value="Wild"></input>
              <input onClick={()=>{this.changePageNum(22)}} type="button" className="questions" value="Domestic"></input>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 6) ?
          <div>
          <header className="App-header">
            <div classNames="cards">
              <p className="head-tag">Here are links that you might like to donate to</p>
              <CardDeck>
              <Card className="card-tags" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={img1} width={300} height={170} />
                <Card.Body>
                    <Card.Title>The American Society for the Prevention of Cruelty to Animals®</Card.Title>
                    <Card.Text>The American Society for the Prevention of Cruelty to Animals® (ASPCA) is a national leader in animal rescue, protection and placement, and has worked tirelessly for over 150 years to put an end to animal abuse and neglect.</Card.Text>
                    <Button href="https://secure.aspca.org/donate/2019-eap-dgf1-web-c-T1-P1?ms=wb_hom_position1-dgf1-c-20190320&initialms=wb_hom_position1-dgf1-c-20190320&pcode=WEB1HOM&lpcode=WEB2HOM">Donate</Button>
                </Card.Body>
              </Card>
              <Card className="card-tags" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={img3} width={300} height={170} />
                <Card.Body>
                  <Card.Title>The humane league </Card.Title>
                  <Card.Text>
                  We exist to end the abuse of animals raised for food. We work to reform the way farm animals are treated while also inspiring people to make more compassionate food choices. Our strategy includes hard-hitting corporate campaigns and wide-ranging outreach and education programs, supported by an extensive network of organizations, activists and supporters around the world.                  </Card.Text>
                  <Button href="https://secure.everyaction.com/cG8HRvst7kCtYR-AxtqC3w2">Donate</Button>
              </Card.Body>
            </Card>
              <Card className="card-tags" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={img4} width={300} height={170} />
                <Card.Body>
                  <Card.Title>Best friends animal society </Card.Title>
                  <Card.Text>
                  Your contribution to Best Friends goes straight to work helping tens of thousands of animals—both at the Sanctuary and through outreach and rescue programs all across the country.                   </Card.Text>
                  <Button href="https://support.bestfriends.org/site/Donation2?df_id=2884&mfc_pref=T&2884.donation=form1&gclid=EAIaIQobChMI77upyd6Z4QIVxlSGCh3yPwuvEAAYASAAEgJ2p_D_BwEhttps://secure.everyaction.com/cG8HRvst7kCtYR-AxtqC3w2">Donate</Button>
              </Card.Body>
            </Card>
            </CardDeck>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 7) ?
          <div>
          <header className="App-header">
            <div className="whl-div">
              <header className="head-tag">Which of these has the most importance?</header>
              <input onClick={()=>{this.changePageNum(29)}} type="button" className="questions" value="3-2 Input Button"></input>
              <input onClick={()=>{this.changePageNum(30)}} type="button" className="questions" value="3-2 Input Button"></input>
              <input onClick={()=>{this.changePageNum(31)}} type="button" className="questions" value="3-2 Input Button"></input>
              <input onClick={()=>{this.changePageNum(32)}} type="button" className="questions" value="3-2 Input Button"></input>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 8) ?
          <div>
          <header className="App-header">
            <div>
              <header className="head-tag">Which of these has the most importance?</header>
              <input onClick={()=>{this.changePageNum(33)}} type="button" className="questions" value="4-2 Input Button"></input>
              <input onClick={()=>{this.changePageNum(34)}} type="button" className="questions" value="4-2 Input Button"></input>
              <input onClick={()=>{this.changePageNum(35)}} type="button" className="questions" value="4-2 Input Button"></input>
              <input onClick={()=>{this.changePageNum(36)}} type="button" className="questions" value="4-2 Input Button"></input>
            </div>
          </header>
          </div>
          : (this.state.pageNum === 100) ?
            <div className="title-page">
              <p className="title-page-text">There are hundreds of charitable organizations as well as social parties willing to improve the environment and life. Along these associations, many individuals also want to contribute something to make the world better, and one of the most realistic action is through donation. Every person has their own choices, while there are countless organizations are ranging from all categories and aspects for them to choose. Thus, it’s challenging for donators to have their most suitable option. As a result, our website Donate-a-bull has come into existence to navigate those donators, providing them the lists of organizations fulfilling their requirements. There will be some questions requiring to be answered, which will then be collected and analyzed by us before offering the organizations that might fit the most to contributors. They will no longer have to waste time searching through the internet, opt out the unreal organizations or scammers, and end up with a great and meaningful association but doesn’t fit them. Hence, our website will not only save a lot of donators’ time but also encourage people to donate and help organizations.</p> 
              <div className="title-bottom">
                <img src={img1} width={200} height={200} className="title-bottom-item" alt="image-left"></img>  
                <input onClick={()=>{this.changePageNum(0)}} type="button" className="questions" value="Start Here"></input>
                <img src={img2} width={200} height={200} className="title-bottom-item" alt="image-right"></img>
              </div>
            </div> 
          : ""
          }
        </div>
    );
  }
}

export default App;
