import React from 'react';

import ArticleList from './ArticleList';
import Article from './Article';
import NewArticleForm from './NewArticleForm';

import { getArticleList, getArticle, addArticle } from '../data';

class App extends React.Component {

  state = { articles: [], currentArticle: {}, newArticleForm: false };

  componentDidMount() {
    getArticleList().then(articles => {
      this.setState({ articles });
    });
  }

  setCurrentArticle = (articleId) => {
    getArticle(articleId).then(article => {
      this.setState({
        currentArticle: article,
        newArticleForm: false,
      });
    });
  };

  showNewArticleForm = (event) => {
    event.preventDefault();
    this.setState({ newArticleForm: true });
  }

  addArticle = (articleInput) => {
    addArticle(articleInput).then(newArticle => {
      this.setState((prevState) => {
        const articles = prevState.articles;
        articles[newArticle.key] = newArticle;
        return {
          articles,
          currentArticle: newArticle,
          newArticleForm: false,
        };
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h2 id="header">The Leading Edge Blog</h2>
        <div id="left">
          <h3>Article List</h3>
          <ArticleList
            articles={this.state.articles}
            onArticleClick={this.setCurrentArticle}
          />

          <button id="new-article" type="button" onClick={this.showNewArticleForm}>
            New Article
          </button>
        </div>
        <div id="right">
          {
            this.state.newArticleForm ?
              <NewArticleForm addArticle={this.addArticle} /> :
              <Article {...this.state.currentArticle} />
          }

        </div>
      </div>
    );
  }
}

export default App;
