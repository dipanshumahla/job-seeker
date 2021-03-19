import admin from '../../controllers/admin';
import { Component} from 'react';
import('./style.css');

class Admin extends Component{

    constructor(props){
        super(props);

        this.state = {
            userList:[]
        };
    }
    
    componentDidMount(){
        admin.getUsersList().then(res=>{
            if(res.status){
                
                this.setState({
                    userList: res.data
                });
            }
        });

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.listRefresh = this.listRefresh.bind(this);
    }

    onDeleteHandler(e){
        const email = e.currentTarget.getAttribute('data-email');
        console.log(email);
        admin.deleteUser(email).then(response=>{
            if(response.status){
                this.listRefresh(email);
            }
        })
    }

    listRefresh(email){
        const userList = this.state.userList;
        const newUserList = [];
        userList.forEach((user)=>{
            if(user.email !== email) {
                newUserList.push(user)
            }
        });

        this.setState({
            userList:newUserList
        })
    }

    render(){
    return (
      <>

        <h1>Welcome Admin</h1>

        <div className="list-blocks">
        
        {this.state.userList.map(user=>(
            <div className="list-item">

                <div className="item-details">
                    <div className="name">{user.name}</div>
                    <div className="mail">{user.email}</div>
                </div>

                <div className="item-actions">
                    {/* <input type="button" className="btn btn-normal" value="Edit" disabled /> */}
                    <input type="button" className="btn btn-danger" onClick={this.onDeleteHandler} data-email={user.email} value="Delete" />
                </div>
            </div>
        ))}

        </div>
      </>
    )
        }
  }

  export default Admin;
