import config from '../config/environment';
import Ember from 'ember';

export function loginLink(params/*, hash*/) {
  console.log("loginLink %s", config.APP.loginLink);
  return config.APP.loginLink;
}

export default Ember.Helper.helper(loginLink);
