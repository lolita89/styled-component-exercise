import React from 'react';
// import PropTypes from 'prop-types';

class Statement extends React.Component {

    render() {
        return (
            <div>
               <h2>{this.props.data}</h2>
            </div>
        );
    }
}

// Statement.propTypes = {};

export default Statement;