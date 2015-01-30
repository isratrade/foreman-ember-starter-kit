import Ember from 'ember';

export default Ember.ArrayController.extend({
  filterText: '',
  searchText: '',
  queryParams: ['searchText'],

  filteredHostgroups: function() {
    var filterText = this.get('filterText').toLowerCase();
    // this ONLY filters by exact match, NOT partial
    // return this.filterProperty('title', filterText);
    return this.filter(function(hostgroup) {
      return (hostgroup.get('title').toLowerCase().indexOf(filterText) !== -1);
    });
  }.property('filterText', 'this.@each'),

  cntFilteredHostgroups: Ember.computed.alias('filteredHostgroups.length'),

  filteredModel: function() {
    if (this.get('searchText')) {
      //this.get('model').reload(); //TODO
    }
    if (this.get('filterText')) {
      return this.get('filteredHostgroups');
    } else {
      return this;
    }
  }.property('filterText', 'searchText'),

});
