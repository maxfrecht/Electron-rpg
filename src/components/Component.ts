export abstract class Component {
  private _el: HTMLElement;
  private _parentEl: HTMLElement;

  constructor(el: HTMLElement, parentEl: HTMLElement) {
    this._el = el;
    this._parentEl = parentEl;
  }
  render() {
    this._parentEl.appendChild(this._el);
  }

  destroy() {
    this._parentEl.removeChild(this._el);
  }

  get el(): HTMLElement {
    return this._el;
  }

  set el(value: HTMLElement) {
    this._el = value;
  }

  get parentEl(): HTMLElement {
    return this._parentEl;
  }

  set parentEl(value: HTMLElement) {
    this._parentEl = value;
  }
}
