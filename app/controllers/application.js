import config from '../config/environment';
import Ember from 'ember';

export default Ember.Controller.extend({
  loginLink: config.APP.loginLink
});
