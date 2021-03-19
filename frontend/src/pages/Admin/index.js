import admin from '../../controllers/admin';
import {useState, useEffect} from 'react';
import('./style.css');

function Admin() {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        admin.getUsersList().then(res=>{
            if(res.status){
                setUserList(res.data);
            }
        });
    }, []);


    return (
      <>

        <h1>Welcome Admin</h1>

        <div className="list-blocks">
        
        {userList.map(user=>(
            <div className="list-item">

                <div className="item-details">
                    <div className="name">{user.name}</div>
                    <div className="mail">{user.email}</div>
                </div>

                <div className="item-actions">
                    <input type="button" className="btn btn-normal" value="Edit" />
                    <input type="button" className="btn btn-danger" value="Delete" />
                </div>
            </div>
        ))}

        </div>
      </>
    );
  }

  export default Admin;
