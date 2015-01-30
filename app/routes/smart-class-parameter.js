import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('smart-class-parameter', params.smart_class_parameter_id);
  },
  activate:   function() {
    this.controllerFor('smart-class-parameters').set('onShowPage', true);
  },

  deactivate:   function() {
    this.controllerFor('smart-class-parameters').set('onShowPage', false);
  },
});
