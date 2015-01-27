import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  name2: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
//  smartClassParameters: DS.hasMany('smartClassParameters')
});
