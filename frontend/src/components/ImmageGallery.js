import React from 'react';
import { Media, Col, Row, Container } from 'reactstrap';
import banner from './../img/banner1.jpg';

export default class ImmageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <Container fluid>
                <Row>
            <Col sm="6" md="3" >
                        <Media>
                            <img className="zoom" src={banner} height="150" width="100%" alt="banner" />
                   </Media> 
            </Col>
                    <Col sm="6" md="3">
                <Media>
                            <img className="zoom" src={banner} height="150" width="100%" alt="banner" />
                   </Media> 
            </Col>
                    <Col sm="6" md="3">
                <Media>
                            <img className="zoom" src={banner} Height="150" Width="100%" alt="banner" />
                   </Media> 
            </Col>
                    <Col sm="6" md="3">
                <Media>
                            <img className="zoom" src={banner} Height="150" Width="100%" alt="banner" />
                   </Media> 
                    </Col>
                </Row>
            </Container>


                
               
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};