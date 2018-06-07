import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table'


class Users extends Component {
  constructor(props){
    super();
    this.state ={
      users : []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/users')
  .then(response => {
    console.log(response);
    this.setState({
      users : response.data
    });
    console.log(this.state.users);

  })
  .catch(error => {
    console.log(error);
  });
  }
  render() {
const users = this.state.users.map( user => (
    <tr key={user.id}>
      <td>{user.full_name}</td>
      <td>{user.date}</td>
      <td>{user.categorie}</td>
      <td>
        <div className="row">
        <div className="col"><img src="https://image.flaticon.com/icons/svg/61/61456.svg" className="imgactions" alt="" /></div>
        <div className="col"><img src="https://image.flaticon.com/icons/svg/39/39220.svg" className="imgactions" alt="" /></div>
        <div className="col"><img src="https://image.flaticon.com/icons/svg/149/149099.svg" className="imgactions" alt="" /></div>
      </div>
    </td>

    </tr>
)
)
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nom et Prénom</th>
              <th scope="col">Date d'ins</th>
              <th scope="col">Categorie</th>
              <th scope="col" className="text-center">Actions</th>

            </tr>
          </thead>
          <tbody>
     {users}
       </tbody>
     </table>
      </div>
    );
  }
}

export default Users;
