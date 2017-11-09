import React from 'react';

export default class FormButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                type="submit"
                disabled={this.props.disabledFlag}
                className='btn pull-right btn-success'
                >{this.props.btnName}
            </button>
        );
    }
};