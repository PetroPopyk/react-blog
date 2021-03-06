import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './main/admin/Users';
import SignedInPage from './main/auth/SignInPage';
import SignUpPage from './main/auth/SignUpPage';
import AddArticle from './main/blog/AddArticle';
import EditArticle from './main/blog/EditArticle';
import Dashboard from './main/dashboard/Dashboard';
import Navbar from './main/shared/Navbar';
import ArticleDetails from './main/blog/ArticleDetails';
import { connect } from 'react-redux';

const App = (props) => {
  const { auth, profile } = props;

  toast.configure({
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  });

  const AdminRoute = (props) => {
    return (auth.uid && profile.isAdmin)  ? (<Route path={props.path} component={props.component}/>) : <Redirect to={'/'}/>;
  };

  const UnauthorizedRoute = (props) => {
    return !auth.uid ? (<Route path={props.path} component={props.component}/>) : <Redirect to={'/'}/>;
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
            <AdminRoute path={'/add-article'} component={AddArticle}/>
            <AdminRoute path={'/edit-article/:id'} component={EditArticle}/>
            <AdminRoute path={'/users'} component={Users}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(App);
