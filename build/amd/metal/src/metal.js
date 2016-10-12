define(['exports', './core', './array/array', './async/async', './disposable/Disposable', './object/object', './string/string'], function (exports, _core, _array, _async, _Disposable, _object, _string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.string = exports.object = exports.Disposable = exports.async = exports.array = undefined;
  Object.keys(_core).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _core[key];
      }
    });
  });

  var _core2 = _interopRequireDefault(_core);

  var _array2 = _interopRequireDefault(_array);

  var _async2 = _interopRequireDefault(_async);

  var _Disposable2 = _interopRequireDefault(_Disposable);

  var _object2 = _interopRequireDefault(_object);

  var _string2 = _interopRequireDefault(_string);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.array = _array2.default;
  exports.async = _async2.default;
  exports.Disposable = _Disposable2.default;
  exports.object = _object2.default;
  exports.string = _string2.default;
  exports.default = _core2.default;
});
//# sourceMappingURL=metal.js.map