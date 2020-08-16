import React, { Component } from 'react';
class DeleteModeButton extends Component {
    render() {
        return(
            <button onClick={() => this.props.toggleDeleteMode()}>Delete Mode</button>
        );
    };
};
export default DeleteModeButton;