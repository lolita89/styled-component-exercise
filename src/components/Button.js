import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Statement from './Statement';

const ButtonClick = styled.button`
    background-color: papayawhip;
    color: black;
`;

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
            <ButtonClick onClick={this.increment}>
                +
            </ButtonClick>
            <ButtonClick onClick={this.decrement}>
                -
            </ButtonClick>
            <Statement data={this.state.count}/>
            </div>
            
        );
    }
}

// Button1.propTypes = {};

export default Button;
