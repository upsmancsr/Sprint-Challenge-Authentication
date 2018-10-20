import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: [],
  };

  jokeList = () => {
      if (this.state.jokes) {
        return (
            <ul>
                {this.state.jokes.map(joke => (
                    <li key={joke.id}>{joke.setup}</li>
                    // <p>{joke.setup}</p>
                    // <p>{joke.punchline}</p>
            
                ))}
            </ul>
        );
      }
  }

  render() {
    return (
      <div>
        <h2>List of Jokes</h2>
        {this.jokeList()}
      </div>
    );
  };

  componentDidMount() {
    const token = localStorage.getItem('jwt');

    const endpoint = 'http://localhost:3300/api/jokes';
    const options = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get(endpoint, options)
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data });
        console.log(this.state.jokes);
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  }
}

export default Jokes;
