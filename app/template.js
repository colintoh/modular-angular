angular.module('templates-main', ['about/about.tpl.html', 'home/home.tpl.html', 'home/red.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About page</h1>\n" +
    "\n" +
    "{{body}}\n" +
    "\n" +
    "<a ui-sref=\"home\">Home</a>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Home</h1>\n" +
    "\n" +
    "{{body}}\n" +
    "\n" +
    "<a ui-sref=\"about\">About Us</a>\n" +
    "<a ui-sref=\"home.red\">Red</a>\n" +
    "\n" +
    "<div ui-view></div>");
}]);

angular.module("home/red.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/red.tpl.html",
    "This red is nice");
}]);
