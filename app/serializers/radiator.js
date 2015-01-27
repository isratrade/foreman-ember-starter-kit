import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({

  extractArray: function(store, type, payload) {
    // 'foreman-experimental-ui@model:setting:'
    payload['id'] = 1
    // var wrapped_payload = {};
    // var model_name = type.toString().split(":")[1];
    // wrapped_payload[model_name] = payload;
    // alert(model_name);
    return this._super(store, type, [payload]);
  },
  extractSingle: function(store, type, payload) {
    payload['id'] = 1
    console.log(payload);
    var wrapped_payload = {};
    wrapped_payload['radiator'] = payload;
    console.log(wrapped_payload);
    return this._super(store, type, wrapped_payload);
  },
});
