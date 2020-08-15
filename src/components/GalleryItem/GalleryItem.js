import React, { Component } from 'react';
class GalleryItem extends Component {

    state = {
        showImage: true
    }

    toggleState = () => {
        this.setState({
            showImage: !this.state.showImage
        })
    }

    render() {
        return(
            <div onClick={this.toggleState}>
            {this.state.showImage ? <img src={this.props.image.path} alt={this.props.image.description}/> : <p>{this.props.image.description}</p>}
            </div>
        );
    };
};
export default GalleryItem;