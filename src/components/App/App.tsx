import './App.css';

import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { IMobxStore } from '../../stores/mobxStore';

interface AppProps {
  mobxStore?: IMobxStore;
}

@inject('mobxStore')
@observer
class App extends Component<AppProps> {
  render() {
    const { greeting } = this.props.mobxStore!;

    return (
      <main className="App">
        <section>
          <div>
            <h1>{greeting}</h1>
            <button onClick={this.clickHandler}>Change Greeting</button>
          </div>
        </section>
      </main>
    );
  }

  private clickHandler = () => {
    const { setName } = this.props.mobxStore!;
    setName('Bob');
  };
}

export default App;
