import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import banner from './../img/banner1.jpg';



const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid >

                <img src={banner} height="300" width="100%" alt="banner"></img>
                <h2 className="center">Aiutare orfanotrofi e non solo</h2>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;