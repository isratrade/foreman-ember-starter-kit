import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionTo('hostgroups');
      }, function(response) {
        console.log("Hostgroup not saved!");
        console.log(response);
      });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('hostgroups');
    },

  }

});
