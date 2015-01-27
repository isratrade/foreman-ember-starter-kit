import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  module_name: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
//  smartClassParameters: DS.hasMany('smartClassParameters')
});
