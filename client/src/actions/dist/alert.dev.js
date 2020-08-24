"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAlert = void 0;

var _uuid = require("uuid");

var _types = require("./types");

var setAlert = function setAlert(msg, alertType) {
  return function (dispatch) {
    var id = (0, _uuid.v4)();
    dispatch({
      type: _types.SET_ALERT,
      payload: {
        msg: msg,
        alertType: alertType,
        id: id
      }
    });
  };
};

exports.setAlert = setAlert;