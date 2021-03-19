import {Link} from "react-router-dom";
import React from 'react';
import user from '../../controllers/user';

import('./style.css');

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        if(this.props.token != null){
            this.props.history.push('/seeker/dashboard');
          }
    }

    handleInputChange(e){
        const target = e.currentTarget;

        this.setState({[target.name]:target.value});
    }

    handleFormSubmit() {
        user.login(this.state).then(response=>{
            if(response.status){
                console.log(response)
                this.props.setToken(response.token);
                this.props.history.push('/seeker/dashboard');
            }
        });
    }
    
    render(){
        return (

            <div className="card center">
                <h1>Job Seeker Login</h1>
                <div className="form">

                    <input onChange = {this.handleInputChange} name="email" type="text" placeholder="Email" />
                    <input onChange = {this.handleInputChange} name="password" type="password" placeholder="Password" />
                    <input onClick = {this.handleFormSubmit} type="button" value="Login" />

                    <span>Not registered? <Link to="/seeker/register">Register here</Link></span>
                </div>
            </div>

        )
    }
  }

  export default Login;
