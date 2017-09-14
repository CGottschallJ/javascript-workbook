import React, { Component } from 'react';

class DisplayCard extends Component {

  render() {
    const image = this.props.sprites ? this.props.sprites.front_default : '';
    const name = this.props.name ? this.props.name : 'That is not a Pokemon! Try again, please.';

    return (
      <div className="DisplayCard">
        <h1>{name.toUpperCase()}</h1>
        <h3>{this.props.id}</h3>
        <img src= {image} />
      </div>
    );
  }
}

export default DisplayCard;
