/* Smooth scrolling for all browser types */
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

/* Eventhandeler for hovering over the main title.*/
document.getElementById("MainSection1Title").onmouseover = function() {
  document.getElementsByClassName("underlinediv")[0].style.width = "250px";
};

document.getElementById("MainSection1Title").onmouseout = function() {
  document.getElementsByClassName("underlinediv")[0].style.width = "150px";
};

document.getElementById("MainSection1Title").onclick = function() {
  let oldText = document.getElementById("MainSection1Title").innerHTML;
  let newText = shuffle(oldText);
  document.getElementById("MainSection1Title").innerHTML = newText;
};

// function to scramble and shuffle strings
function scramble(a) {
  a = a.split("");
  for (var b = a.length - 1; 0 < b; b--) {
    var c = Math.floor(Math.random() * (b + 1));
    d = a[b];
    a[b] = a[c];
    a[c] = d;
  }
  return a.join("");
}

function shuffle(textArea) {
  var lines = textArea.split("\n");
  for (var i = 0; i < lines.length; i++) {
    lines[i] = scramble(lines[i])
      .split("")
      .join("");
  }
  textArea = lines.join("\n");
  return textArea;
}

// background of nav gets a color once scrolled down
$(function() {
  $(document).scroll(function() {
    var $nav = $("#section1MainNavArea");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//hover effect for the section2 text arrows (red)
for (let i = 0; i < 8; i++) {
  document.getElementsByClassName("section2LiItem")[
    i
  ].onmouseover = function() {
    document.getElementsByClassName("section2redarrowsvg")[i].style.transform =
      "rotate(360deg)";
  };
}

for (let i = 0; i < 8; i++) {
  document.getElementsByClassName("section2LiItem")[i].onmouseout = function() {
    document.getElementsByClassName("section2redarrowsvg")[i].style.transform =
      "rotate(-0deg)";
  };
}
// replaces the text inside the textarea on focus
document.getElementById("section5Textarea").onfocus = function() {
  document.getElementById("section5Textarea").innerHTML = "";
  document.getElementById("section5Textarea").style.color = "black";
};
