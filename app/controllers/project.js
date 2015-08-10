import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteProject() {
      this.get('model')
        .destroyRecord();
      this.transitionToRoute('projects');
    }
  }
});
