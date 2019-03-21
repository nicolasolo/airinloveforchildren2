import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import { Provider } from 'react-redux';
import store from './Store';

import './App.css';
import ShoppingList from './components/ShoppingList';
import { Container } from 'reactstrap';

class App extends Component {
    render() {
        return (

            <Provider store={store}>
                <div className="App">
                    <h1>Hello</h1>
                    <Container>
                        <ShoppingList />
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;

