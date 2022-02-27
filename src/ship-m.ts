import { Component } from './component';

export class ShipM extends Component {
  render() {
    const shipM = document.createElement('div');
    Object.assign(shipM.style, {
      backgroundColor: 'blue',
      width: '90px',
      height: '45px',
    });
    shipM.setAttribute('data-drag-and-drop', 'ship-medium');
    return shipM;
  }
}
