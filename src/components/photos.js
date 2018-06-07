import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import {link} from 'react-router';
class Photos extends Component {
  constructor(props){
    super();
    this.state ={
      photos : []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/photos')
  .then(response => {
    console.log(response);
    this.setState({
      photos : response.data
    });
    console.log(this.state.photos);

  })
  .catch(error => {
    console.log(error);
  });
  }

  render() {
    const photos = this.state.photos.map( photo => (
        <tr key={photo.id}>
          <td>{photo.createur}</td>
          <td>{photo.Date}</td>
          <td>{photo.src}</td>
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
     {photos}
       </tbody>
     </table>
      </div>
    );
  }
}

export default Photos;
