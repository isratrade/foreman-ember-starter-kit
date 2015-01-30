import Ember from 'ember';

export default Ember.ArrayController.extend({
  searchedHostgroups: function() {
    var search = this.get('search').toLowerCase();
    //return this.filterProperty('firstname', search);  // this searches ONLY by first name Joe, not partial, Jo
    return this.filter(function(hostgroup) {
      return (hostgroup.get('name').toLowerCase().indexOf(search) !== -1);
    });
  }.property('search', 'this.@each'),

  filteredHostgroups: function() {
    return this.get('search') ? this.get('searchedHostgroups') : this;
  }.property('search', 'searchedHostgroups'),

  cntFilteredHostgroups: function() {
      return this.get('filteredHostgroups').get('length');
  }.property('search', 'this.@each')


});
