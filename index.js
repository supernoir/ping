'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let paragraphs = []
const ARTICLES = [
  {
    id: 1,
    title: "Stowaway",
    author: "Inate",
    date: "20/02/17",
    body:
      "She had been waiting for anything to happen. Anything that would give her a sense of time, a sense of direction. But nothing happened, and there was no indication of time. She had been sleeping in her Cocoon when the Gentle Wake-Up started, but couldn’t remember what happened since then. She felt lost, delirious. Unclear what would come next, unclear even what preceded this very moment. She had bouts of disorientation every so often, but now they were recurring increasingly. It often helped her to retrace her steps to this very moment, in order to gain a sense of time and space.A while ago she had started on this Earth-bound mission. She had wanted to teach the children of earth all about her experiences; The scents and tastes, the words and concepts that she had learned growing up on Europa. She was something like an Earth ambassador, then. Representing her people, her home. Maybe she was ordered. Maybe she had applied, but she really couldn't remember. She had never left planet before. Was it a planet? A dwarf planet maybe. Or a moon. Come to think of it, her home planet was most likely a moon. Her home moon. That sounded stranger than it ought to be. Europa was a moon, no? Europa was also an Island on Earth. No, a continent. Antarctica was an Island. And a Pole. And then there was Poland. It didn’t make much sense to her, but she just went along and learned it all by heart. So Europe was a continent, she meant to say. It sounded like Incontinent. She had to giggle. How old was she? She didn't really remember, either. Earth years? Yes, why not. All the units where converted to Earth measurements, because that is where they were headed. Right? That's as much as she remembered. So, Earth years then. She must be about... Let’s see: 12 years? Or was it 15 Earth years old? She would be a Quinceañera. A Señorita. A Piñata. Another giggle. She loved quirky earth languages.She had dark skin, black, short hair. Everybody said she had beautiful eyes. Smart eyes. They liked smart. Smart is the new sexy as they say. Maybe they really don't say that and only she says it. Maybe she had read too many weird, old Earth books. Which might be why they send her. Or maybe that's why she wanted to be earth-bound. Her physique strong, strong as an oxen (Ebe—her Inate, her Parent, had to laugh when she said that, but she liked oxen, the word, kind of like oxygen, and anyway she liked when there was an “x” in a word, it spiced things up a bit). She was strong, not like earth women, yet still unsuited for earth's gravity, which would be a strain for her. When they arrived. When would they arrive? They had barely even traveled more than a year. There was still time. A lot of time. Too much time. Maybe they were only gone for less. Maybe only a few months. But it must have been more than weeks, no? How could she be sure? She had encapsulated herself into this cell, a safe place, a technological advanced place, that shielded her from radiation. She was contaminated. From Europa. It also shielded her from controlling the ship, which was automatic, or so they said. It was automatically programmed to arrive on time, or something like that. Weird. It didn't make much sense to her, but what could she do? She had signed up to do this, or maybe not. Maybe she was fleeing. Yes, maybe she was fleeing. In that case it didn't matter."
  },
    {
    id: 2,
    title: "A friend in me",
    author: "Ping",
    date: "17/02/17",
    body: "All known all white bare white body fixed one yard legs joined like sewn. Light heat white floor one square yard never seen. White walls one yard by two white ceiling one square yard never seen. Bare white body fixed only the eyes only just. Traces blurs light grey almost white on white. Hands hanging palms front white feet heels together right angle. Light heat white planes shining white bare white body fixed ping fixed elsewhere. Traces blurs signs no meaning light grey almost white."
  },
    {
    id: 3,
    title: "Built to last",
    author: "Ship",
    date: "15/02/17",
    body: "All known all white bare white body fixed one yard legs joined like sewn. Light heat white floor one square yard never seen. White walls one yard by two white ceiling one square yard never seen. Bare white body fixed only the eyes only just. Traces blurs light grey almost white on white. Hands hanging palms front white feet heels together right angle. Light heat white planes shining white bare white body fixed ping fixed elsewhere. Traces blurs signs no meaning light grey almost white."
  },
]

let Separator = () => {
  return (
    <div className="separator">
    <i id="icon__separator">&#10086;</i>
    </div>
  )
}

class Article extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      paragraphs: [1,2,3]
    }
  }

  render(){
    return (
      <section>
        <article>
            <p className="date">Date {this.props.date}</p>
            <h1 className="headline">{this.props.title}</h1>
            <h2 className="subhead">{this.props.subhead}</h2>
            <p className="copy">{this.props.body}</p>
            <p className="author">Author: {this.props.author}</p>     
        </article>
      </section>)
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
            collection: []
        }
    }
  render(props){
    return (
      <div>
        {ARTICLES.map((article) => (
          <div>
            <Article key={article.id} title={article.title} subhead={article.subhead} body={article.body} date={article.date} author={article.author}/>
            <Separator />
          </div>
          ))}
      </div>)
  }
}

ReactDOM.render(
  <App articles={ARTICLES} />,
  document.getElementById('app')
)