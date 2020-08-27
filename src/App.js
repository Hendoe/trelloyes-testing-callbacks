import React, { Component } from 'react';
import List from './List'
import STORE from './STORE'
import './App.css';

class App extends Component {
  state = {
    store: STORE
  }

  handleRandomCardClick() {
    console.log('handleRandomCardClick - clicked')

  }

  handleDeleteCardClick() {
    console.log('handleDeleteCardClick clicked')
    function omit(obj, keyToOmit) {
      let {[keyToOmit]: _, ...rest} = obj;
      return rest;
    }
  }



  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteCard={this.handleDeleteCardClick}
              onRandomCard={this.handleRandomCardClick}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;