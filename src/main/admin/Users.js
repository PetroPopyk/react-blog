import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { changeUserStatus } from '../../store/actions/adminActions';

class Users extends Component {
  state = {
    search: ''
  };

  searchUsers = (e) => {
    this.setState({search: e.target.value});
  };

  changeUserStatus = (user) => {
    console.log(user);
    this.props.changeUserStatus(user);
  };

  render() {
    const {users} = this.props;
    if (users && users.length > 0) {
      return (
          <div className="dashboard container">
            <div className="input-field">
              <input placeholder="Search users..."
                     type="text"
                     width={'300'}
                     className="validate"
                     onChange={this.searchUsers}/>
            </div>

            <table className='highlight responsive-table'>
              <thead>
              <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Blocked</th>
              <th>Admin</th>
              <th></th>
              </tr>
              </thead>

              <tbody>
              {users.filter(user => user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase())).map(user => {
                return (
                  <tr key={user.uid}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.blocked ? 'Yes' : 'No'}</td>
                  <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                  <td>
                    <button className="btn pink right" disabled={user.isAdmin} onClick={() => this.changeUserStatus(user)}>{user.blocked ? 'Activate' : 'Block'}</button>
                  </td>
                </tr>
                )}
              )}
              </tbody>
            </table>
          </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserStatus: (user) => {
      dispatch(changeUserStatus(user));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{collection: 'users'}]))(Users);
