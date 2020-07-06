import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignedInPage from './main/auth/SignInPage';
import SignUpPage from './main/auth/SignUpPage';
import AddArticle from './main/blog/AddArticle';
import Dashboard from './main/dashboard/Dashboard';
import Navbar from './main/shared/Navbar';
import ArticleDetails from './main/blog/ArticleDetails';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path={'/'} component={Dashboard}/>
            <Route path={'/article/:id'} component={ArticleDetails}/>
            <Route path={'/sign-in'} component={SignedInPage}/>
            <Route path={'/sign-up'} component={SignUpPage}/>
            <Route path={'/add-article'} component={AddArticle}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
