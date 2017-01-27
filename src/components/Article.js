import React from 'react';

class Article extends React.Component {
  render() {
    if (!this.props.title) {
      return <h3>Select an Article</h3>;
    }
    return (
      <div id="current-article">
        <h3>{this.props.title}</h3>
        <div className="article-date">
          {this.props.date.toLocaleString()}
        </div>
        <div className="article-author">
          By: {this.props.author}
        </div>
        <div className="article-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default Article;
