import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isLongerThanFive: Ember.computed.gte('message.length', 5),

  isEnabled: Ember.computed.and('isValidEmail', 'isLongerThanFive'),
  isDisabled: Ember.computed.not('isEnabled'),

  actions: {

    sendMessage() {
      console.info(`Sending of the message...`);
      console.log(`---------`);
      console.log(`From: ${this.get('emailAddress')}`);
      console.log(`Message: ${this.get('message')}`);
      console.log(`---------`);
      this.set('responseMessage', `Thank you! We've just sent your message.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
