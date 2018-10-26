import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Statement from './Statement';

const ButtonClick = styled.button`
    width: 5em;
    height: 5em;
    margin: 2em;
    font-size: 1em;
    font-weight: bold;
    background-color: ${props => props.plus ? "green" : "red"};
    color: black;

    :hover {
        color: white;
    }
`;

//override styles
const ResetButton = styled(ButtonClick)`
    background-color: yellow;
    :hover {
        color: red;
    }
`

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
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

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
            <ButtonClick plus onClick={this.increment}>
                +
            </ButtonClick>

            <ButtonClick onClick={this.decrement}>
                -
            </ButtonClick>

            <ResetButton onClick={this.reset}>
                Reset
            </ResetButton>

            <Statement data={this.state.count}/>
            </div>
            
        );
    }
}

// Button1.propTypes = {};

export default Button;
