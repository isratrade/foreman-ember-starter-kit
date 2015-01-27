import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    return this.store.find('puppetclass', params.puppetclass_id);
  }
});
