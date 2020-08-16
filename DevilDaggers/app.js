
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
let url = "https://devildaggers.info/api/leaderboards/"

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
            var nodeDEL = document.createElement("DEL");
            var textnode = document.createTextNode(converted.entries[i].rank + ". " + "Erik Cornerhead" + " " + setkomma(converted.entries[i].time));
            nodeDEL.appendChild(textnode);
            node.appendChild(nodeDEL);
            table.appendChild(node);
        }else
        {
            var node = document.createElement("SPAN");
            var textnode = document.createTextNode(converted.entries[i].rank + ". " + converted.entries[i].username + " " + setkomma(converted.entries[i].time));
            node.appendChild(textnode);
            table.appendChild(node);
        }

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
    var textnode = document.createTextNode( "Global Accuracy: " +      ((converted.shotsHitGlobal  / (converted.shotsFiredGlobal / 100)).toFixed(2) + "%") );
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


$(function() {

    var gate = $(window), cog = $('#rotator'), digit = cog.find('span'), field = $('#result'), slot = digit.height(), base = 1.5*slot, up, swipe;
    
    if (document.readyState == 'complete') interAction();
    else gate.one('load', interAction);
    
    function interAction() {
    
        field.text();
    
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
                field.text("Kills: " + converted.entries[firstDigits(digit.eq(2).text())-1].kills.toString() +
                "  Gems: "+converted.entries[firstDigits(digit.eq(2).text())-1].gems.toString()  +"  Accuracy: " + 
                ((converted.entries[firstDigits(digit.eq(2).text())-1].shotsHit  
                /
                (converted.entries[firstDigits(digit.eq(2).text())-1].shotsFired
                /
                100
                )).toFixed(2) + "%")
                ); 
                
            }else
            {
                field.text("");
            }
        });
    }
    });


};


String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

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


