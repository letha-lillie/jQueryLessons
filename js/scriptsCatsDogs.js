$(document).ready(function() {
  $("button#cats").click(function() {
    $("ul#user").prepend("<li>Kitten</li>");
    $("ul#webpage").prepend("<li>Meow!</li>");

  });

  $("button#dogs").click(function() {
    $("ul#user").prepend("<li>Pooch</li>");
    $("ul#webpage").prepend("<li>Woof!</li>");
  });
  $("ul#user").children("li").first().click(function() {
    alert("Hi!");
    $("button#stop").click(function() {
      $("ul#user").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");


    });
  });
});
