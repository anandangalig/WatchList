//set up authentication method which provides authenticationSucceeded and invalidationSucceeded events that are triggered when the session is either successfully autheticated or invalidated
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  shouldDisabled: false,
  myContent: [
    { label: 'Cell Phones with Plans', value: 'pcmcat209400050001' },
    { label: 'Desktop Computers', value: 'abcat0501000' },
    { label: 'Digital Cameras', value: 'abcat0401000' },
    { label: 'Health, Beauty, and Fitness', value: 'pcmcat242800050021' },
    { label: 'Headphones', value: 'abcat0204000' },
    { label: 'Home Audio', value: 'pcmcat241600050001' },
    { label: 'Home Automation and Security', value: 'pcmcat254000050002' },
    { label: 'iPad, Tablets, and E-Readers', value: 'pcmcat209000050006' },
    { label: 'Laptops', value: 'abcat0502000' },
    { label: 'Portable and Wireless Speakers', value: 'pcmcat310200050004' },
    { label: 'Ranges, Cooktops, and Ovens', value: 'abcat0904000' },
    { label: 'Refrigerators', value: 'abcat0901000' },
    { label: 'Small Kitchen Appliances', value: 'abcat0912000' },
    { label: 'TVs', value: 'abcat0101000' },
    { label: 'Washers and Dryers', value: 'abcat0910000' },
  ],

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .catch(reason => {
          this.set('errorMessage', reason.error || reason);
        });
    },
  },
});
