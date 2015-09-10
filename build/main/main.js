System.register(["angular2/angular2", "header/header", "content/content", "footer/footer"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Header,
      Content,
      Footer,
      ExampleApp;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Header = $__m.Header;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      Footer = $__m.Footer;
    }],
    execute: function() {
      ExampleApp = function() {
        function ExampleApp() {}
        return ($traceurRuntime.createClass)(ExampleApp, {}, {});
      }();
      $__export("ExampleApp", ExampleApp);
      Object.defineProperty(ExampleApp, "annotations", {get: function() {
          return [new Component({selector: 'example-app'}), new View({
            templateUrl: 'main/main.html',
            directives: [Header, Content, Footer]
          })];
        }});
      ;
      bootstrap(ExampleApp);
    }
  };
});
