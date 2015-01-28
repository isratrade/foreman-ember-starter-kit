import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveNewRecord: function() {
      var self = this;

      var host = this.store.createRecord('host', this.get('fields'));
      host.save().then(function() {
        self.transitionToRoute('hosts');
      }, function(error) {
        console.log(error);
      });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('hosts');
    }

  },

});
