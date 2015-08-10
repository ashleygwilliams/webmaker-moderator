import Ember from 'ember';

export default Ember.Route.extend({
  model: function(project_id) {
    return this.store.findRecord('project', project_id);
  }
});
