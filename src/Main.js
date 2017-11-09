import React from 'react';
import Form from './components/Form.js';
import Result from './components/Result.js';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            aboutMe: '',
        };
    };

    /**
     * Gets user data from Form component.
     * @param {Object} userData
     */
    getUserData(userData){
        if(userData && typeof userData === 'object') return this.setUserData(userData);
        return false;
    };

    /**
     * Set user data to state.
     * @param {Object} userData
     */
    setUserData(userData){
        this.setState(userData);
    };

    /**
     * Clear a state.
     */
    clearUserData(){
        this.setState({
            name: '',
            surname: '',
            aboutMe: '',
        });
    }

    /**
     * Get a state.
     */
    getState(){
        return this.state;
    }

    render() {
        return (
            <div className='row col-xs-12 col-sm-12'>
                <div className='col-xs-6 col-sm-6'><Form getData={this.getUserData.bind(this)}/></div>
                <div className='col-xs-6 col-sm-6'><Result userResult={this.getState()} resetResult={this.clearUserData.bind(this)}/></div>
            </div>
        )
    };
}