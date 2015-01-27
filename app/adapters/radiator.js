import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function(type) {
    return "dashboard";
  },
  buildURL: function(type, id, record) {
    return 'api/v2/dashboard'
  }
});
