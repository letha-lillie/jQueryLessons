// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul").prepend("<li>Hello!</li>");
//   });
//
//   $("button#goodbye").click(function() {
//     $("ul").prepend("<li>Goodbye!</li>");
//   });
//
//   $("button#stop").click(function() {
//     $("ul").prepend("<li>Stop copying me!</li>");
//   });
// });
$(document).ready(function() {
      $("button#hello").click(function() {
        $("ul#user").prepend("<li>Hello!</li>");
        $("ul#webpage").prepend("<li>Why hello there!</li>");
        $("ul#user").children("li").first().click(function() {
        $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
        });
      });
      $("button#goodbye").click(function() {
        $("ul#user").prepend("<li>Goodbye!</li>");
        $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
      });
      $("ul#user").children("li").first().click(function() {
        alert("Hi!");
        $("button#stop").click(function() {
          $("ul#user").prepend("<li>Stop copying me!</li>");
          $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");

        });
      });
    });
