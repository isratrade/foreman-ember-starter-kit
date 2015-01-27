import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    return this.store.find('puppetclass', params.puppetclass_id);
  },

  actions: {
    saveRecord: function() {
      alert('hi');
      // var self = this;
      // this.get('currentModel').save().then(function() {
      //   self.transitionTo('puppetclasses');
      // }, function(response) {
      //   console.log("puppetclass not saved!" + response);
      //   alert(response);
      // });
    }
  }

});
