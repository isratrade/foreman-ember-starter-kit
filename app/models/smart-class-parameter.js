import DS from 'ember-data';

export default DS.Model.extend({
  parameter: DS.attr('string'),
  description: DS.attr('string'),
  override: DS.attr('boolean'),
  parameter_type: DS.attr('string'),
  default_value: DS.attr('string'),
  use_puppet_default: DS.attr('boolean'),
  required: DS.attr('boolean'),
  validator_type: DS.attr('string'),
  validator_rule: DS.attr('string'),
  merge_overrides: DS.attr('boolean'),
  avoid_duplicates: DS.attr('string'),
  override_value_order: DS.attr('string'),
  override_values_count: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  // puppetclass: DS.belongsTo('puppetclass')

});
