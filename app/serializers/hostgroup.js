import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  attrs: {
    operatingsystem_name: {serialize: false},
    subnet_name: {serialize: false},
    domain_name: {serialize: false},
    environment_name: {serialize: false},
    compute_profile_name: {serialize: false},
    architecture_name: {serialize: false},
    medium_name: {serialize: false},
    ptable_name: {serialize: false},
    realm_name: {serialize: false},
    sp_name: {serialize: false},
    sp_mac: {serialize: false},
    sp_ip: {serialize: false},

  }

});
