import { newSpecPage } from '@stencil/core/testing';
import { DpAmbulanceWlApp } from '../dp-ambulance-wl-app';

describe('dp-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [DpAmbulanceWlApp],
      html: `<dp-ambulance-wl-app base-path="/"></dp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('dp-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [DpAmbulanceWlApp],
      html: `<dp-ambulance-wl-app base-path="/ambulance-wl/"></dp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('dp-ambulance-wl-list');
  });
});
