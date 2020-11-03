/*!
 * Bootstrap-select v1.13.17 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'არაფერია არჩეული',
    noneResultsText: '{0}-ზე არაფერი იძებნება',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? 'არჩეულია {0} ერთეული' : 'არჩეულია {0} ერთეული';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'ლიმიტი მიღწეულია (დასაშვებია {n} ერთეულის არჩევა)' : 'ლიმიტი მიღწეულია (დასაშვებია {n} ერთეულის არჩევა)',
        (numGroup == 1) ? 'ჯგუფის ლიმიტი მიღწეულია (დასაშვებია {n} ერთეულის არჩევა)' : 'ჯგუფის ლიმიტი მიღწეულია (დასაშვებია {n} ერთეულის არჩევა)'
      ];
    },
    selectAllText: 'ყველას მონიშვნა',
    deselectAllText: 'ყველას წაშლა',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-en_US.js.map