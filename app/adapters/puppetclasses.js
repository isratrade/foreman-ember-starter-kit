import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    return 'api/v2/puppetclasses?style=list'
  }
});
