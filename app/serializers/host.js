import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeHash: {
      host: function(hash) {
          console.log('HASH');
          console.log(hash);
          delete hash.model_name;
          return hash;
      }
  },

  attrs: {
    operatingsystem_name: {serialize: false},
    subnet_name: {serialize: false},
    domain_name: {serialize: false},
    environment_name: {serialize: false},
    compute_profile_name: {serialize: false},
    architecture_name: {serialize: false},
    medium_name: {serialize: false},
    ptable_name: {serialize: false},
    sp_name: {serialize: false},
    realm_name: {serialize: false},
    hostgroup_name: {serialize: false},
    compute_resource_name: {serialize: false},
    organization_name: {serialize: false},
    location_name: {serialize: false},
    image_name: {serialize: false},
    model_name: {serialize: false},
  }

});
