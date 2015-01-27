import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('radiator', 1);
  },

  activate: function() {
    this.controllerFor('application').set('hideTopBar', true);
    this.controllerFor('application').set('isContainer', false);
  },

  deactivate: function() {
    this.controllerFor('application').set('hideTopBar', false);
    this.controllerFor('application').set('isContainer', true);
  }
});
