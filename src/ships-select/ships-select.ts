import { Component } from '../component';

export class ShipsSelect extends Component {
  constructor(private ships: Component[]) {
    super();
  }

  render() {
    const shipsSelect = document.createElement('div');
    Object.assign(shipsSelect.style, {
      width: '100%',
      minHeight: '200px',
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '20px',
      rowGap: '20px',
    });
    const ships = this.ships.map((ship) => ship.render());
    shipsSelect.append(...ships);
    return shipsSelect;
  }
}
