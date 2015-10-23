/**
 * Created by braunreu on 22.10.15.
 */
'use strict';
module.exports = function babel(sails) {
  return {
    configure: function() {
      require('babel/register');
      sails.log.info('loaded babel for es6 compilation.');
    }
  }
};
