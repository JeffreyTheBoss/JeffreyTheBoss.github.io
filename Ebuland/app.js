

let lines;

window.setInterval(function(){

    let random = Math.floor(Math.random() * 11); 

    if(!document.getElementsByClassName("hoverelement")[random].matches(':hover'))
    {
        document.getElementsByClassName("hoverelement")[random].classList.remove("star-idle");
        void document.getElementsByClassName("hoverelement")[random].offsetWidth;

        document.getElementsByClassName("hoverelement")[random].classList.add("star-idle");
    }
  }, 3000);



  for(let i = 0; i < 11; i++)
  {
   window.document.getElementsByClassName("hoverelement")[i].onmouseout = function() {
        inside.style.opacity = "0";
        document.getElementById('lightBox').style.visibility = "hidden";
        
      };
  }

  document.getElementsByClassName("hoverelement")[0].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "wife 1, 34";
    document.getElementById('insideP').innerHTML = "kitchen wife";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };

  document.getElementsByClassName("hoverelement")[1].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "wife 2, 27";
    document.getElementById('insideP').innerHTML = "bedroom wife";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[2].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "al hamir, 22";
    document.getElementById('insideP').innerHTML = "leader of the catolic church in west virginia";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[3].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "al falfat, 21";
    document.getElementById('insideP').innerHTML = "my sons brother";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[4].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "uganda";
    document.getElementById('insideP').innerHTML = "";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[5].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "Ebuland Manfred, 65";
    document.getElementById('insideP').innerHTML = "the leader of this family and number 1 used leg protesis hobbiist";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[6].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "wife 3, 30";
    document.getElementById('insideP').innerHTML = "show wife";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[7].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "wife 4, 29";
    document.getElementById('insideP').innerHTML = "cleaning wife";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[8].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "malmalfat, 25";
    document.getElementById('insideP').innerHTML = "harvard graduate in medicine";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[9].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "Okgsmir songdonggongs, 56";
    document.getElementById('insideP').innerHTML = "leader of the turkish empire";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };
  document.getElementsByClassName("hoverelement")[10].onmouseover = function() {
    document.getElementById("insideh3").innerHTML = "chairman";
    document.getElementById('insideP').innerHTML = "of this here church";
    document.getElementById("inside").style.opacity = "1";
    document.getElementById('lightBox').style.visibility = "visible";
    
  };

  function sendMail(form) {

   // let message = document.getElementById("text").value;
    let mail = document.getElementById("email").value;
      readTextFile("l4d2spam.txt", mail);

    return false;
  }

// simple xmlh request to read the contents of a file (txt) in and then send a random line of it to the email provided
   function readTextFile(file, mail)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                lines = rawFile.responseText.split("\n");

                let random = Math.floor(Math.random() * 349); 

                sendEmail(lines[random], mail);
 
            }
        }
    }
    rawFile.send(null);
}

function sendEmail(body,mail) {

    var tempParams =
    {
      from_name: "ebuland",
      to_name: mail,
      message: body,
    };

    emailjs.send("service_14ktj98", "template_hjxxych", tempParams)
    .then(function(res){
      console.log("success", res.status);
      alert("you got mail")
    })
} 

/*   function sendMail(form) {

   // let message = document.getElementById("text").value;
    let mail = document.getElementById("email").value;
      readTextFile("l4d2spam.txt", mail);

    
    return false;
  }

// simple xmlh request to read the contents of a file (txt) in and then send a random line of it to the email provided
   function readTextFile(file, mail)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                lines = rawFile.responseText.split("\n");

                let random = Math.floor(Math.random() * 349); 

                sendEmail(lines[random], mail);
 
            }
        }
    }
    rawFile.send(null);
}

function sendEmail(body,mail) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : lines[350],
	Password : lines[351],
	To : mail,
	From : "ebuland.manfred@gmail.com",
	Subject : "The Secret Sercel",
  Body : body,
  Attachments : [
  	{
  		name : "yourson.jpg",
  		path:"https://img.pr0gramm.com/2020/05/15/e71e7fdd29c950b7.jpg"
    }]
    
	}).then(
		message => alert("you got mail, we fast")
	);
} */
