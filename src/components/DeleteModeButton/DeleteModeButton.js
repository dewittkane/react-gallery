import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class DeleteModeButton extends Component {
    render() {
        return(
            <Button variant="contained" color="secondary" onClick={() => this.props.toggleDeleteMode()}>Delete Mode</Button>
        );
    };
};
export default DeleteModeButton;