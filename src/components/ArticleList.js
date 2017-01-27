import React from 'react';

import ArticleRow from './ArticleRow';

class ArticleList extends React.Component {
  render() {
    const { articles, onArticleClick } = this.props;
    return (
      <div className="article-list">
        {Object.keys(articles).map(articleId =>
          <ArticleRow
            onClick={onArticleClick}
            key={articleId}
            id={articleId}
            {...articles[articleId]}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
