import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js'
import Axios from 'axios';


class App extends Component {

  state = {
    gallery: []
  }//declares state, our friendly, local variable storage!

  componentDidMount() {
    this.getGallery();
  };//similar to doc ready, this will get our data from the server/db once the "app component" has finished mounting

  getGallery = () => {
    Axios.get('/gallery').then(response => {
      this.setState({
        gallery: response.data
      });
      console.log(this.state.gallery);
    })
  };//this function uses axios to talk to our server and get our database or information and store it in state upon return

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList gallery={this.state.gallery}/>
      </div>
    );
  }
}

export default App;
