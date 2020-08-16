import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js'
import './GalleryList.css'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";


class GalleryList extends Component {


    render() {
        return(
            
                <Grid container spacing={3} justifyContent="space-between" alignItems='baseline'>
                    {this.props.gallery.map(image => (
                        <GalleryItem 
                            key={image.id} 
                            handleLike={this.props.handleLike} 
                            image={image} 
                            deleteMode={this.props.deleteMode}
                            deleteImage={this.props.deleteImage}
                        />
                    ))}
                </Grid>
            
        );
    };
};
export default GalleryList;