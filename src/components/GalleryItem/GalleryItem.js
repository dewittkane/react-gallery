import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './GalleryItem.css'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";


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
            <Grid item xs={6} md={4}  >
                <Paper>
                    {this.state.showImage 
                    ? 
                    <img onClick={this.toggleState} src={this.props.image.path} alt={this.props.image.description}/> 
                    :  
                    <>  
                        <div class="seethroughparent">               
                            <img onClick={this.toggleState} class="seethrough" src={this.props.image.path} alt={this.props.image.description}/> 
                            <p class="ontop" onClick={this.toggleState} >{this.props.image.description}</p>
                        </div>
                    </>}      
                    <p>{this.props.image.likes ? `This photo has ${this.props.image.likes} likes.` : "Be the first to like this!"}</p>
                    <Button variant="contained" onClick={() => this.props.handleLike(this.props.image.id)}>YUM</Button>
                    {this.props.deleteMode && <Button variant="contained" color="secondary" onClick={() => this.props.deleteImage(this.props.image.id)}>Delete</Button>}
                </Paper>
            </Grid>
        );
    };
};
export default GalleryItem;