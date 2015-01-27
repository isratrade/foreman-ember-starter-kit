import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    if (id > 0) {
      return this._super(type, id, record);
    } else {
      return 'api/v2/puppetclasses?style=list'
    }
  }

});
