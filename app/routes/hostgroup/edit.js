import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    // controller.set('domains', this.store.find('domain'));
    // controller.set('subnets', this.store.find('subnet'));
  },

  activate:   function() {
    this.controllerFor('hostgroup').set('isEditing', true);
    console.log('ACTIVATE HOSTGROUP EDIT ROUTE');
  },
  deactivate: function() {
    this.controllerFor('hostgroup').set('isEditing', false);
    console.log('DE-ACTIVATE HOSTGROUP EDIT ROUTE');
  }
});
