import React, { Component } from "react";

class UserReference extends Component {
  render() {
    const {users, userFavTheMovie} = this.props;
    
    if (!userFavTheMovie || userFavTheMovie.length === 0 ) {
      return <p>Sadly, nobody likes this movie.</p>;
    }
    
    const listofNames = userFavTheMovie.map(id => (
      <li key={id}>
          <p>{users[id].name}</p>
      </li>
  ));
    return <ul>{listofNames}</ul>
  }
}

export default UserReference;

                                            