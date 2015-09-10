System.register(["angular2/angular2"], function($__export) {
  "use strict";
  var Component,
      View,
      Header;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Header = function() {
        function Header() {}
        return ($traceurRuntime.createClass)(Header, {}, {});
      }();
      $__export("Header", Header);
      Object.defineProperty(Header, "annotations", {get: function() {
          return [new Component({selector: 'header'}), new View({templateUrl: 'header/header.html'})];
        }});
    }
  };
});
