import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  //module_name2: DS.attr('string'),  //map to module_name2 in PuppetSerializer because of module_name is Ember method
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  smartClassParameters: DS.hasMany('smartClassParameter')
});
