import DS from 'ember-data';

export default DS.Model.extend({
  variable: DS.attr('string'),
  description: DS.attr('string'),
  parameter_type: DS.attr('string'),
  default_value: DS.attr('string'),
  validator_type: DS.attr('string'),
  validator_rule: DS.attr('string'),
  merge_overrides: DS.attr('boolean'),
  avoid_duplicates: DS.attr('string'),
  puppetclass_id: DS.attr('number'),
  puppetclass_name: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});

