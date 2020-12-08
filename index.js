'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    //pikaday-time
    app.import('node_modules/pikaday-time/pikaday.js');
    app.import('node_modules/pikaday-time/css/pikaday.css');

  }

};
