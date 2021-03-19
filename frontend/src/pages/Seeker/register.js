import {Link} from "react-router-dom";
import React from 'react';
import user from '../../controllers/user';

import('./style.css');

class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            password: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    }

    handleInputChange(e){
        const target = e.currentTarget;

        this.setState({[target.name]:target.value});
    }

    handleFormSubmit() {
        user.register(this.state).then(response=>{
            this.props.history.push('seeker/login');
        });
    }

    handlePasswordConfirmChange(e){
        const target = e.currentTarget;
        if(target.value !== this.state.password){
            console.log('password confirm wrong');
        }
    }
    
    render(){
        return (

            <div className="card center">
                <h1>Job Seeker Registeration</h1>
                <div className="form">
                    <input onChange = {this.handleInputChange} name="name" type="text" placeholder="Name" />
                    <input onChange = {this.handleInputChange} name="email" type="text" placeholder="Email" />
                    <input onChange = {this.handleInputChange} name="password" type="password" placeholder="Password" />
                    <input onChange = {this.handlePasswordConfirmChange} name="cpassword" type="password" placeholder="Confirm Password" />

                    <input onClick = {this.handleFormSubmit} type="button" value="Register" />
                    <span>Already registered? <Link to="/seeker/login">Login here</Link></span>
                </div>
            </div>

        )
    }
  }

  export default Register;

