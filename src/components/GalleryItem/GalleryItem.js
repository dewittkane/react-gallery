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
            <>
                <div onClick={this.toggleState}>
                {this.state.showImage ? <img src={this.props.image.path} alt={this.props.image.description}/> : <p>{this.props.image.description}</p>}
                </div>
                <p>{this.props.image.likes ? `This photo has ${this.props.image.likes} likes.` : "This photo doesn't have any likes :["}</p>
                <button onClick={() => this.props.handleLike(this.props.image.id)}>I WANT TO EAT THAT</button>
                {this.props.deleteMode && <button onClick={() => this.props.deleteImage(this.props.image.id)}>Delete</button>}
            </>
        );
    };
};
export default GalleryItem;