System.register(["angular2/angular2"], function($__export) {
  "use strict";
  var Component,
      View,
      Footer;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Footer = function() {
        function Footer() {}
        return ($traceurRuntime.createClass)(Footer, {}, {});
      }();
      $__export("Footer", Footer);
      Object.defineProperty(Footer, "annotations", {get: function() {
          return [new Component({selector: 'footer'}), new View({templateUrl: 'footer/footer.html'})];
        }});
    }
  };
});
