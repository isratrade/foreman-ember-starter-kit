import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    console.log('PARAMS');
    var a = this.modelFor('puppetclass')
    console.log(a.get('name'));
    return this.store.find('smart-class-parameter', {puppetclass_id: params.puppetclass_id});
  }
});
