import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    var hostgroup = this.modelFor('hostgroup')
    return this.store.find('parameter', {hostgroup_id: hostgroup.id});
  }
});
