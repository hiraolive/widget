interface WidgetData {
  name: string;
  color: string;
  show: boolean;
  title?: string;
  grade?: string;
  rate?: string;
  category?: string;
}

class Widget extends HTMLElement {
  private data: WidgetData;
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.data = {
      name: "",
      color: "",
      show: false,
    };

    this.shadow.innerHTML = `
      <style>
        .card {}
        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          border-radius: 3px;
        }
        .widgetBody {
          padding: 1rem;
          display: flex;
          background: #f9f9f9;
          border: 1px solid #ccc;
          flex-direction: column;
          height: 400px;
          margin-bottom: 16px;
          width: 400px;
          max-width: 100%;
          border-radius: 20px;
          opacity: 1;
          margin-right: 16px;
          transition: opacity 1s;
        }
        .widgetBody.show {
          opacity: 1;
        }
        .icon {
          display: none;
          width: 50px;
          height: 50px;
          border-radius: 50px;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 15px;
          top: -50px;
          margin-top: -6px;
        }
        .icon svg {
          width: 30px;
          height: 30px;
        }
        .icon svg path {
          stroke: #ff0000;
        }
      </style>
      <div class="card">
        <div class="icon"></div>
        <div class="widgetBody"></div>
      </div>
    `;
  }

  private isDark(bgColor: string): boolean {
    try {
      const rgb = bgColor.match(/\d+/g)?.map(Number);
      if (!rgb || rgb.length < 3) return false;
      const [r, g, b] = rgb;
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luminance < 128;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static get observedAttributes(): string[] {
    return ["color", "position", "zindex"];
  }

  private changePosition(newValue: string): void {
    try {
      const widget = document.querySelector("insurance-widget") as HTMLElement;
      const card = this.shadow.querySelector(".card") as HTMLElement;
      const icon = this.shadow.querySelector(".icon") as HTMLElement;
      if (!card || !icon || !widget) return;

      if (newValue === "bottom-right") {
        widget.style.left = "auto";
        widget.style.right = "0";
        icon.style.left = "auto";
        icon.style.right = "15px";
      } else if (newValue === "bottom-left") {
        widget.style.left = "15px";
        widget.style.right = "auto";
        icon.style.left = "0";
        icon.style.right = "auto";
      }
    } catch (error) {
      console.error(error);
    }
  }

  private changeColor(value: string): void {
    try {
      console.log("changeColor");
      const icon = this.shadow.querySelector(".icon") as HTMLElement | null;
      const widgetBody = this.shadow.querySelector(".widgetBody") as HTMLElement | null;
      const link = this.shadow.querySelector("a") as HTMLAnchorElement | null;

      if (icon) icon.style.backgroundColor = value;
      if (widgetBody) widgetBody.style.border = `solid 1px ${value}`;
      if (link) {
        link.style.backgroundColor = value;
        link.style.color = this.isDark(value) ? "#000000" : "#ffffff";
      }
    } catch (error) {
      console.error(error);
    }
  }

  private changeZindex(value: string): void {
    const card = this.shadow.querySelector(".card") as HTMLElement;
    card.style.zIndex = value;
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (!newValue) return;

    switch (name) {
      case "color":
        this.changeColor(newValue);
        break;
      case "position":
        this.changePosition(newValue);
        break;
      case "zindex":
        this.changeZindex(newValue);
        break;
    }
  }

  private toggleBox(e: MouseEvent): void {
    console.log("toggleBox");
    const widget = document.querySelector("insurance-widget") as HTMLElement;
    const widgetBody = this.shadow.querySelector(".widgetBody") as HTMLElement;

    if (this.data.show) {
      widget.style.bottom = "-445px";
      widgetBody.classList.remove("show");
    } else {
      widget.style.bottom = "0px";
      widgetBody.classList.add("show");
    }

    this.data.show = !this.data.show;
    e.preventDefault();
  }

  async connectedCallback(): Promise<void> {
    document.addEventListener("DOMContentLoaded", async () => {
      console.log("DOM is loaded!");
      const wid = this.getAttribute("wid");
      console.log(wid);

      try {
        const result = await fetch("https://cdn.jsdelivr.net/gh/hiraolive/widget/json/data.json");
        const data: Partial<WidgetData> = await result.json();
        this.data = { ...this.data, ...data };

        const widgetBody = this.shadow.querySelector(".widgetBody") as HTMLElement;

        if (data && widgetBody) {
          widgetBody.innerHTML = `
            <div>
              <h3>${this.data.title || ""}</h3>
              <strong>Grade: ${this.data.grade || ""}</strong>
              <strong>Rate: ${this.data.rate || ""}</strong>
              <h4>${this.data.category || ""}</h4>
              <a class="link" href="http://google.com">Google</a>
            </div>`;
        }

        const icon = this.shadow.querySelector(".icon") as HTMLElement;
        icon.addEventListener("click", this.toggleBox.bind(this));

        const widget = document.querySelector("insurance-widget") as HTMLElement;
        widget.style.position = "fixed";
        widget.style.right = "0px";
        widget.style.bottom = "0";
        widget.style.transition = "all 1s";

        const color = this.getAttribute("color");
        const zindex = this.getAttribute("zindex");

        if (color) this.changeColor(color);
        if (zindex) widget.style.zIndex = zindex;
      } catch (error) {
        console.error("Failed to load widget data:", error);
      }
    });
  }
}

customElements.define("insurance-widget", Widget);
