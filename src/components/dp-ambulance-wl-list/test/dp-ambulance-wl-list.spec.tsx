import { newSpecPage } from '@stencil/core/testing';
import { DpAmbulanceWlList } from '../dp-ambulance-wl-list';

describe('dp-ambulance-wl-list', () => {
   it('renders', async () => {
      const page = await newSpecPage({
         components: [DpAmbulanceWlList],
         html: `<dp-ambulance-wl-list></dp-ambulance-wl-list>`,
      });

      const wlList = page.rootInstance as DpAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length;

      const items = page.root.shadowRoot?.querySelectorAll("md-list-item");
      expect(items?.length).toEqual(expectedPatients);
   });
});