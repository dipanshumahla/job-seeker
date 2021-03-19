import { Component } from 'react';
import user from '../../controllers/user';

import('./style.css');

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      cvFile: null,
      name: null
    }
    
  }

  componentDidMount(){
    if(this.props.token == null){
      this.props.history.push('/seeker/login');
      console.log(this.props)
    }
    user.getInfo(this.props.token).then(response=>{
      if(response.status){
        this.setState({
          name: response.data.name
        })
      }
    })
  }

  onFileChange = e => {
    this.setState({ cvFile: e.target.files[0] });
  };

  onFileUpload = () => {
    user.uploadCV(this.state.cvFile);
  };

  render(){
    return (
      <>
        <h1>Hi {this.state.name},</h1>

        <div>
          <input type="file" onChange={this.onFileChange} />
          <input type="button" onClick={this.onFileUpload} value="Upload" />
        </div>
      </>
    )
  }
}

export default Homepage;
