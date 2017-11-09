import React from 'react';
import FormButton from './Button.js';

const btnName = 'Save';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            aboutMe: '',
        };
    }

    /**
     * Set state when user input data.
     * @param {Object} evt
     * @param {String} nameIput
     */
    handleChange(evt, nameIput) {
        this.setState({
            [nameIput]: evt.target.value
        });
    }

    /**
     * When we click btn Save clear state.
     * @param {Object} evt
     */
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.getData(this.state);
        this.setState({
            name: '',
            surname: '',
            aboutMe: ''
        });
        this.validator();
    };

    /**
     * Validate state.
     */
    validator() {
        let {
            name,
            surname,
            aboutMe
            } = this.state;
        return (!name || !surname || !aboutMe);
    }

    render() {
        return (
            <form onSubmit={e=>this.handleSubmit(e)}>
                <div className='row form-group'>
                    <div className='col-xs-12 col-sm-4'>
                        <label>Name: </label>
                    </div>
                    <div className='col-xs-12 col-sm-2'>
                        <input
                            placeholder='Name'
                            name='name'
                            type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={e=>this.handleChange(e,'name')}
                            />
                    </div>
                </div>
                <div className='row form-group'>
                    <div className='col-xs-12 col-sm-4'>
                        <label>Surname:</label>
                    </div>
                    <div className='col-xs-12 col-sm-2'>
                        <input
                            placeholder='Surname'
                            name='surname'
                            type='text'
                            className='form-control'
                            value={this.state.surname}
                            onChange={e=>this.handleChange(e, 'surname')}
                            />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-xs-12 col-sm-4">
                        <label>About Me:</label>
                    </div>
                    <div className='col-xs-12 col-sm-8'>
                            <textarea
                                style={{resize: 'none'}}
                                rows='5'
                                id='comment'
                                className='form-control'
                                value={this.state.aboutMe}
                                onChange={e=>this.handleChange(e, 'aboutMe')}
                                >
                            </textarea>
                    </div>
                </div>
                <FormButton disabledFlag={this.validator()} btnName={btnName}/>
            </form>
        );
    }
};
