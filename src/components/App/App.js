import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js'
import GalleryForm from '../GalleryForm/GalleryForm.js'
import Axios from 'axios';


class App extends Component {

  state = {
    newImage: {
      url: '',
      description: ''
    },
    gallery: []
  }//declares state, our friendly, local variable storage!

  componentDidMount() {
    this.getGallery();
  };//similar to doc ready, this will get our data from the server/db once the "app component" has finished mounting

  submitImage = (event) => {
    event.preventDefault();
    if (this.state.newImage.url && this.state.newImage.description){
      Axios.put('/gallery', this.state.newImage).then( response =>
        this.getGallery()
        ).catch((error) => {
          console.log(error);
        })} else {
          alert('Please input both a valid url and a description!')
          return;
        } 
    
    this.setState({
      newImage: {
        url: '',
        description: ''
      }
    })
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newImage: {
        ...this.state.newImage,
        [propertyName]: event.target.value
      }
    });
  }

  

  getGallery = () => {
    Axios.get('/gallery').then(response => {
      this.setState({
        gallery: response.data
      });
      console.log(this.state.gallery);
    }).catch((error) => {
      console.log(error);
  });//this function uses axios to talk to our server and get our database or information and store it in state upon return
  }
  handleLike = (id) => {
    Axios.put(`/gallery/like/${id}`).then(response => {
      console.log(response);
      this.getGallery();
    }).catch((error) => {
      console.log(error);
    })
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryForm newImage={this.state.newImage} handleChangeFor={this.handleChangeFor} submitImage={this.submitImage}/>
        <br/>
        <GalleryList handleLike={this.handleLike} gallery={this.state.gallery}/>
      </div>
    );
  }
}

export default App;
