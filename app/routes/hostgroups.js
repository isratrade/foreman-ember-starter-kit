import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log('Hostgroups Route Params');
    console.log(params);
    //return this.store.find('hostgroup', {search: 'name ~ child'});
    return this.store.find('hostgroup');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  },

});
