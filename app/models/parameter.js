import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string'),
  priority: DS.attr('string'),
  is_property: DS.attr('boolean'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
