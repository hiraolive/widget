(() => { // webpackBootstrap
var __webpack_modules__ = ({});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.4.5")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.4.5";

})();
/************************************************************************/

/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
class Widget extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open"
    });
    this.data = {
      name: "",
      color: "",
      show: false
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
  isDark(bgColor) {
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
  static get observedAttributes() {
    return ["color", "position", "zindex"];
  }
  changePosition(newValue) {
    try {
      const widget = document.querySelector("insurance-widget");
      const card = this.shadow.querySelector(".card");
      const icon = this.shadow.querySelector(".icon");
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
  changeColor(value) {
    try {
      console.log("changeColor");
      const icon = this.shadow.querySelector(".icon");
      const widgetBody = this.shadow.querySelector(".widgetBody");
      const link = this.shadow.querySelector("a");
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
  changeZindex(value) {
    const card = this.shadow.querySelector(".card");
    card.style.zIndex = value;
  }
  attributeChangedCallback(name, oldValue, newValue) {
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
  toggleBox(e) {
    console.log("toggleBox");
    const widget = document.querySelector("insurance-widget");
    const widgetBody = this.shadow.querySelector(".widgetBody");
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
      console.log("DOM is loaded!");
      const wid = this.getAttribute("wid");
      console.log(wid);
      try {
        const result = await fetch("https://cdn.jsdelivr.net/gh/hiraolive/widget/json/data.json");
        const data = await result.json();
        this.data = {
          ...this.data,
          ...data
        };
        const widgetBody = this.shadow.querySelector(".widgetBody");
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
        const icon = this.shadow.querySelector(".icon");
        icon.addEventListener("click", this.toggleBox.bind(this));
        const widget = document.querySelector("insurance-widget");
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
})()
;
//# sourceMappingURL=bundle.js.map