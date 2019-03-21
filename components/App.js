import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
    state = {
        term: '',
        items: []
    };

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
        });
    }

    removeTodo = (name) => {
        const filteredItems = this.state.items.filter(item => item !== name)
        this.setState({
            items: [...filteredItems]
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} removeTodo={this.removeTodo} />
      </div>
    );
  }
}
