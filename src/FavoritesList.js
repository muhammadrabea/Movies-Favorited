import React, { Component } from "react";
import MoviesList from "./MoviesList";

class FavoritesList extends Component {
  render() {
    const {users, userFromMovie, movies} = this.props
    const moviesList = Object.keys(movies).map(movie => (
      <MoviesList
        key={movie}
        users={users}
        movieName={movies[movie]}
        userFavTheMovie = {userFromMovie[movie]}
       />
)); 
   return <ul>{moviesList}</ul>
}
}

export default FavoritesList