"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInteractor = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInteractor =
/*#__PURE__*/
function () {
  function UserInteractor() {
    _classCallCheck(this, UserInteractor);
  }

  _createClass(UserInteractor, [{
    key: "createUser",
    value: function createUser(name, email, password) {
      var user = new User(name, email, password);
      return userRepository.create(user);
    }
  }, {
    key: "getUser",
    value: function getUser(id) {
      return userRepository.get(id);
    }
  }]);

  return UserInteractor;
}();

exports.UserInteractor = UserInteractor;