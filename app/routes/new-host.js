import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields', {model_id: 1, model_name: 'Optiplex'});
    controller.set('hostgroups', this.store.find('hostgroup'));
    controller.set('locations', this.store.find('location'));
    controller.set('organizations', this.store.find('organization'));
  }
});
