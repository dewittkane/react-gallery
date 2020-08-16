import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js'

class GalleryList extends Component {
    render() {
        return(
            <>
                <div>
                    {this.props.gallery.map(image => (
                        <GalleryItem 
                            key={image.id} 
                            handleLike={this.props.handleLike} 
                            image={image} 
                            deleteMode={this.props.deleteMode}
                            deleteImage={this.props.deleteImage}
                        />
                    ))}
                </div>
            </>
        );
    };
};
export default GalleryList;