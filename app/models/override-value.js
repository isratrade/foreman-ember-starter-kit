import DS from 'ember-data';

export default DS.Model.extend({
  match: DS.attr('string'),
  value: DS.attr('string'),
  use_puppet_default: DS.attr('boolean'),
  //smart_variable: DS.belongsTo('smart-variable')
});
