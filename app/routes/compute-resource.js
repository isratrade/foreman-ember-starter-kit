import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('compute-resource', params.compute_resource_id);
  },
  activate:   function() {
    this.controllerFor('compute-resources').set('onShowPage', true);
  },

  deactivate:   function() {
    this.controllerFor('compute-resources').set('onShowPage', false);
  },
});
