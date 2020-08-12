
    if(document.cookie == "hidden")
    {
        document.getElementById("global").style.visibility = "hidden";
    }else
    {
        document.getElementById("global").style.visibility = "visible";
    }


    
    setTimeout(function() {  
        document.getElementById("backgroundvideo").src = "resource/loopvid.mp4";
    }, 15000);


    
let url = "https://devildaggers.info/Api/GetLeaderboard"

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
        if(converted.Entries[i].Id == "1677")
        {
            var node = document.createElement("SPAN");
            var nodeDEL = document.createElement("DEL");
            var textnode = document.createTextNode(converted.Entries[i].Rank + ". " + "Erik Cornerhead" + " " + setkomma(converted.Entries[i].Time));
            nodeDEL.appendChild(textnode);
            node.appendChild(nodeDEL);
            table.appendChild(node);
        }else
        {
            var node = document.createElement("SPAN");
            var textnode = document.createTextNode(converted.Entries[i].Rank + ". " + converted.Entries[i].Username + " " + setkomma(converted.Entries[i].Time));
            node.appendChild(textnode);
            table.appendChild(node);
        }

    }

    var node = document.createElement("LI");
    var textnode = document.createTextNode("Total Players: " + converted.Players + "   ");
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Time: " + secondsToCenturies(converted.TimeGlobal) +" Centuries");
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Kills: " + converted.KillsGlobal);
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Gems: " + converted.GemsGlobal);
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Deaths: " + converted.DeathsGlobal);
    node.appendChild(textnode);
    global.appendChild(node);

    var node = document.createElement("LI");
    var textnode = document.createTextNode( "Global Accuracy: " +      ((converted.ShotsHitGlobal  / (converted.ShotsFiredGlobal / 100)).toFixed(2) + "%") );
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
                field.text("Kills: " + converted.Entries[firstDigits(digit.eq(2).text())-1].Kills.toString() +
                "  Gems: "+converted.Entries[firstDigits(digit.eq(2).text())-1].Gems.toString()  +"  Accuracy: " + 
                ((converted.Entries[firstDigits(digit.eq(2).text())-1].ShotsHit  
                /
                (converted.Entries[firstDigits(digit.eq(2).text())-1].ShotsFired
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


