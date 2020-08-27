import React, { Component } from 'react';
import List from './List';
import STORE from './STORE';
import './App.css';

class App extends Component {
  // new
  state = {
   store: STORE
  }

  // OG
  // state = {
  //   lists: [],
  //   allCards: {}
  // }

  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };

  handleRandomCardClick() {
    console.log('handleRandomCardClick - clicked')
  }

  handleDeleteCard = (card) => {
    console.log('handleDeleteCardClick clicked')
    console.log(this.state)
  //   const newCards = this.state.cards.filter(crd => crd !== card)
  //   this.setState({
  //     allCards: newCards
  //   })
  // }

    // function omit(card, keyToOmit) {
    //   let {[keyToOmit]: _, ...rest} = card;
    //   console.log(keyToOmit)
    //   return rest;
    // }

    // let newCards = omit(card, this.state.allCards)
  
    const newCards = this.state.allCards.filter(crd => crd !== card)
    this.setState({
      allCards: newCards
    })
    console.log(newCards)
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
              onDeleteCard={this.handleDeleteCard}
              onRandomCard={this.handleRandomCardClick}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
