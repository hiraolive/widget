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
         
            .widgetBody{
            padding:1rem;
            display:flex;
             background: #f9f9f9;
            border: 1px solid #ccc;
            display:flex;
            flex-direction:column;
            height:400px;
            margin-bottom:16px;
            width:400px;
            border-radius:20px;
            opacity:0;
            margin-right:16px;
             transition: opacity 1s;

            }
              .widgetBody.show{
               opacity:1;
              }
            .icon{
            width:50px;
            height:50px;
            border-radius:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            position:absolute;
            right:15px;
            top:-50px;
            margin-top:-6px;
            }
            .icon svg{
            width:30px; height:30px;
            }
             .icon svg path{
             stroke:#ff0000;
             }
        </style>
        <div class="card close">
            <div class="icon"><svg 
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="256"
   height="256"
   viewBox="0 0 256 256"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"
   sodipodi:docname="gala-secure.svg"
   inkscape:export-xdpi="96"
   inkscape:export-ydpi="96">
  <title
     id="title851">Gala icon set</title>
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="7.9195959"
     inkscape:cx="106.6139"
     inkscape:cy="37.054376"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     inkscape:document-rotation="0"
     showgrid="true"
     units="px"
     inkscape:pagecheckerboard="true"
     inkscape:showpageshadow="false"
     inkscape:window-width="1854"
     inkscape:window-height="1016"
     inkscape:window-x="66"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:snap-page="true"
     inkscape:snap-text-baseline="true"
     inkscape:snap-center="true"
     inkscape:snap-others="true"
     inkscape:snap-object-midpoints="true"
     inkscape:snap-midpoints="true"
     inkscape:snap-smooth-nodes="true"
     inkscape:snap-intersection-paths="true"
     inkscape:object-paths="true"
     inkscape:snap-bbox="true"
     inkscape:bbox-paths="true"
     inkscape:bbox-nodes="true"
     inkscape:snap-bbox-midpoints="true"
     inkscape:snap-bbox-edge-midpoints="true"
     showguides="true"
     inkscape:guide-bbox="true">
    <inkscape:grid
       type="xygrid"
       id="grid853"
       empspacing="16" />
    <sodipodi:guide
       position="128,8"
       orientation="0,1"
       id="guide857"
       inkscape:locked="false" />
    <sodipodi:guide
       position="80,248"
       orientation="0,1"
       id="guide859"
       inkscape:locked="false" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title>Gala icon set</dc:title>
        <dc:source>https://github.com/sisyphusion/gala-icons</dc:source>
        <dc:subject>
          <rdf:Bag />
        </dc:subject>
        <dc:creator>
          <cc:Agent>
            <dc:title>Jake Wells</dc:title>
          </cc:Agent>
        </dc:creator>
        <dc:contributor>
          <cc:Agent>
            <dc:title />
          </cc:Agent>
        </dc:contributor>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="icon"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       id="path871-3"
       d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"
       style="fill:none;stroke:#fff;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       id="path873-6"
       d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"
       style="fill:none;stroke:#fff;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cc"
       id="path871-3-7"
       d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"
       style="fill:none;stroke:#fff;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       id="path873-6-5"
       d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"
       style="fill:none;stroke:#fff;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       id="path881"
       d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"
       style="fill:none;stroke:#fff;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg></div>
<div class="widgetBody">
       
        </div>
      `;
  }

  static get observedAttributes() {
    return ["color", "position", "zindex"];
  }
  changeName(newValue) {
    this.shadowRoot.getElementById("name").textContent = newValue;
  }
  changePosition(newValue) {
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
  }
  changeColor(value) {
    let icon = this.shadowRoot.querySelector(".icon");
    if (icon) {
      icon.style.backgroundColor = value;
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
        </div>`;
      }
      let icon = this.shadowRoot.querySelector(".icon");
      icon.addEventListener("click", this.toggleBox.bind(this));

      let widget = document.querySelector("insurance-widget");
      widget.style.position = "fixed";
      widget.style.right = "0px";
      widget.style.bottom = "-445px";
      widget.style.transition = "all 1s";
    });
    // Hit API
  }
}

customElements.define("insurance-widget", Widget);
