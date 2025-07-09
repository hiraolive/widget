class Widget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.data = {
      name: "",
      color: "",
      show: false,
    };

    this.shadowRoot.innerHTML = `
        <style>
       
          .card {
          }
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
            display: flex;
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
            <div class="widgetBody">
        </div>
      `;
  }
  isDark(bgColor) {
    try {
      // Get computed style of the button

      // Extract RGB values from rgb(...) or rgba(...)
      const rgb = bgColor.match(/\d+/g).map(Number); // [r, g, b, (a)]
      console.log(rgb);

      // Calculate relative luminance (per WCAG standards)
      const [r, g, b] = rgb;
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // You can also use perceived brightness formula:
      // const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      // Threshold: 128 is typical (0–255 scale)
      return luminance < 128; // true = dark, false = light
    } catch (error) {
      console.error(error);
    }
  }
  static get observedAttributes() {
    return ["color", "position", "zindex"];
  }
  changeName(newValue) {
    this.shadowRoot.getElementById("name").textContent = newValue;
  }
  changePosition(newValue) {
    try {
      let widget = document.querySelector("insurance-widget");
      let card = this.shadowRoot.querySelector(".card");

      let icon = this.shadowRoot.querySelector(".icon");
      if (!card) {
        return false;
      }

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
  changeColor(value) {
    try {
      console.log("changeColor");
      let icon = this.shadowRoot.querySelector(".icon");
      let widgetBody = this.shadowRoot.querySelector(".widgetBody");
      let link = this.shadowRoot.querySelector("a");
      console.log(link);
      if (icon) {
        icon.style.backgroundColor = value;
      }
      if (widgetBody) {
        widgetBody.style.border = "solid 1px " + value;
      }
      if (link) {
        link.style.backgroundColor = value;
        link.style.color = "white";

        if (this.isDark(value)) {
          console.log("It is light");
          link.style.color = "#000000";
        } else {
          console.log("It is dark");
          link.style.color = "#ffffff";
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  changeZindex(value) {
    let card = this.shadowRoot.querySelector(".card");
    card.style.zIndex = value;
  }
  attributeChangedCallback(name, oldValue, newValue) {
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
  toggleBox(e) {
    console.log("toggleBox");
    let widget = document.querySelector("insurance-widget");
    let widgetBody = this.shadowRoot.querySelector(".widgetBody");
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
  async connectedCallback() {
    document.addEventListener("DOMContentLoaded", async () => {
      // Code to run after the DOM is ready
      console.log("DOM is loaded!");
      console.log(this.getAttribute("wid"));
      // let apiresult = await "https://api.sampleapis.com/coffee/hot";
      // let dataressult = await apiresult.json();
      // console.log(dataressult);
      let result = await fetch("json/data.json");
      let data = await result.json();
      console.log(data);
      this.data = { ...this.data, ...data };
      let widgetBody = this.shadowRoot.querySelector(".widgetBody");
      if (data && widgetBody) {
        widgetBody.innerHTML = `<div>
            <h3>${this?.data?.title}</h3>
            <strong>Grade : ${this?.data?.grade}</strong>
            <strong>Rate : ${this?.data?.rate}</strong>
            <h4>${this?.data?.category}</h4>
            <a class="link" href="http://google.com">Google</a>
        </div>`;
      }
      let icon = this.shadowRoot.querySelector(".icon");
      icon.addEventListener("click", this.toggleBox.bind(this));

      let widget = document.querySelector("insurance-widget");
      widget.style.position = "fixed";
      widget.style.right = "0px";
      widget.style.bottom = "0";
      widget.style.transition = "all 1s";
      if (this.getAttribute("color")) {
        this.changeColor(this.getAttribute("color"));
      }
    });
    // Hit API
  }
}

customElements.define("insurance-widget", Widget);
