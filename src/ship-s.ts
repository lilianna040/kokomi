import { Component } from './component';

export class ShipS extends Component {
  render() {
    const shipS = document.createElement('div');
    Object.assign(shipS.style, {
      backgroundColor: 'blue',
      width: '45px',
      height: '45px',
    });
    return shipS;
  }
}