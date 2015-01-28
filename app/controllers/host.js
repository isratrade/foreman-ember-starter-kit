import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['hosts'],
  onShowPage: Ember.computed.alias("controllers.hosts.onShowPage"),

  isEditing: false,
  // isSelectedAsHypervisor: true,
  // isSelectedAsEngine: true,
});
