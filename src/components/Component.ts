export abstract class Component {
  protected el: HTMLElement;
  protected parentEl: HTMLElement;

  constructor(el: HTMLElement, parentEl: HTMLElement) {
    this.el = el;
    this.parentEl = parentEl;
  }
  render() {
    this.parentEl.appendChild(this.el);
  }

  destroy() {
    this.parentEl.removeChild(this.el);
  }
}
