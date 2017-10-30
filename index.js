/* eslint-env node */
'use strict';

var path = require('path'),
mergeTrees = require('broccoli-merge-trees'),
Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-time-enabled-pikaday',

  isDevelopingAddon : function(){
    return true;
  },
  hintingEnabled: function() {
    return false;
  },

  treeForVendor(tree){

    let pikadayTimeTree = new Funnel(path.join(this.project.nodeModulesPath, 'pikaday-time'), {
      files: ['css/pikaday.css', 'pikaday.js'],
      destDir: 'pikaday-time'
    });

    return mergeTrees([pikadayTimeTree], { overwrite: true });
  },

  included(app) {
    this.bowerDirectory = app.bowerDirectory;
    this._super.included.apply(this, arguments);

    //pikaday-time
    app.import('vendor/pikaday-time/pikaday.js');
    app.import('vendor/pikaday-time/css/pikaday.css');

  },
  config(environment){
    let ENV = {};
    return ENV;
  }
};
