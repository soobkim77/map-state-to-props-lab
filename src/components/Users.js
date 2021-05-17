import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <h4>{this.props.users.length}</h4>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps  = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
