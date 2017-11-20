'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/html_vis/html_vis']
    }

  });
};

module.exports = exports['default'];
