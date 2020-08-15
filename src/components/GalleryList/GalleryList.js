import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js'

class GalleryList extends Component {
    render() {
        return(
            <>
                <div>
                    {this.props.gallery.map(image => (
                        <GalleryItem key={image.id} image={image} />
                    ))}
                </div>
            </>
        );
    };
};
export default GalleryList;