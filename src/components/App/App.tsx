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
            <p></p>
            <button onClick={this.clickHandlerDeafult}>
              Change to Deafult
            </button>
            <p></p>
            <input
              type="text"
              onChange={(e) => this.inputOnChange(e.target.value)}
            />
          </div>
        </section>
      </main>
    );
  }

  private inputOnChange = (value: string) => {
    const { inputName } = this.props.mobxStore!;
    inputName(value);
  };
  private clickHandler = () => {
    const { setName } = this.props.mobxStore!;
    setName('Some Name');
  };
  private clickHandlerDeafult = () => {
    const { setDeafult } = this.props.mobxStore!;
    setDeafult();
  };
}

export default App;
