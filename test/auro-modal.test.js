import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-modal.js';

describe('auro-modal', () => {
  it('sets the CSS class on auro-modal > div element', async () => {
    const el = await fixture(html`
      <auro-modal cssclass="testClass"></auro-modal>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-modal is accessible', async () => {
    const el = await fixture(html`
      <auro-modal cssclass="testClass"></auro-modal>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-modal custom element is defined', async () => {
    const el = await !!customElements.get("auro-modal");

    await expect(el).to.be.true;
  });
});
