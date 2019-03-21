import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';




class SmallCards1 extends Component {


    componentDidMount() {
        this.props.getItems();

    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    };

    render() {

        const { items } = this.props.item;

        return (
         <div>
                        {items.map(({ _id, name, description }) => (
                            <div>
                            <h2>   {_id}                   {name} </h2>
                                <p>{description}</p>
                            </div>
                                ))}
            </div>     

        );
    }

}

SmallCards1.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(SmallCards1);