import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields', {});
    controller.set('hostgroups', this.store.find('hostgroup'));
    controller.set('locations', this.store.find('location'));
    controller.set('organizations', this.store.find('organization'));
    controller.set('defaultHostgroup', this.store.find('hostgroup', 1));
    controller.set('fields.hostgroup_id', this.store.find('hostgroup', 1));
    controller.set('defaultLocation', this.store.find('location', 3));
    controller.set('defaultOrganization', this.store.find('organization', 1));
  }
});
