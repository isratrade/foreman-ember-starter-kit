import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['hostgroups'],
  onShowPage: Ember.computed.alias("controllers.hostgroups.onShowPage"),

  isEditing: false,
  actions: {
    saveChanges: function() {
      var self = this;
      if (this.get('model.isDirty')) {
        this.get('model').save().then(function() {
          self.transitionTo('hostgroups');
        });
      }
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('hostgroups');
    }

  },

});
