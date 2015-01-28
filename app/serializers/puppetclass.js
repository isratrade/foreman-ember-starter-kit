import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  attrs: {
    module_name: {serialize: false},
    //module_name2: {key: 'module_name'},
  }

});
