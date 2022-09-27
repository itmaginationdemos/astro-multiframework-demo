class CustomWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.renderUpdate();
    }

    renderUpdate() {

        let fragment = document.createDocumentFragment();
        fragment.append(this.getTemplate().cloneNode(true));

        const count = this.getAttribute('count');
        if (count) {
            const showCountDiv = document.createElement("div");
            showCountDiv.innerText = "with count: " + count;
            showCountDiv.classList.add('count-shown');
            fragment.append(showCountDiv);
        }

        this.shadowRoot.append(fragment);
    }

    getTemplate() {
        const templateString = `
            <div id="my-paragraph">
                <style>
                  .count-shown {
                    border-bottom: 1px solid black;
                    padding: 2px;
                  }
            
                  p {
                    color: white;
                    background-color: #666;
                    padding: 5px;
                    margin-bottom: 5px;
                  }
                </style>
                <p>custom web component appears!</p>
            </div>
        `;
        const template = window.document.createElement('template');
        template.innerHTML = templateString.trim();
        return template.content.firstChild;
    }

}
customElements.define('custom-web-component', CustomWebComponent);

export { CustomWebComponent }