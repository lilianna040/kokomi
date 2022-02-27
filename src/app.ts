import { Component } from './component';
import { DragAndDrop } from './drag-and-drop';
import { Field } from './field';
import { ShipS } from './ship-s';
import { ShipM } from './ship-m';
import { ShipsSelect } from './ships-select';

export class App extends Component {
  render() {
    const app = document.createElement('div');
    const field = new Field();
    const shipsSelect = new ShipsSelect([
      new ShipS(),
      new ShipS(),
      new ShipS(),
      new ShipS(),
      new ShipM(),
      new ShipM(),
      new ShipM(),
    ]);

    Object.assign(app.style, {
      height: '100vh',
    });
    const dragAndDrop = new DragAndDrop().render();
    dragAndDrop.append(field.render(), shipsSelect.render());
    app.append(dragAndDrop);
    return app;
  }
}
