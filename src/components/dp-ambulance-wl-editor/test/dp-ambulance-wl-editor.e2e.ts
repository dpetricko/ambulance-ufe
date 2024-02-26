import { newE2EPage } from '@stencil/core/testing';

describe('dp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dp-ambulance-wl-editor></dp-ambulance-wl-editor>');

    const element = await page.find('dp-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
