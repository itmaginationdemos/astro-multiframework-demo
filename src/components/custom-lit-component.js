import { LitElement, html } from 'lit';
import './custom-lit-component.css';

const tagName = 'custom-lit-component';

export class CustomLitComponent extends LitElement {
    static get properties() {
        return {
            count: {
                type: Number,
            },
        };
    }

    render() {
        return html`<p>
            custom lit element component appears!
            ${this.count ? 'with count: ' + this.count : ''}
        </p>`;
    }
}

customElements.define(tagName, CustomLitComponent);