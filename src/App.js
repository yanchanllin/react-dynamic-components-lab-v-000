import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class App extends Component {

  // Nothing needs to change here!
  // Make note of what prop we are initially passing to `ColorBox` below!

  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
<<<<<<< HEAD

=======
            <Comment/>
>>>>>>> 264b9a7e0aa56a1f38ad6962fdbd6a1825ff4c65
          </div>
      </div>
    )
  }
}

export default App;
