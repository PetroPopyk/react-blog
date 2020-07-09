import React, { Component } from 'react';
import Summary from './Summary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

export class ArticlesList extends Component {
  state = {
    search: ''
  };

  searchArticles = (e) => {
    this.setState({search: e.target.value});
  };

  render() {
    const { articles, profile } = this.props;
    return (
        <div className="articles-list section">
          {(profile.isAdmin && articles && articles.length > 1) ? <div className="input-field">
            <input placeholder="Search articles..."
                   type="text"
                   width={'300'}
                   className="validate"
                   onChange={this.searchArticles}/>
          </div>: null}
          {articles && articles.filter(article => article.title.toLowerCase().includes(this.state.search) || article.description.toLowerCase().includes(this.state.search)).map(article => {
            return (
                <Link to={{pathname: `/article/${article.id}`, state: {article: article}}} key={article.id}>
                  <Summary article={article}/>
                </Link>
            );
          })}
          {(!articles || articles.length < 1) ? <p className={'center'}>Articles not found</p> : null}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
};

export default connect(mapStateToProps)(ArticlesList);
