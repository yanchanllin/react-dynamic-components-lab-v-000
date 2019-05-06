import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
<<<<<<< HEAD
      let NowOpacity= this.props.opacity;
      function CurrentColor() {
      if (NowOpacity >=0.2) {
        return <ColorBox opacity={NowOpacity-0.1} />
        }
      }
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
        {CurrentColor()}
=======
    return (
      let NowOpacity= {this.props.opacity};
      if (NowOpacity >=0.2)
      <div className="color-box" style={{opacity: 2}}>
        {NowOpacity-0.1}
        else
        {return null}
>>>>>>> 264b9a7e0aa56a1f38ad6962fdbd6a1825ff4c65
      </div>
    )
  }

}
