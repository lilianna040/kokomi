import { Component } from './component';
import { Field } from './field';
import { ShipS } from './ship-s';

export class App extends Component {
  render() {
    const app = document.createElement('div');
    const field = new Field();
    const shipS = new ShipS();

    Object.assign(app.style, {
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    });

    app.append(field.render(), shipS.render());
    return app;
  }
}
