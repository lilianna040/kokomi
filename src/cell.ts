import { Component } from './component';

export class Cell extends Component {
  render() {
    const cell = document.createElement('div');
    Object.assign(cell.style, {
      border: '1px black solid',
    });

    return cell;
  }
}
