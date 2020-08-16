import React, { Component } from 'react';

class GalleryForm extends Component {
    render() {
        return(
            <form>
                <input onChange={this.props.handleChangeFor('url')} type='text' placeholder='Absolute URL'/>
                <input onChange={this.props.handleChangeFor('description')} type='text' placeholder='Description'/>
                <button onClick={this.props.submitImage}>Post Image</button>

            </form>
        );
    };
};
export default GalleryForm;