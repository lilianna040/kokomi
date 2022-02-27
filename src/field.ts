import { Component } from './component';
import { Cell } from './cell';

export class Field extends Component {
  render() {
    const field = document.createElement('div');

    const cells = Array.from({ length: 100 }, () => new Cell().render());

    field.append(...cells);

    Object.assign(field.style, {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridTemplateRows: 'repeat(10, 1fr)',
      width: '500px',
      height: '500px',
      border: '1px red solid',
    });
    return field;
  }
}
