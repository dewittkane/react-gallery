import React, { Component } from 'react';
class GalleryItem extends Component {
    render() {
        return(
            <div><img src={this.props.image.path} alt={this.props.image.description}></img></div>
        );
    };
};
export default GalleryItem;