import { Component } from '../component';

export class DragAndDrop extends Component {
  element?: HTMLElement;

  handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.getAttribute('data-drag-and-drop')) {
      this.element = target;
      this.element.style.position = 'absolute';
    }
  }

  handleMouseMove(event: MouseEvent) {
    if (this.element) {
      Object.assign(this.element.style, {
        top: event.pageY - 20 + 'px',
        left: event.pageX - 20 + 'px',
      });
    }
  }

  handleMouseUp() {
    if (this.element) {
      this.element.style.position = 'static';
      delete this.element;
    }
  }

  render() {
    const dragAndDrop = document.createElement('div');
    Object.assign(dragAndDrop.style, {
      width: '100%',
      height: '100%',
      backgroundColor: 'grey',
    });
    dragAndDrop.onmousedown = this.handleMouseDown;
    dragAndDrop.onmousemove = this.handleMouseMove;
    dragAndDrop.onmouseup = this.handleMouseUp;
    return dragAndDrop;
  }
}
