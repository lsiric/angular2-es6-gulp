System.register(["angular2/angular2"], function($__export) {
  "use strict";
  var Component,
      View,
      Content;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Content = function() {
        function Content() {}
        return ($traceurRuntime.createClass)(Content, {}, {});
      }();
      $__export("Content", Content);
      Object.defineProperty(Content, "annotations", {get: function() {
          return [new Component({selector: 'content'}), new View({templateUrl: 'content/content.html'})];
        }});
    }
  };
});
