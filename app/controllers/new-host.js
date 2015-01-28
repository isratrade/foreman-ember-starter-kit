import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewRecord: function() {
      var self = this;
      var hostgroup = this.store.createRecord('hostgroup', this.get('fields'));
      hostgroup.save().then(function() {
        self.transitionToRoute('hostgroups');
      }, function(error) {
        console.log(error);
      });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('hostgroups');
    }

  },

});
