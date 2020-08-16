import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class GalleryForm extends Component {
    render() {
        return(
            <form>
                <TextField id="filled-basic" value={this.props.newImage.url} onChange={this.props.handleChangeFor('url')} type='text' helperText='URL' placeholder='yummyfood.com/pics'/>
                <br></br>
                <TextField value={this.props.newImage.description} onChange={this.props.handleChangeFor('description')} type='text' helperText='Description' placeholder='this food was bomb!'/>
                <br></br>
                <Button variant="contained" color="primary" onClick={this.props.submitImage}>Post Image</Button>
            </form>
        );
    };
};
export default GalleryForm;