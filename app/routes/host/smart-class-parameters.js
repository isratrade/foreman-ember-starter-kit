import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    var host = this.modelFor('host')
    return this.store.find('smart-class-parameter', {host_id: host.id});
  }
});
