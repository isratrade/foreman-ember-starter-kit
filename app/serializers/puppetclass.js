import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
 extractArray: function(store, type, payload) {
    // 'foreman-experimental-ui@model:setting:'
    var wrapped_payload = {};
    var model_name = type.toString().split(":")[1];
    wrapped_payload[model_name] = $.map(payload['results'], function(v) { return v;  });
    return this._super(store, type, wrapped_payload);
  },

  // keyForAttribute: function(attr) {
  //   //var newAttr = ( (attr === 'module_name') ? 'module_group' : attr)
  //   var newAttr = attr;
  //   if (attr === 'module_group') {
  //     newAttr = 'module_name';
  //   }
  //   return newAttr;
  // }
});
