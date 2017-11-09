import React from 'react';
import FormButton from './Button.js';

const btnName = 'Clear';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.isEmptyUserResult = true;
    }

    /**
     * When we click btn clear. We reset user result and disabled button clear.
     * @param {Object} evt
     */
    handleSubmit(evt){
        evt.preventDefault();
        this.isEmptyUserResult = !this.isEmptyUserResult;
        return this.resetResutl();
    };

    /**
     * Gets result. If result is not empty we show result in text area.
     */
    getResult(){
        return (!this.isEmptyUserResult)? JSON.stringify(this.props.userResult) : '';
    };

    /**
     * We reset user result.
     */
    resetResutl(){
        return this.props.resetResult();
    }

    componentWillUpdate(nextProps, nextState){
        let userResult = nextProps.userResult;
        let userResultFields = Object.keys(userResult);
        this.isEmptyUserResult = userResultFields.some(userResultField => {
            return (userResult[userResultField] === '');
        });
    };

    render() {
        return (
            <form onSubmit={e=>this.handleSubmit(e)}>
                <div className="row form-group">
                    <div className="col-xs-12 col-sm-4">
                        <label>Result:</label>
                    </div>
                    <div className='col-xs-12 col-sm-8'>
                        <textarea
                            style={{resize: 'none'}}
                            rows='5'
                            id='comment'
                            className='form-control'
                            value={this.getResult()}
                            onChange={e=>this.handleChange(e, 'aboutMe')}
                            >
                        </textarea>
                    </div>
                </div>
                <FormButton disabledFlag={this.isEmptyUserResult}  btnName={btnName}/>
            </form>
        );
    }
};
