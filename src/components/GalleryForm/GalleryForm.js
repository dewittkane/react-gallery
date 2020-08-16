import React, { Component } from 'react';

class GalleryForm extends Component {
    render() {
        return(
            <form>
                <input value={this.props.newImage.url} onChange={this.props.handleChangeFor('url')} type='text' placeholder='Absolute URL'/>
                <input value={this.props.newImage.description} onChange={this.props.handleChangeFor('description')} type='text' placeholder='Description'/>
                <button onClick={this.props.submitImage}>Post Image</button>
            </form>
        );
    };
};
export default GalleryForm;