import React from 'react';
import image from 'react-bootstrap/image';

class HornedBeasts extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <img src={this.props.img} alt=''/>
        <p> {this.props.description}</p>
      </>
    )
  }
};

export default HornedBeasts;