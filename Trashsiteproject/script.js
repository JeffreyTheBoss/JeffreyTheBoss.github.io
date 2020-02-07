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

//mobile nav button to cross
document.getElementById("section1NavBarLinksContainer").style.width = "0%";

$(document).ready(function() {
  $("#nav-icon3").click(function() {
    if (
      document.getElementById("section1NavBarLinksContainer").style.width ==
      "0%"
    ) {
      document.getElementById("section1NavBarLinksContainer").style.paddingTop =
        "55px";
      document.getElementById("section1NavBarLinksContainer").style.width =
        "100%";
      document.getElementsByClassName("mobilespan")[0].style.backgroundColor =
        "#bc5757";
      document.getElementsByClassName("mobilespan")[1].style.backgroundColor =
        "#bc5757";
      document.getElementsByClassName("mobilespan")[2].style.backgroundColor =
        "#bc5757";
      document.getElementsByClassName("mobilespan")[3].style.backgroundColor =
        "#bc5757";
    } else {
      document.getElementById("section1NavBarLinksContainer").style.paddingTop =
        "0px";
      document.getElementById("section1NavBarLinksContainer").style.width =
        "0%";
      document.getElementsByClassName("mobilespan")[0].style.backgroundColor =
        "#1d1d1d";
      document.getElementsByClassName("mobilespan")[1].style.backgroundColor =
        "#1d1d1d";
      document.getElementsByClassName("mobilespan")[2].style.backgroundColor =
        "#1d1d1d";
      document.getElementsByClassName("mobilespan")[3].style.backgroundColor =
        "#1d1d1d";
    }

    $(this).toggleClass("open");
  });
});

//section 3 kalendar on hover on the check out button the right clip path arrow changes color and moves

$(document).ready(function() {
  document.getElementById(
    "section3KalendarCheckOutLink"
  ).onmouseover = function() {
    document.getElementById(
      "section3KalendarArrowForButton"
    ).style.backgroundColor = "#a14242";

    document.getElementById("section3KalendarArrowForButton").style.marginLeft =
      "20px";
  };

  document.getElementById(
    "section3KalendarCheckOutLink"
  ).onmouseout = function() {
    document.getElementById(
      "section3KalendarArrowForButton"
    ).style.backgroundColor = "#bc5757";

    document.getElementById("section3KalendarArrowForButton").style.marginLeft =
      "0px";
  };

  //change the color of the shopping wheel svg to $mainColor on hover
  document.getElementById(
    "section1NavBarShoppingCartIcon"
  ).onmouseover = function() {
    document.getElementById("section1NavBarShoppingCartIcon").src =
      "svg/carthover.svg";
  };

  document.getElementById(
    "section1NavBarShoppingCartIcon"
  ).onmouseout = function() {
    document.getElementById("section1NavBarShoppingCartIcon").src =
      "svg/cart.svg";
  };

  //make the binman dunk the paper in the trash can poor animation for poor people lazy alot "animation" eeyyy lamo
  document.getElementById("section1NavBarBinManIcon").onmouseover = function() {
    document.getElementById("section1NavBarBinManIcon").src =
      "svg/trashhover.svg";
  };

  document.getElementById("section1NavBarBinManIcon").onmouseout = function() {
    document.getElementById("section1NavBarBinManIcon").src = "svg/trash.svg";
  };

  // footer svg hover
  document.getElementById("section6FooterSVGTwitter").onmouseover = function() {
    document.getElementById("section6FooterSVGTwitter").src =
      "svg/twitterhover.svg";
  };

  document.getElementById("section6FooterSVGTwitter").onmouseout = function() {
    document.getElementById("section6FooterSVGTwitter").src = "svg/twitter.svg";
  };

  document.getElementById(
    "section6FooterSVGFacebook"
  ).onmouseover = function() {
    document.getElementById("section6FooterSVGFacebook").src =
      "svg/facebookhover.svg";
  };

  document.getElementById("section6FooterSVGFacebook").onmouseout = function() {
    document.getElementById("section6FooterSVGFacebook").src =
      "svg/facebook.svg";
  };

  document.getElementById(
    "section6FooterSVGInstagram"
  ).onmouseover = function() {
    document.getElementById("section6FooterSVGInstagram").src =
      "svg/instagramhover.svg";
  };

  document.getElementById(
    "section6FooterSVGInstagram"
  ).onmouseout = function() {
    document.getElementById("section6FooterSVGInstagram").src =
      "svg/instagram.svg";
  };
});

//sleep function works only in async
function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// scramble function onload for aethstetics on the mainleftside text area in section 1

async function scrambleTextAnimation(
  repeat,
  className,
  classInstances,
  timeBetween
) {
  //gather initial text
  let initialText = [];
  for (let b = 0; b < classInstances; b++) {
    initialText[b] = document.getElementsByClassName(className)[b].innerHTML;
  }
  for (let i = 0; i < repeat; i++) {
    for (let a = 0; a < classInstances; a++) {
      let text = document.getElementsByClassName(className)[a].innerHTML;
      text = shuffle(text);
      document.getElementsByClassName(className)[a].innerHTML = text;
    }
    timeBetween += 8;
    await Sleep(timeBetween);
  }
  for (let b = 0; b < classInstances; b++) {
    document.getElementsByClassName(className)[b].innerHTML = initialText[b];
  }
}
$(document).ready(function() {
  scrambleTextAnimation(38, "scrambleAnimation", 4, 0);
});

//cookies for increasing customer count for every individual user

if (parseInt(getCookie("value")) >= 6) {
  let bottomTextCounter = parseInt(getCookie("value"));
  bottomTextCounter++;
  document.getElementById(
    "section1BottomTextCounter"
  ).innerHTML = bottomTextCounter;
  document.cookie =
    "value=" +
    bottomTextCounter +
    ";" +
    "expires=Thu, 18 Dec 2023 12:00:00 UTC";
} else {
  //setting the cookie once when its not set yet
  document.cookie = "value=6; expires=Thu, 18 Dec 2023 12:00:00 UTC";
  document.getElementById("section1BottomTextCounter").innerHTML = 6;
}

// function to get the integer value of a cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//nav transition on scroll into new section
const section_1 = document.getElementById("section1Main");
const section_2 = document.getElementById("section2Service");
const section_3 = document.getElementById("section3Kalendar");
const section_4 = document.getElementById("section4Shop");
const section_5 = document.getElementById("section5Contact");

const sections = [section_1, section_2, section_3, section_4, section_5];

const bubble = document.querySelector(".Dbubble");

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if (
      entry.isIntersecting &&
      window.outerWidth >= 1234 &&
      window.outerHeight >= 760
    ) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});

document.getElementsByTagName("BODY")[0].onresize = function() {
  bubble.style.setProperty("left", `0px`);
  bubble.style.setProperty("top", `0px`);
  bubble.style.setProperty("width", `0px`);
  bubble.style.setProperty("height", `0px`);
};
