import { Component } from "../Component";

export class StartComponent extends Component {
  private titleElement: HTMLHeadingElement;

  constructor(private title: string) {
    super(document.createElement("div"), document.body);
    this.title = title;
    this.titleElement = document.createElement("h1");
    this.el.classList.add("start-component-box");
    this.el.appendChild(this.titleElement);
    this.titleElement.innerHTML = this.title;
    this.render();

    this.el.addEventListener("click", () => {
      this.titleElement.style.animation = "none";
      setTimeout(() => {
        this.titleElement.style.transform = "scale(100)";
      }, 1);
      setTimeout(() => {
        this.el.style.opacity = "0";
      }, 600);
      setTimeout(() => {
        this.destroy();
      }, 400);
    });
  }
}
