$(document).ready(function() {
  $("button#cats").click(function() {
    $("ul#user").prepend("<li>Kitten</li>");
    $("ul#webpage").prepend("<li>Meow!</li>");

  });

  $("button#dogs").click(function() {
    $("ul#user").prepend("<li>Pooch</li>");
    $("ul#webpage").prepend("<li>Woof!</li>");
  });


});
