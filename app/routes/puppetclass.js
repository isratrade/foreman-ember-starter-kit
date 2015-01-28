import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    return this.store.find('puppetclass', params.puppetclass_id);
  },

  actions: {
    saveRecord: function() {
      var self = this;
      // console.log(this);
      //   console.log('currentModel');
      //   console.log(this.get('currentModel'));
      this.get('currentModel').save().then(function() {
        self.transitionTo('puppetclasses');
      }, function(response) {
        console.log("puppetclass not saved!");
        console.log(response);
      });
    }
  }

});
