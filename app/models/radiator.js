import DS from 'ember-data';

export default DS.Model.extend({
  total_hosts: DS.attr('number'),
  bad_hosts: DS.attr('number'),
  bad_hosts_enabled: DS.attr('number'),
  active_hosts: DS.attr('number'),
  active_hosts_ok: DS.attr('number'),
  active_hosts_ok_enabled: DS.attr('number'),
  ok_hosts: DS.attr('number'),
  ok_hosts_enabled: DS.attr('number'),
  out_of_sync_hosts: DS.attr('number'),
  out_of_sync_hosts_enabled: DS.attr('number'),
  disabled_hosts: DS.attr('number'),
  pending_hosts: DS.attr('number'),
  pending_hosts_enabled: DS.attr('number'),
  good_hosts: DS.attr('number'),
  good_hosts_enabled: DS.attr('number'),
  percentage: DS.attr('number'),
  reports_missing: DS.attr('number')
});
