import React, { Component } from 'react';
import './App.css';
import Jumbo from './components/Jumbotron';
import SmallCards1 from './components/SmallCards1';
import ImmageGallery from './components/ImmageGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import AppBAr from './components/AppBar';
import SmallCArds2 from './components/SmallCArds2';
import SmallCard3 from './components/SmallCard3';
import SwipeableTextMobileStepper from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header">
                <AppBAr/>

            

            </header>
            <Jumbo />
            <Container fluid >
                <Row>
                    <Col sm="auto" md="4" style={{ paddingBottom:10 }} >
                        <SmallCards1 />
                    </Col>
                    <Col sm="auto" md="4" style={{ paddingBottom: 10 }} >
                        <SmallCArds2 />
                    </Col>
                    <Col sm="auto" md="4" style={{ paddingBottom: 10 }} >
                        <SmallCard3 />
                    </Col>
                </Row>
                <br />
            </Container>
            <Container fluid>
                <ImmageGallery />
            </Container>

            <Container className="center" fluid>
                <Container>
                <SwipeableTextMobileStepper className="center" />
                </Container>
            </Container>
      </div>
    );
  }
}

export default App;
