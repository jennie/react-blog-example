import React from 'react';

class NewArticleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle({
      title: this.titleInput.value,
      author: this.authorInput.value,
      body: this.bodyInput.value,
    });
  }
  render() {
    return (
      <div id="new-article-form">
        <form onSubmit={this.handleSubmit}>
          <input
            ref={(input) => this.titleInput = input}
            size="75"
            placeholder="Article Title" />
          <br /><br />
          <input
            ref={(input) => this.authorInput = input}
            size="75"
            placeholder="Author Name" />
          <br /><br />
          <textarea
            ref={(input) => this.bodyInput = input}
            cols="60"
            rows="20"
            placeholder="Article Body"></textarea>
          <br /><br />
          <button type="submit">
            Save Article
          </button>
        </form>
      </div>
    );
  }
}

export default NewArticleForm;
