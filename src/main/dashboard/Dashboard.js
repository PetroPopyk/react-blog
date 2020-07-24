import React, {Component} from 'react';
import { signOut } from '../../store/actions/authActions';
import ArticlesList from '../blog/ArticlesList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  componentDidMount = () => {
    const { profile } = this.props;
    if (profile.blocked) {
      this.props.signOut(true);
    }
  };

  render() {
    const { articles } = this.props;
    return (
        <div className="dashboard container">
          <div className="row">
            <ArticlesList articles={articles}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.firestore.ordered.articles,
    profile: state.firebase.profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (isBlocked) => dispatch(signOut(isBlocked))
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{ collection: 'articles' }]))(Dashboard);
