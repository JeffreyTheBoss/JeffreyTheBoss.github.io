
    if(document.cookie == "hidden")
    {
        document.getElementById("global").style.visibility = "hidden";
    }else
    {
        document.getElementById("global").style.visibility = "visible";
    }

    document.getElementById("soundimg").onclick = function() {

        if(document.getElementById("backgroundaudio").muted == false)
        {
            document.getElementById("soundimg").src = "resource/soundoff.png";
            document.getElementById("backgroundaudio").muted = true;
        }else
        {
            document.getElementById("soundimg").src = "resource/soundon.png";
            document.getElementById("backgroundaudio").muted = false;
        }
    };

    setTimeout(function() {  
        document.getElementById("backgroundvideo").src = "resource/loopvid.mp4";
    }, 15000);


document.getElementById("begone").onclick = function() {
    document.getElementById("cookieannoyance").style.visibility = "hidden";
    document.getElementById("backgroundaudio").play();
};

    //xhr
let url = "https://devildaggers.info/api/leaderboards/";

let xhr = new XMLHttpRequest();
xhr.open('get', url);
xhr.send();

xhr.onload = function() {
   // $("#favicon").attr("href","/resource/devilred.png");
    let leaderboard = xhr.response;
    let converted = JSON.parse(leaderboard);
    let table = document.getElementById("rotator");
    let global = document.getElementById("global");

    var node = document.createElement("SPAN");
    var textnode = document.createTextNode("TOP 100 Scores");
    node.appendChild(textnode);
    table.appendChild(node);

   
    for(let i = 0; i < 100; i++)
    {
        if(converted.entries[i].id == "1677")
        {
            var node = document.createElement("SPAN");
            node.setAttribute('title', "User ID: "+converted.entries[i].id);
            var nodeDEL = document.createElement("DEL");
            var nodeA = document.createElement("A");
            nodeA.setAttribute('href',"daggerlobby.html" );
            var textnode = document.createTextNode(converted.entries[i].rank + ". " + "Erik Cornerhead" + " " + truncateString(converted.entries[i].time, 9));
            nodeA.appendChild(textnode);
            nodeDEL.appendChild(nodeA);
            node.appendChild(nodeDEL);
            table.appendChild(node);
        }else
        {
            var node = document.createElement("SPAN");
            node.setAttribute('title', "User ID: "+converted.entries[i].id);
            var textnode = document.createTextNode(converted.entries[i].rank + ". " + converted.entries[i].username + " " + truncateString(converted.entries[i].time, 9)  );
            node.appendChild(textnode);
            table.appendChild(node);
        }
//truncateString(converted.entries[i].time, 9)
    }

    var node = document.createElement("LI");
    var textnode = document.createTextNode("Total Players: " + converted.players + "   ");
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Time: " + secondsToCenturies(converted.timeGlobal) +" Centuries");
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Kills: " + converted.killsGlobal);
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Gems: " + converted.gemsGlobal);
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Deaths: " + converted.deathsGlobal);
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Accuracy: " +      ((converted.daggersHitGlobal  / (converted.daggersFiredGlobal / 100)).toFixed(2) + "%") );
    node.appendChild(textnode);
    global.appendChild(node);

    var audio = $("#audio")[0];

    $("span").mouseenter(function() {
      audio.play();
    });
    
    $("span").mouseleave(function() {
        audio.pause();
        audio.currentTime = 0;
      });



      $('#flyin').mouseenter(function() {
        document.getElementById("flyin").style.right = "0px";
    });

    $('#flyin').mouseleave(function() {
        document.getElementById("flyin").style.right = "-120px";
    });

    $('#hangercontent').click(function() {
        $("#backgroundaudio")[0].src = "sounds/appropriatemusic.mp3";
        $("#backgroundaudio")[0].play();
        document.getElementById("soundimg").src = "resource/soundon.png";
        document.getElementById("backgroundaudio").muted = false;
        document.getElementById("symbolgif").src ="resource/comoestas.gif";
        document.getElementById("backgroundvideo").style.transform = "rotate(180deg)";
    });

$(function() {

    var gate = $(window), cog = $('#rotator'), digit = cog.find('span'), /*field = $('#result'),*/ slot = digit.height(), base = 1.5*slot, up, swipe;

    var resultline1 = $('#resultline1') , resultline2 = $('#resultline2') , resultline3 = $('#resultline3') 
    
    if (document.readyState == 'complete') interAction();
    else gate.one('load', interAction);
    
    function interAction() {
    
       // field.text();
       resultline1.text(converted.entries[firstDigits(digit.eq(2).text())-1].kills.toString());
       resultline2.text(converted.entries[firstDigits(digit.eq(2).text())-1].gems.toString());
       resultline3.text(((converted.entries[firstDigits(digit.eq(2).text())-1].daggersHit  
       /
       (converted.entries[firstDigits(digit.eq(2).text())-1].daggersFired
       /
       100
       )).toFixed(2) + "%"));
    
        cog.scrollTop(base).fadeTo(0,1).mousewheel(function(turn, delta) {
    
            if (isBusy()) return false;
    
            up = delta > 0;
            nextNumber();
    
            return false;
        });
    
        digit.on('touchstart', function(e) {
    
            var begin = e.originalEvent.touches[0].pageY;
    
            digit.on('touchmove', function(e) {
    
                var yaw = e.originalEvent.touches[0].pageY-begin;
                up = yaw < 0;
                swipe = Math.abs(yaw) > 30;
            });
    
            gate.one('touchend', function() {
    
                digit.off('touchmove');
    
                if (swipe && !isBusy()) nextNumber();
            });
        })
        .on('mousedown touchstart', function(e) {
    
            if (e.which && e.which != 1) return;
    
            var zest = this, item = $(this).index();
    
            $(this).one('mouseup touchend', function(e) {
    
                digit.off('mouseup');
    
                var quit = e.originalEvent.changedTouches;
    
                if (quit) var jab = document.elementFromPoint(quit[0].clientX, quit[0].clientY);
                if (swipe || item == 2 || quit && jab != zest || isBusy()) return;
    
                up = item == 1;
                nextNumber();
            });
    
            return false;
        })
        .mouseleave(function() {
    
            digit.off('mouseup');
        });
    }
    
    function isBusy() {
    
        return cog.is(':animated');
    }
    
    function nextNumber() {
    
        var aim = base;
        swipe = false;
    
        !up ? aim += slot : aim -= slot;
    
        cog.animate({scrollTop: aim}, 50, function() {
    
            !up ? digit.eq(0).appendTo(cog) : digit.eq(100).prependTo(cog);
    
            digit = cog.find('span');
    
            //
            cog.scrollTop(base);
            if(firstDigits(digit.eq(2).text()) != 0){

                resultline1.text(converted.entries[firstDigits(digit.eq(2).text())-1].kills.toString());
                resultline2.text(converted.entries[firstDigits(digit.eq(2).text())-1].gems.toString());
                resultline3.text(((converted.entries[firstDigits(digit.eq(2).text())-1].daggersHit  
                /
                (converted.entries[firstDigits(digit.eq(2).text())-1].daggersFired
                /
                100
                )).toFixed(2) + "%"));
                /*
                field.text("Kills: " + converted.entries[firstDigits(digit.eq(2).text())-1].kills.toString() +
                "  Gems: "+converted.entries[firstDigits(digit.eq(2).text())-1].gems.toString()  +"  Accuracy: " + 
                ((converted.entries[firstDigits(digit.eq(2).text())-1].shotsHit  
                /
                (converted.entries[firstDigits(digit.eq(2).text())-1].shotsFired
                /
                100
                )).toFixed(2) + "%")
                ); 
                */
            }else
            {
                //field.text("");
                resultline1.text("");
                resultline2.text("");
                resultline3.text("");
            }
        });
    }
    });


};


String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

//!depreciated since noahs API changed 
function setkomma(numba)
{
    if(numba.toString().length == 8)
    {
        return numba.toString().splice(4,0,".");
    }
    if(numba.toString().length== 7)
    {
        return numba.toString().splice(3,0,".");
    }
}

//!new function that replaces setkomma
function truncateString(inputString, maxLength) 
{
    if (inputString.toString().length > maxLength) {
      return inputString.toString().substring(0, maxLength); // or inputString.slice(0, maxLength);
    }
    return inputString.toString();
}

function firstDigits(numba)
{
    if(numba.toString()[1]== ".")
    {
        return numba.toString()[0];
    }
    if(numba.toString()[2]== ".")
    {
        return numba.toString()[0] + numba.toString()[1];
    }

    if(numba.toString()[3]== ".")
    {
        return numba.toString()[0] + numba.toString()[1] + numba.toString()[2];
    }

    return 0;

}

function secondsToCenturies(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var display = (Math.floor(seconds / (3600*24))/365/100).toFixed(0);
    return display;
    }

    function changeGlobal()
    {
        let global = document.getElementById("global");

        if(global.style.visibility == "visible")
        {
            global.style.visibility = "hidden";
            document.cookie = "hidden";
        }else
        {
            global.style.visibility = "visible";
            document.cookie = "visible";
        }
    }


