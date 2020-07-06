import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignedInPage from './main/auth/SignInPage';
import SignUpPage from './main/auth/SignUpPage';
import AddArticle from './main/blog/AddArticle';
import Dashboard from './main/dashboard/Dashboard';
import Navbar from './main/shared/Navbar';
import ArticleDetails from './main/blog/ArticleDetails';
import { connect } from 'react-redux';

const App = (props) => {
  const { auth } = props;

const AuthorizedRoute = (props) => {
  return auth.uid ? (<Route path={props.path} component={props.component}/>) : <Redirect to={'/'}/>
};

  const UnauthorizedRoute = (props) => {
    return !auth.uid ? (<Route path={props.path} component={props.component}/>) : <Redirect to={'/'}/>
  };

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path={'/'} component={Dashboard}/>
            <Route path={'/article/:id'} component={ArticleDetails}/>
            <UnauthorizedRoute path={'/sign-in'} component={SignedInPage}/>
            <UnauthorizedRoute path={'/sign-up'} component={SignUpPage}/>
            <AuthorizedRoute path={'/add-article'} component={AddArticle}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
