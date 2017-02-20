'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const ARTICLES = [
  {
    title: "Fascinating!",
    author: "Root",
    date: "23/02/17",
    body: "All known all white bare white body fixed one yard legs joined like sewn. Light heat white floor one square yard never seen. White walls one yard by two white ceiling one square yard never seen. Bare white body fixed only the eyes only just. Traces blurs light grey almost white on white. Hands hanging palms front white feet heels together right angle. Light heat white planes shining white bare white body fixed ping fixed elsewhere. Traces blurs signs no meaning light grey almost white."
  }
]


class Article extends React.Component {
  constructor(){
    super()
    this.state = {
      article: {
        title: "Hello there",
        subhead: "Takes a long time to see!",
        author: "Finch",
        date: 23022017,
        body: "All known all white bare white body fixed one yard legs joined like sewn. Light heat white floor one square yard never seen. White walls one yard by two white ceiling one square yard never seen. Bare white body fixed only the eyes only just. Traces blurs light grey almost white on white.",
      }
    }
  }

  render(){
    return (
      <section>
        <article>
            <p className="date">Date {this.state.article.date}</p>
            <h1 className="headline">{this.state.article.title}</h1>
            <h2 className="subhead">{this.state.article.subhead}</h2>
            <p className="copy">{this.state.article.body}</p>
            <p className="author">Author: {this.state.article.author}{this.props.title}</p>     
        </article>
      </section>)
  }
}

class App extends React.Component {

  render(){
    return (
      <div>
        <Article title={this.props.articles.title}/>
        <Article />
        <Article />
        <Article />
      </div>)
  }
}

ReactDOM.render(
  <App articles={ARTICLES} />,
  document.getElementById('app')
)