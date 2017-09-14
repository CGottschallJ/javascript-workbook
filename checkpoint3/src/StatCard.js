import React, { Component } from 'react';

class StatCard extends Component {

  render() {

    return (
      <div className="StatCard">
        <p>{this.props.abilities}</p>
      </div>
    );
  }
}

export default StatCard;
