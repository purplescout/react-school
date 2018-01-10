import React, { Component } from 'react';
import banner from './image.png';
import './App.css';

/////////////////////////
// Imports needed to develop, more can be added here if needed.
/////////////////////////


//import YoutubeController from './youtube-list-example/youtube-list-example';
//import HelloWorldExample from './helloworld-example/helloworld-example';

////////////////////////
// Comment out the components your not using for easier developing.
// And dont forget to remove the JSX component tag in the return.
///////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={banner} className="banner" alt="banner" />
        <h1 className="App-title">Welcome to Purplescouts React school.</h1>
        <p className="App-intro">
          To start your development simply add your Component's to the src directory. <br/>
          To find the exercises and homework, read the README file on github or in the directory
        </p>
        <p className="emoji">
          (•_•) ( •_•)>⌐■-■ (⌐■_■)
        </p>

        {/*<HelloWorldExample />*/}
        {/*<YoutubeController />*/}
      </div>
    );
  }
}

export default App;
