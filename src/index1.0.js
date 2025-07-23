class Widget extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
    this.data = {
      wid: "",
      font: "",
      position: "",
      color: "",
      show: false,
      selected: "",
    };

    this.shadow.innerHTML = `

  <style> 
     .widget-content { --brand-color: #cccccc; --text-color:#000; --brand-font:Roboto,Arial, sans-serif; width: 100%;max-width: 960px;border-radius:0.375rem; box-shadow: 0 0 25px rgba(0,0,0,0.03);  z-index:99999; padding: 2rem; backdrop-filter: blur(24px); background: linear-gradient(300deg, rgb(115 160 191 / 20%) 0%, rgb(135 134 134 / 20%) 100%);}
    .widget-content,.widget-content * { font-family: var(--brand-font); color:var(--text-color)}
    .d-none{display:none !important;}
    .company-data-wrap {display: flex;align-items: center;flex-wrap: wrap;justify-content: space-between;gap: 1rem;margin-bottom: 1rem;}
    .circle-img-wrap {display: flex;align-items: center;gap: 0.5rem;flex: 1;}
    .circle-img-wrap .circle-img {width: 2rem;height: 2rem;border-radius: 50%;border: 1px solid var(--brand-color);overflow: hidden;}
    .circle-img-wrap .circle-img img {width: 100%;height: 100%;object-fit: cover;}
    .circle-img-wrap .circle-text {color: #333333;font-size: 1.25rem;font-weight: 700;text-transform: capitalize;flex: 1;}
    .premium-Official-wrap {display: flex;gap: 0.5rem;align-items: center;}.premium-Official-text {color: #333;font-size: 0.75rem;}
    .custom-badge {padding: 0.125rem 0.375rem;background: var(--brand-color);color: var(--text-color);font-weight: 700;border-radius: 2px;font-size: 0.75rem;text-transform: capitalize;}
    .coverage-packages-holder {background-color: #fff;border-radius: 4px;padding: 1.25rem;display: flex;flex-direction: column;gap: 3rem;}
    .coverage-packages-title {font-size: 1.25rem;font-weight: 600;text-align: center;color: #1e1e20;}
    .widget-box-wrap {display: flex;gap: .2rem; color:var(--text-color)}
    .widget-box {display: flex;margin: 0 4px;padding: 2rem .75rem;flex-direction: column;align-items: flex-start;gap: 1.5rem;flex: 1 1 30%;border-radius: .125rem;cursor: pointer;transition: all .3s ease-in-out;cursor: pointer;}
    .widget-box.active {background-color: var(--brand-color);color: var(--text-color);border-color: var(--brand-color);transform: scale(1.05);z-index: 10;}
    .widget-box.active .price-details .label, .widget-box.active .price-details .term {color: var(--text-color);}
    .widget-box.active .plan-label {color:var(--text-color);}
    .widget-box.active .price-amount {color: var(--text-color);font-size: 2rem;}
    .widget-box.active .price-amount .dollor-sign {color: var(--text-color);font-size: .75rem;}
    .widget-box.active .widget-box-title {color:var(--text-color); font-size: .75rem;}
    .coverage-packages-wrap {display: flex;flex-direction: column;align-items: flex-start;gap: .5rem;align-self: stretch;}
    .widget-box-title {color: var(--text-color);font-size: .625rem;font-style: normal;font-weight: 600;line-height: 120%;text-transform: capitalize;}
    .widget-price-container {display: flex;align-items: center;gap: 0.5rem;}
    .price-amount {display: flex;align-items: center;gap: .25rem;color: #0e1117;font-size: 1.25rem;font-style: normal;font-weight: 500;line-height: 120%;text-transform: capitalize;}
    .dollor-sign {font-size: 0.625rem;color: #191e2a;}
    .price-details .label {color: #191e2a;font-size: 0.625rem;}
    .price-details .term {color: #606981;font-size: 0.625rem;}
    .widget-box-info {font-size: 0.625rem;color: #606981;line-height: 1.5;text-transform: capitalize;}
    .widget-box.active .widget-box-info {color: var(--text-color);}
    .plan-text-line {display: flex;align-items: center;gap: 0.5rem;width: 100%;}
    .plan-text-line .line {height: 1px;background-color: #e3e8f0;display: block;}.plan-text-line .short {flex: 0.2;}
    .plan-text-line .long {flex: 1;}
    .plan-text-line .plan-label {font-size: 0.625rem;font-weight: 400;letter-spacing: 0.1em;color: #b7c0d9;white-space: nowrap;}
    .packages-badge {display: flex;padding: .125rem .5rem;justify-content: center;align-items: center;gap: .25rem;border-radius: .125rem;background: #d9d9d9;color: #feffff;text-align: center;font-size: .625rem;font-style: normal;font-weight: 400;line-height: 150%;text-transform: uppercase;}
    .packages-badge.popular-color {background-color: #80c8f8;}
    .widget-box.active .packages-badge.popular-color {border-color: #f3faff;}
    .widget-box.active .packages-badge {border: 1px solid #bfe3fb;background: none;}
    .info-btn {margin-top: 1rem; text-decoration:none; background-color: var(--brand-color);color: var(--text-color);border: 2px solid var(--brand-color);border-radius: 4px;padding: 0.5rem 1.5rem;font-size: 0.75rem;font-weight: 600;text-transform: capitalize;cursor: pointer;}
    .info-btn.disabled {opacity:0.5; pointer-events:none}
    .widget-bottom-left, .widget-bottom-right {position: fixed;transition: all 0.3s ease-in-out;max-width: 30rem;}
    .widget-bottom-left {left: 0.625rem;bottom: 0.625rem;}
    .widget-bottom-right {right: 0.625rem;bottom: 0.625rem;}
    .widget-bottom-left .widget-box-info, .widget-bottom-right .widget-box-info {display: none;}
    .widget-bottom-left .plan-text-line, .widget-bottom-right .plan-text-line {display: none;}
    .widget-bottom-left .widget-box-wrap, .widget-bottom-right .widget-box-wrap {display: flex;flex-direction: column;justify-content: center;align-items: center;gap: 0.5rem;align-self: stretch;}
    .widget-bottom-left .widget-box, .widget-bottom-right .widget-box {padding: 0.75rem 1.5rem;gap: 0.75rem;align-self: stretch;flex-direction: row;align-items: center;justify-content: space-between;}
    .widget-bottom-left .coverage-packages-holder, .widget-bottom-right .coverage-packages-holder {min-height: auto;gap: 1rem;padding: 1.25rem;}
    .widget-bottom-left .widget-not-found,.widget-bottom-right .widget-not-found{max-width: 77%;
    min-height: 32.375rem;}
     .widget-bottom-inline .widget-not-found{max-width: 100%;
    }
    .widget-inline{position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);}
    .widget-inline .packages-badge {display: none;}.widget-box-border {border: 1px solid #80C8F8;background-color: #F3FAFF;}
    .widget-box-border .line {background-color: #80c8f8;}
    .widget-box-border .plan-label {color: #80c8f8;}
    .widget-box.active.widget-box-border .plan-text-line .line {background-color: #FEFFFF;}
    .button-wrap {text-align: center;}
      @media (max-width: 768px) {
          .widget-box-wrap {flex-direction: column;}
          .widget-box { flex: 1 1 100%; }
      }

      @media (max-width: 767px) {
          .widget-box-wrap { gap: .5rem; }
          .coverage-packages-holder { padding: 1rem; gap: 1rem;}
          .widget-bottom-left,
          .widget-bottom-right { max-width: 19rem; }
          .widget-bottom-left .widget-box, .widget-bottom-right .widget-box { padding: .75rem 1rem;  }
      }
 .widget-content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 1rem;
            background: linear-gradient(235deg, rgba(128, 200, 248, 0) 0%, rgba(128, 200, 248, 0.2) 100%);
            backdrop-filter: blur(5px);
            width: 100%;
            min-height: 100vh;
            margin: auto;
        }

        .widget-not-found {
            display: flex;
            max-width: 100%;
            min-height: 27.375rem;
           
            padding: 3.5rem;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            border-radius: 2rem;
            background: #fafdff;
            position: relative;
            margin:0 auto;
        }

        .widget-not-found p {
            width: 15rem;
            color: #1b2228;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .widget-not-found .top-text {
            position: absolute;
            right: 3.125rem;
            top: 3.3125rem;
            text-align: right;
        }

        .widget-not-found .bottom-text {
            position: absolute;
            left: 3.75rem;
            bottom: 5.0625rem;
            text-align: left;
        }

        .widget-not-found .widget-text {
            color: #80c8f8;
            font-size: 4rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.08rem;
            align-self: stretch;
        }

        .widget-not-found .widget-text.text-center {
            text-align: center;
        }

        .widget-not-found .widget-text.text-end {
            text-align: end;
        }

        .go-back-home {
            display: flex;
            padding: 0.3rem 0.5rem 0.4rem;
            align-items: center;
            gap: 0.25rem;
            max-width: 6.4rem;
            border-radius: 0.375rem;
            border: 1px solid #606981;
            background: #191e2a;
            color: #f4f7fe;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 600;
            position: absolute;
            left: 17.125rem;
            bottom: 2.625rem;
            text-decoration: none;
        }

        @media (max-width: 679px) {

            .widget-not-found .top-text,
            .widget-not-found .bottom-text {
                position: static;
                width: 100%;
            }

            .widget-not-found .go-back-home {
                position: static;
                margin-top: 1rem;
            }

            .widget-not-found .widget-text {
                font-size: 3rem;
            }

            .widget-not-found p {
                font-size: 1rem;
            }
        }
      </style>
     
      
  `;
  }
  convertCurrencyCodeToSymbol(code) {
    const map = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
      JPY: "¥",
      // add more as needed
    };
    return map[code] || code; // fallback to code if unknown
  }
  hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
      );
    }
    throw new Error("Bad Hex");
  }

  isDark(color) {
    try {
      let bgColor = this.hexToRgbA(color);
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
    return ["color", "position", "zindex", "wid"];
  }
  bottomRightPosition() {
    let widget = this.shadow.querySelector(".widget-content");
    if (widget) {
      widget.classList.remove("widget-inline");
      widget.classList.add("widget-bottom-right");
      widget.classList.remove("widget-bottom-left");
    }
  }
  bottomLeftPosition() {
    let widget = this.shadow.querySelector(".widget-content");
    if (widget) {
      widget.classList.remove("widget-inline");
      widget.classList.remove("widget-bottom-right");
      widget.classList.add("widget-bottom-left");
    }
  }
  inlinePosition() {
    let widget = this.shadow.querySelector(".widget-content");
    if (widget) {
      widget.classList.add("widget-inline");
      widget.classList.remove("widget-bottom-right");
      widget.classList.remove("widget-bottom-left");
    }
  }
  changePosition(newValue) {
    try {
      console.log("changePosition");
      switch (newValue) {
        case "inline":
          this.inlinePosition();
          break;
        case "bottom-right":
          this.bottomRightPosition();
          break;
        case "bottom-left":
          this.bottomLeftPosition();
          break;
        default:
          this.inlinePosition();
      }
    } catch (error) {
      console.error(error);
    }
  }
  changeColor(value) {
    try {
      console.log("changeColor");
    } catch (error) {
      console.error(error);
    }
  }
  changeZindex(value) {
    console.log("changeZindex");
    const wrapper = this.shadow.querySelector(".widget-content");
    if (wrapper) {
      wrapper.style.zIndex = value;
    }
  }
  changewid(value) {
    console.log("changewid");
    this.data.wid = value;
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
      case "wid":
        this.changewid(newValue);
        break;
    }
  }
  chooseWidget(e) {
    try {
      let btn = this.shadow.querySelector(".info-btn");
      let widgets = this.shadow.querySelectorAll(".widget-box");
      if (widgets.length > 0) {
        widgets.forEach((box) => {
          box.classList.remove("active");
        });
      }
      console.log(this.data);
      if (e.currentTarget.classList.contains("active")) {
        console.log("found");
        e.currentTarget.classList.remove("active");
        btn.classList.add("disabled");
        this.data.selected = "";
      } else {
        console.log("notfound");
        e.currentTarget.classList.add("active");
        btn.classList.remove("disabled");
        this.data.selected = e.currentTarget.dataset.name;
      }
    } catch (error) {
      console.error(error);
    }
  }

  buildDataNotFound() {
    let dataNotFound = document.createElement("div");
    let widgetClass = "inline";
    if (this.getAttribute("position")) {
      widgetClass = this.getAttribute("position");
    }
    dataNotFound.className = `widget-content widget-${widgetClass}`;
    dataNotFound.innerHTML = ` 
    <div class="widget-not-found">
        <p class="top-text">Please try searching again or explore other options.</p>
        <span class="widget-text">Oops!</span>
        <span class="widget-text text-center">Widget Not</span>
        <span class="widget-text text-end">Found</span>
        <p class="bottom-text">The widget you're looking for might have been moved or deleted.</p>
       <a href="/widgets" class="go-back-home">Go back home</a>
    </div>
`;
    this.shadow.appendChild(dataNotFound);
  }

  buildWidgets({
    branding,
    display_settings,
    insurance_type,
    plans,
    product_name,
    provider_name,
  }) {
    let widgetContent = document.createElement("div");
    let widgetPosition = "inline";
    if (this.getAttribute("position")) {
      widgetPosition = this.getAttribute("position");
    }
    widgetContent.className = `widget-content widget-${widgetPosition}`;
    widgetContent.innerHTML = `
      <div class="company-data-wrap">
        <div class="circle-img-wrap">
          <div class="circle-img">
            <img class="avatar" src="${branding.logo_url}" alt="Icon" />
          </div>
            <span class="circle-text productName">${provider_name}</span>
            </div>
            <div class="premium-Official-wrap">
                <span class="premium-Official-text">${product_name}</span>
                <span class="custom-badge insuranceType">${insurance_type}</span>
            </div>
      </div>
      <div class="coverage-packages-holder">
        <h2 class="coverage-packages-title">Coverage Packages</h2>
        <div class="widget-box-wrap">
          ${
            plans.length > 0
              ? plans
                  .map((item) => {
                    return `<div class="widget-box" data-name="${item.name}">
                    <div class="coverage-packages-wrap">
                                <p class="widget-box-title">${item.name}</p>
                                <div class="widget-price-container">
                                    <span class="price-amount"><span class="dollor-sign">${this.convertCurrencyCodeToSymbol(
                                      item.currency
                                    )}</span>${item.cost}</span>
                                    <div class="price-details">
                                        <span class="label">premium</span>
                                        <span class="term">/ ${
                                          item.premium_frequency
                                        }</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p class="widget-box-info">
                              ${item.description}
                            </p>
                    </div>`;
                  })
                  .join("")
              : ""
          }
        </div>
        <div class="button-wrap">
          <a href="${
            display_settings.cta_url
          }" target="_blank" class="info-btn disabled">${
      display_settings.cta_text
    }</a>
        </div>
      </div>
  `;
    this.shadow.appendChild(widgetContent);
  }
  async connectedCallback() {
    document.addEventListener("DOMContentLoaded", async () => {
      // Code to run after the DOM is ready
      if (!this.getAttribute("position")) {
        this.setAttribute("position", "inline");
      }
      try {
        let result = await fetch(
          `https://dev-api.lnp.olive.media/api/public/widgets/${this.getAttribute(
            "wid"
          )}`
        );
        let data = await result.json();
        data = {
          success: true,
          message: "Widget fetched successfully",
          error: null,
          data: {
            provider_name: "sola",
            product_name: "Product 22",
            insurance_type: "sola",
            branding: {
              accent_color: "#fafafa",
              font: "Roboto",
              logo_url:
                "https://d2z87isaprpvk.cloudfront.net/insurance_providers/1752483669-jpg.png",
            },
            display_settings: {
              cta_text: "Call to Action Btn",
              cta_url: "https://dashboard.lifeandprovide.com/",
            },
            plans: [
              {
                name: "plan 2",
                premium_frequency: "monthly",
                cost: "10",
                currency: "USD",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie risus urna",
              },
              {
                name: "plan 3",
                premium_frequency: "monthly",
                cost: "10",
                currency: "USD",
                description:
                  "Donec luctus vulputate lobortis. Suspendisse interdum nulla eu nisl tristique ultricies. ",
              },
              {
                name: "plan 4",
                premium_frequency: "monthly",
                cost: "10",
                currency: "USD",
                description:
                  "Quisque sit amet leo a diam ultricies placerat. Donec arcu ante, gravida vel rutrum ullamcorper, vulputate vitae sem. Ut lectus quam, vulputate at odio quis, congue vulputate tortor.",
              },
            ],
          },
        };
        // data = null;
        if (!data?.data || data?.data?.plans.length === 0) {
          this.buildDataNotFound().bind(this);
          return false;
        }
        const {
          branding,
          display_settings,
          insurance_type,
          plans,
          product_name,
          provider_name,
        } = JSON.parse(JSON.stringify(data.data));

        this.buildWidgets({
          branding,
          display_settings,
          insurance_type,
          plans,
          product_name,
          provider_name,
        });

        // Click Event for all widget to choose
        const widgetBox = this.shadow.querySelectorAll(".widget-box");
        if (widgetBox.length > 0) {
          widgetBox.forEach((box) => {
            box.addEventListener("click", this.chooseWidget.bind(this));
          });
        }

        if (plans.length > 0) {
          // Apply the stylesheet to the shadow root
          let widget = this.shadow.querySelector(".widget-content");
          widget.style.setProperty("--brand-color", branding.accent_color);
          widget.style.setProperty("--brand-font", branding.font);
          if (this.isDark(branding.accent_color)) {
            widget.style.setProperty("--text-color", "#feffff");
          } else {
            console.log("light");
            widget.style.setProperty("--text-color", "#000000");
          }
          // Putting Font in head tag
          const fontLink = document.createElement("link");
          fontLink.href = `https://fonts.googleapis.com/css2?family=${
            branding?.font ? branding.font : "Roboto"
          }&display=swap`;
          fontLink.rel = "stylesheet";
          document.head.appendChild(fontLink);
          if (plans.length == 3) {
            let ele = this.shadow.querySelector(".widget-box:nth-child(2)");
            ele.style.border = `solid 1px var(--brand-color)`;
          }
        }

        this.data = {
          ...this.data,
          ...data,
        };
      } catch (error) {
        this.buildDataNotFound().bind(this);
      }
    });
    // Hit API
  }
}

customElements.define("insurance-widget", Widget);
