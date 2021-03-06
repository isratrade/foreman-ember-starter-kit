import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  // log when Ember generates a controller or a route from a generic class
  LOG_ACTIVE_GENERATION: true,
  // log when Ember looks up a template or a view
  LOG_VIEW_LOOKUPS: true
});

Router.map(function() {
  this.route('login');
  this.route('loggedin');

  this.route('rhci', { path: '/deployments/new' });
  this.route('deployments');

  this.resource('deployment', function() {

    this.resource('satellite', function() {
      this.resource('configure-organization');
      this.resource('configure-environment');
    });

    this.resource('rhev', function() {
      this.resource('rhev-setup', { path: 'setup' });
      this.resource('hypervisor', function() {
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.resource('engine', function() {
        this.route('hypervisor');
        this.route('discovered-host');
        this.route('existing-host');
        this.route('new-host');
      });
      this.resource('rhev-options', { path: 'configuration' });
      this.resource('storage');
      this.resource('networking');
    });

    this.resource('openstack', function() {
      this.resource('osp-settings', { path: 'settings' });
      this.resource('osp-network', { path: 'network' });
      this.resource('osp-overview', { path: 'overview' });
      this.resource('osp-configuration', { path: 'configuration' });
    });
    this.resource('cloudforms', function() {
      this.resource('where-install');
      this.resource('cloudforms-storage-domain', {path: 'storage-domain'});
      this.resource('cloudforms-vm', {path: 'vm'});
    });
    this.resource('review', function() {
      this.resource('subscriptions');
      this.resource('products');
      this.route('installation');
      this.route('progress');
    });
  });

  this.resource('hostgroups', function() {
    this.resource('hostgroup', { path: '/:hostgroup_id' }, function() {
      this.route('edit');
      this.route("smart-class-parameters");
      this.route("smart-variables");
      this.route("parameters");
      this.route("puppetclasses");
    });
  });

  this.resource("puppetclasses", function() {
    this.resource('puppetclass', { path: '/:puppetclass_id' }, function() {
      this.route('edit');
      this.route("smart-class-parameters");
      this.route("smart-variables");
    });
  });

  this.resource("smart-class-parameters", function() {
    this.resource('smart-class-parameter', { path: '/:smart_variable_id' });
  });
  this.resource("smart-variables", function() {
    this.resource('smart-variable', { path: '/:smart_variable_id' });
  });

  this.resource('hosts', function() {
    this.resource('host', { path: '/:host_id' }, function() {
      this.route('edit');
      this.route("smart-class-parameters");
      this.route("smart-variables");
      this.route("parameters");
      this.route("puppetclasses");
    });
  });

  this.route("new-host", { path: '/hosts/new' });

  this.route('domains');

  this.resource('subnets', function() {
    this.resource('subnet', { path: '/:subnet_id' }, function(){
      this.route('edit');
    });
  });

  this.resource("compute-resources", function() {
    this.resource('compute-resource', { path: '/:compute_resource_id' });
  });

  this.route('review/installation');
  this.route('review/progress');
  this.route("dashboard");
  this.route("radiator");
  this.route("home");

});

export default Router;
