/* eslint func-names: 0 array-callback-return: 0 */
import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  docsRoute(this, function () {
    this.route('components', function () {
      this.route('nf-icon');
    });
  });
});

export default Router;
