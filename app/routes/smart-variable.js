import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('smart-variable', params.smart_variable_id);
  },
  activate:   function() {
    this.controllerFor('smart-variables').set('onShowPage', true);
  },

  deactivate:   function() {
    this.controllerFor('smart-variables').set('onShowPage', false);
  }
});
