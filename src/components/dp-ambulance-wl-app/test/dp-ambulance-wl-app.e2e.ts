import { newE2EPage } from '@stencil/core/testing';

describe('dp-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dp-ambulance-wl-app></dp-ambulance-wl-app>');

    const element = await page.find('dp-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
