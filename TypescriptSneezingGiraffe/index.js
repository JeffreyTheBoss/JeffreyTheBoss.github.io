// section 1 text
Array.from(document.getElementsByClassName('firstText'))[0].style.left = "100px";
Array.from(document.getElementsByClassName('secondText'))[0].style.left = "100px";
Array.from(document.getElementsByClassName('thirdText'))[0].style.left = "100px";
Array.from(document.getElementsByClassName('firstText'))[0].style.opacity = "1";
Array.from(document.getElementsByClassName('secondText'))[0].style.opacity = "1";
Array.from(document.getElementsByClassName('thirdText'))[0].style.opacity = "1";
Array.from(document.getElementsByClassName('mainIMG'))[0].style.opacity = "1";
Array.from(document.getElementsByClassName('evidenceButton'))[0].style.left = "250px";
Array.from(document.getElementsByClassName('clippathboy'))[0].style.clipPath = "circle(22.7% at 100% 11%)";
//burger click 
Array.from(document.getElementsByClassName('burger'))[0].addEventListener("click", () => {
    if (Array.from(document.getElementsByClassName('burger'))[0].classList.contains("open")) {
        Array.from(document.getElementsByClassName('burger'))[0].classList.remove("open");
        Array.from(document.getElementsByClassName('nav'))[0].classList.remove("nav--open");
        Array.from(document.getElementsByClassName('nav__menu'))[0].classList.add("hidden");
        Array.from(document.getElementsByClassName('contactBox'))[0].classList.add("hidden");
        // Array.from(document.getElementsByClassName('nav__menu') as HTMLCollectionOf<HTMLElement>)[0].style.left = "1000px";
    }
    else {
        Array.from(document.getElementsByClassName('burger'))[0].classList.add("open");
        Array.from(document.getElementsByClassName('nav'))[0].classList.add("nav--open");
        Array.from(document.getElementsByClassName('nav__menu'))[0].classList.remove("hidden");
        //  Array.from(document.getElementsByClassName('nav__menu') as HTMLCollectionOf<HTMLElement>)[0].style.left = "0px";
    }
});
Array.from(document.getElementsByClassName('contact'))[0].addEventListener("click", () => {
    if (Array.from(document.getElementsByClassName('contactBox'))[0].classList.contains("hidden")) {
        //open contact
        Array.from(document.getElementsByClassName('contactBox'))[0].classList.remove("hidden");
    }
    else {
        //close
        Array.from(document.getElementsByClassName('contactBox'))[0].classList.add("hidden");
    }
});
Array.from(document.getElementsByClassName('nav__item_Contact'))[0].addEventListener("click", () => {
    if (Array.from(document.getElementsByClassName('contactBox'))[0].classList.contains("hidden")) {
        Array.from(document.getElementsByClassName('contactBox'))[0].classList.remove("hidden");
    }
    else {
        Array.from(document.getElementsByClassName('contactBox'))[0].classList.add("hidden");
    }
});
//! section 2 file slider system
/*   Array.from(document.getElementsByClassName('fileslidethumbnail') as HTMLCollectionOf<HTMLElement>)[i].removeEventListener("click", check);

  function removeHandler()
  {
    Array.from(document.getElementsByClassName('fileslidethumbnail') as HTMLCollectionOf<HTMLElement>)[0].removeEventListener("click", check);
  } */
let preventDoubleClick = true;
let oneman = true;
for (let i = 0; i < 5; i++) {
    Array.from(document.getElementsByClassName('fileslidethumbnail'))[i].addEventListener("click", () => {
        if (preventDoubleClick) {
            if (Array.from(document.getElementsByClassName('fileslidecontent'))[i].getAttribute('data-collapsed') === 'false') {
                //!close the stuff
                Array.from(document.getElementsByClassName('fileslidecontent'))[i].classList.remove("mb-10");
                Array.from(document.getElementsByClassName('fileslidethumbnail'))[i].classList.remove("border-2");
            }
            else {
                //!open the stuff
                Array.from(document.getElementsByClassName('fileslidecontent'))[i].classList.add("mb-10");
                Array.from(document.getElementsByClassName('fileslidethumbnail'))[i].classList.add("border-2");
                if (i == 4 && oneman) {
                    oneman = false;
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend1.jpg"; }, 5000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend2.jpg"; }, 10000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend3.jpg"; }, 15000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend4.jpg"; }, 20000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('yih'))[0].innerHTML = "تعتقد أنه يمكنك الابتعاد عن هذا الأمر ، كما تعتقد أنه يمكنك قرع جرس باب بنج بونج مان ملك الشيطان من كينج كونج في أستراليا ، وتعتقد أنه يمكنك التخلي عنك تعتقد أن المزاح ليس حقيقيًا  لن يتم معاقبتك على سلوك من هذا النوع  وأنا الذي سأظهر لك أن طرقك مضحكة للغاية. الآن في الحالة الفعلية لتقول لك حسنًا.  النهاية هي قريبة من عقابك قبل أن تكون من النوع المتعلم الذي لا مفر "; }, 20000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend5.jpg"; }, 25000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend6.jpg"; }, 30000);
                    setTimeout(function () { Array.from(document.getElementsByClassName('themoose'))[0].src = "img/theend7.jpg"; }, 35000);
                }
            }
        }
    });
}
//! to avoid the transition height: auto dumbness
function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function () {
            element.style.height = 0 + 'px';
        });
    });
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
}
function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function (e) {
        // remove this event listener so it only gets triggered once
        element.removeEventListener('transitionend', arguments.callee);
        // remove "height" from the element's inline styles, so it can return to its initial value
        element.style.height = null;
    });
    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
}
for (let i = 0; i < 5; i++) {
    Array.from(document.getElementsByClassName('fileslidethumbnail'))[i].addEventListener('click', function (e) {
        if (preventDoubleClick) {
            var section = Array.from(document.getElementsByClassName('fileslidecontent'))[i];
            var isCollapsed = section.getAttribute('data-collapsed') === 'true';
            if (isCollapsed) {
                expandSection(section);
                section.setAttribute('data-collapsed', 'false');
            }
            else {
                collapseSection(section);
            }
            preventDoubleClick = false;
            setTimeout(function () { preventDoubleClick = true; }, 500);
        }
    });
}
//!sending mail in contact with emailjs
function sendMail(form) {
    // let message = document.getElementById("text").value;
    let mail = document.getElementById("email").value;
    readTextFile("l4d2spam.txt", mail);
    return false;
}
// simple xmlh request to read the contents of a file (txt) in and then send a random line of it to the email provided
function readTextFile(file, mail) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var lines = rawFile.responseText.split("\n");
                let random = Math.floor(Math.random() * 349);
                sendEmail(lines[random], mail);
            }
        }
    };
    rawFile.send(null);
}
function sendEmail(body, mail) {
    var tempParams = {
        from_name: "ebuland",
        to_name: mail,
        message: body,
    };
    // @ts-ignore
    emailjs.send("service_14ktj98", "template_hjxxych", tempParams)
        .then(function (res) {
        console.log("success", res.status);
        alert("you got mail");
    });
}
window.onload = function () {
    for (let i = 0; i < 100; i++) {
        let circle_container = document.createElement("div");
        circle_container.classList.add("circle-container");
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle_container.appendChild(circle);
        let testorino = document.getElementById("testorino");
        testorino.appendChild(circle_container);
    }
};
