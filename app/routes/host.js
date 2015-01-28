import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('host', params.host_id);
  },
  activate:   function() {
    console.log('entered host route');
    this.controllerFor('hosts').set('onShowPage', true);
  },

  deactivate:   function() {
    console.log('left host route');
    this.controllerFor('hosts').set('onShowPage', false);
  }
});

