import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  provider: DS.attr('string'),
  display_type: DS.attr('string'),
  set_console_password: DS.attr('boolean'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});
