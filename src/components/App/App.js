import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js'
import Axios from 'axios';


class App extends Component {

  state = {
    galleryList: []
  }

  componentDidMount() {
    this.getGallery();
  }
  getGallery = () => {
    Axios.get('/gallery').then(response => {
      this.setState({
        galleryList: response.data
      });
      console.log(this.state.galleryList);
      
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList galleryList={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
