import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    var puppetclass = this.modelFor('puppetclass')
    return this.store.find('smart-class-parameter', {puppetclass_id: puppetclass.id});
  }
});
