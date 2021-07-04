import React, { Component } from 'react';
import UserReference from './usersReference';


class MoviesList extends Component {
  render() {
    const {users, userFavTheMovie, movieName} = this.props
    
    return(
      <li key={movieName.id}>
      <h2>{movieName.name}</h2>
      <h4>Liked By:</h4>
      <UserReference userFavTheMovie={userFavTheMovie} users={users} />
      </li>
    );
  }

}

export default MoviesList ;