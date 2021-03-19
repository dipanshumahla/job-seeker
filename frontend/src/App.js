import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";

import Homepage from './pages/Homepage';
import Admin from './pages/Admin';
import Login from './pages/Seeker/login';
import Register from './pages/Seeker/register';
import Dashboard from './pages/Seeker/dashboard';
import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      token:null
    }

    this.setToken = this.setToken.bind(this);
  }

  setToken(token){
    this.setState({
      token:token
    });
  }
  render(){
  return (
    <Router>
      <div className="content">
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/admin" exact component={Admin}/>
            
            <Route path='/seeker/dashboard' render={(props) => (
                  <Dashboard {...props} token={this.state.token} />
                )}
              />

            <Route path='/seeker/login' render={(props) => (
                  <Login {...props} setToken={this.setToken} token={this.state.token} />
                )}
              />

            <Route path="/seeker/register"  component={Register}  token={this.state.token} />
            <Route path="/seeker" exact render={() => (<Redirect to="/seeker/login" />)} />
          </Switch>
      </div>
    </Router>
  )
  }
}

export default App;
