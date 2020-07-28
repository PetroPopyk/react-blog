import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { db } from '../../configs/firebaseConfig';
import { changeUserStatus } from '../../store/actions/adminActions';

class Users extends Component {
  state = {
    search: '',
    users: '',
    last: '',
    lastPage: false
  };

  searchUsers = (e) => {
    this.setState({search: e.target.value});
  };

  changeUserStatus = (user) => {
    this.props.changeUserStatus(user);
  };

  componentDidMount(){
    this.getUsers();
  };

  componentWillReceiveProps(nextProps, nextContent){
    const users = [...this.state.users];
    const { updatedUser } = nextProps;
    users.find(item => item.id === updatedUser.id).blocked = updatedUser.blocked;
    this.setState({users: users});
  }

  getUsers() {
    let set = this;
    const first = db.collection("users").orderBy('firstName').limit(3);
    first.get().then((documentSnapshots) =>  {
      const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      const list = [];
      documentSnapshots.forEach((doc) => {
        list.push({...doc.data(), id: doc.id});
      });
      if (list.length < 3) {
        this.setState({lastPage: true});
      }
      set.setState({users: list, last: lastVisible});
    });
  };

  getMoreUsers = () => {
    const last = this.state.last;
    const next = db.collection("users").orderBy('firstName').startAfter(last).limit(3);
    next.get().then((documentSnapshots) => {
      const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      const list = [];
      documentSnapshots.forEach((doc) => {
        list.push({...doc.data(), id: doc.id});
      });
      if (list.length < 3) {
        this.setState({lastPage: true});
      }
      const updatedList = this.state.users.concat(list);
      this.setState({ users: updatedList, last: lastVisible });
    });
  };

  render() {
    const {users} = this.state;
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

            <table className='highlight responsive-table' style={{marginBottom: '30px'}}>
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
            {!this.state.lastPage ? <button className="btn pink" style={{marginTop: '30px', marginBottom: '30px'}} onClick={this.getMoreUsers}>More users...</button> : null}
          </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    updatedUser: state.adminReducer.updatedUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserStatus: (user) => {
      dispatch(changeUserStatus(user));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Users);
