
$( document ).ready(function() {

  let url = "https://devildaggers.info/api/leaderboards/";
  let url2 = "https://devildaggers.info/api/leaderboards?rankStart=101";   
  let url3 = "https://devildaggers.info/api/leaderboards?rankStart=201";   
  let url4 = "https://devildaggers.info/api/leaderboards?rankStart=301";  
  let url5 = "https://devildaggers.info/api/leaderboards?rankStart=401";    
  let url6 = "https://devildaggers.info/api/leaderboards?rankStart=501";   
  let url7 = "https://devildaggers.info/api/leaderboards?rankStart=601";   
  let url8 = "https://devildaggers.info/api/leaderboards?rankStart=701";   
  let url9 = "https://devildaggers.info/api/leaderboards?rankStart=801";   
  let url10 = "https://devildaggers.info/api/leaderboards?rankStart=901";  

  var audio = $("#audio")[0];
  audio.volume = 0.2;
  var pageTitle = document.title;
  var gone = 0;

  var isPageActive;
  document.addEventListener('visibilitychange', function(e) {
    isPageActive = !document.hidden;

    if(isPageActive){
      document.title = pageTitle;
      gone = 0;
    }
  });

  let pi = callMeCarson("carsoncity");
  
  var doubleCheckCounter = new Array(10);
  var person = prompt("What is the corner of a circle?", "");
  let url11 = fin(person);
  
  if(theunit(person) && url11)
  {
     //yes i lazy
  setInterval(function(){ 
    getTop100(url).then(function(result) 
    {
       var result1_1 = result;
       getTop100(url2).then(function(result) 
       {
          var result2_1 = result;
          getTop100(url3).then(function(result) 
          {
             var result3_1 = result;
             getTop100(url4).then(function(result) 
             {
                var result4_1 = result;
                getTop100(url5).then(function(result) 
                {
                   var result5_1 = result;
                   getTop100(url6).then(function(result) 
                   {
                      var result6_1 = result;
                      getTop100(url7).then(function(result) 
                      {
                         var result7_1 = result;
                         getTop100(url8).then(function(result) 
                         {
                            var result8_1 = result;
                            getTop100(url9).then(function(result) 
                            {
                               var result9_1 = result;
                               getTop100(url10).then(function(result) 
                               {
                                  var result10_1 = result;
                                    //! END OF FIRST 10 XHR REQUESTS
                                    //! START OF SECOND 10 XHR REQUESTS
                                  
                                    
          setTimeout(function(){ 
            getTop100(url).then(function(result) 
            {
              var result1_2 = result;
              getTop100(url2).then(function(result) 
              {
                var result2_2 = result;
                getTop100(url3).then(function(result) 
                {
                  var result3_2 = result;
                  getTop100(url4).then(function(result) 
                  {
                    var result4_2 = result;
                    getTop100(url5).then(function(result) 
                    {
                      var result5_2 = result;
                      getTop100(url6).then(function(result) 
                      {
                        var result6_2 = result;
                        getTop100(url7).then(function(result) 
                        {
                          var result7_2 = result;
                          getTop100(url8).then(function(result) 
                          {
                            var result8_2 = result;
                            getTop100(url9).then(function(result) 
                            {
                              var result9_2 = result;
                              getTop100(url10).then(function(result) 
                              {
                                var result10_2 = result;

                                  //! GOT ALL XHR REQUESTS FIRST AND SECONDS NOW TIME FOR THE LOOPS AND CHECKING IF DEATH COUNTERS WENT UP

                                  //?first leaderboard request for rank 1-100 
                                   var result1_1PARSED = JSON.parse(result1_1);   
                                  //?after the 3 second wait leaderboard request for rank 1-100
                                    var result1_2PARSED = JSON.parse(result1_2); 

                                  //?first leaderboard request for rank 101-200
                                   var result2_1PARSED = JSON.parse(result2_1); 
                                  //?after the 3 second wait leaderboard request for rank 101-200
                                    var result2_2PARSED = JSON.parse(result2_2); 

                                  //?first leaderboard request for rank 201-300
                                   var result3_1PARSED = JSON.parse(result3_1); 
                                   //?after the 3 second wait leaderboard request for rank 201-300
                                  var result3_2PARSED = JSON.parse(result3_2); 

                                  //?first leaderboard request for rank 301-400
                                  var result4_1PARSED = JSON.parse(result4_1); 
                                  //?after the 3 second wait leaderboard request for rank 301-400
                                 var result4_2PARSED = JSON.parse(result4_2);                                   

                                   //?first leaderboard request for rank 401-500
                                   var result5_1PARSED = JSON.parse(result5_1); 
                                   //?after the 3 second wait leaderboard request for rank 401-500
                                  var result5_2PARSED = JSON.parse(result5_2);                                   
          
                                    //?first leaderboard request for rank 501-600
                                    var result6_1PARSED = JSON.parse(result6_1); 
                                    //?after the 3 second wait leaderboard request for rank 501-600
                                   var result6_2PARSED = JSON.parse(result6_2);  
                                   
                                    //?first leaderboard request for rank 601-700
                                    var result7_1PARSED = JSON.parse(result7_1); 
                                    //?after the 3 second wait leaderboard request for rank 601-700
                                   var result7_2PARSED = JSON.parse(result7_2);  
                                   
                                     //?first leaderboard request for rank 701-800
                                     var result8_1PARSED = JSON.parse(result8_1); 
                                     //?after the 3 second wait leaderboard request for rank 701-800
                                    var result8_2PARSED = JSON.parse(result8_2);                                     

                                     //?first leaderboard request for rank 801-900
                                     var result9_1PARSED = JSON.parse(result9_1); 
                                     //?after the 3 second wait leaderboard request for rank 801-900
                                    var result9_2PARSED = JSON.parse(result9_2); 

                                     //?first leaderboard request for rank 901-1000
                                     var result10_1PARSED = JSON.parse(result10_1); 
                                     //?after the 3 second wait leaderboard request for rank 01-1000
                                    var result10_2PARSED = JSON.parse(result10_2);                                

                                    var holder = document.getElementById("liveholder");
                                    var maindiv = document.getElementById("liveholder");
               //? top 100 mode
              for(let i = 0; i < 100; i++)
              {
                if(result1_1PARSED.entries[i].deathsTotal != result1_2PARSED.entries[i].deathsTotal && result1_1PARSED.entries[i].deathsTotal != doubleCheckCounter[0])
                {
                    doubleCheckCounter[0] = result1_1PARSED.entries[i].deathsTotal;
                    audio.play();
                    var imageKills = document.createElement("IMG");
                    imageKills.setAttribute("src", "resource/icondagger.png");
                    imageKills.setAttribute("width", "16");
                    imageKills.setAttribute("height", "16");
                    imageKills.setAttribute("alt", "dagger icon");
                
                    var imageGem = document.createElement("IMG");
                    imageGem.setAttribute("src", "resource/icongem.png");
                    imageGem.setAttribute("width", "16");
                    imageGem.setAttribute("height", "16");
                    imageGem.setAttribute("alt", "gem icon");
                
                    var imageAcc = document.createElement("IMG");
                    imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                    imageAcc.setAttribute("width", "16");
                    imageAcc.setAttribute("height", "16");
                    imageAcc.setAttribute("alt", "dagger Accuracy");

                    var newRun = result1_1PARSED.entries[i].username + " just got " +  setkomma(result1_2PARSED.entries[i].timeTotal - result1_1PARSED.entries[i].timeTotal) + " seconds.   ";
                    var node = document.createElement("SPAN");
                    node.setAttribute('title', "Rank "+result1_1PARSED.entries[i].rank + " Player");
                    var textnode = document.createTextNode(newRun);
                    var textnode2 = document.createTextNode(result1_2PARSED.entries[i].killsTotal - result1_1PARSED.entries[i].killsTotal + "  ");
                    var textnode3 = document.createTextNode(result1_2PARSED.entries[i].gemsTotal - result1_1PARSED.entries[i].gemsTotal + "  ");
                    if(result1_2PARSED.entries[i].daggersFiredTotal == result1_1PARSED.entries[i].daggersFiredTotal)
                    {
                      var textnode4 = document.createTextNode("0.00%");
                    }else
                    {
                      var textnode4 = document.createTextNode((( (result1_2PARSED.entries[i].daggersHitTotal - result1_1PARSED.entries[i].daggersHitTotal ) / ( (result1_2PARSED.entries[i].daggersFiredTotal - result1_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                    }
                   
                    
                    node.appendChild(textnode);
                    node.appendChild(imageKills);
                    node.appendChild(textnode2);
                    node.appendChild(imageGem);
                    node.appendChild(textnode3);
                    node.appendChild(imageAcc);
                    node.appendChild(textnode4);
                    holder.appendChild(node);

                    if(!isPageActive){
                      gone++;
                      document.title = pageTitle + " (" + gone + ")";
                    }else {
                      document.title = pageTitle;
                    }

                    if(maindiv.childNodes.length > 10)
                    {
                      maindiv.removeChild(maindiv.firstChild);
                    }

                }
              }

              //?top 200 mode
              for(let i = 0; i < 100; i++)
              {
                if(result2_1PARSED.entries[i].deathsTotal != result2_2PARSED.entries[i].deathsTotal && result2_1PARSED.entries[i].deathsTotal != doubleCheckCounter[1])
                {
                  doubleCheckCounter[1] = result2_1PARSED.entries[i].deathsTotal;
                  audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result2_1PARSED.entries[i].username + " just got " +  setkomma(result2_2PARSED.entries[i].timeTotal - result2_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result2_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result2_2PARSED.entries[i].killsTotal - result2_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result2_2PARSED.entries[i].gemsTotal - result2_1PARSED.entries[i].gemsTotal + "  ");
                  if(result2_2PARSED.entries[i].daggersFiredTotal == result2_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result2_2PARSED.entries[i].daggersHitTotal - result2_1PARSED.entries[i].daggersHitTotal ) / ( (result2_2PARSED.entries[i].daggersFiredTotal - result2_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                }
              }

              //?top 300 mode
              for(let i = 0; i < 100; i++)
              {
                if(result3_1PARSED.entries[i].deathsTotal != result3_2PARSED.entries[i].deathsTotal && result3_1PARSED.entries[i].deathsTotal != doubleCheckCounter[2])
                {
                  doubleCheckCounter[2] =result3_1PARSED.entries[i].deathsTotal;
                  audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result3_1PARSED.entries[i].username + " just got " +  setkomma(result3_2PARSED.entries[i].timeTotal - result3_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result3_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result3_2PARSED.entries[i].killsTotal - result3_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result3_2PARSED.entries[i].gemsTotal - result3_1PARSED.entries[i].gemsTotal + "  ");
                  if(result3_2PARSED.entries[i].daggersFiredTotal == result3_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result3_2PARSED.entries[i].daggersHitTotal - result3_1PARSED.entries[i].daggersHitTotal ) / ( (result3_2PARSED.entries[i].daggersFiredTotal - result3_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                }
              }        
              
               //?top 400 mode
               for(let i = 0; i < 100; i++)
               {
                 if(result4_1PARSED.entries[i].deathsTotal != result4_2PARSED.entries[i].deathsTotal && result4_1PARSED.entries[i].deathsTotal != doubleCheckCounter[3])
                 {
                   doubleCheckCounter[3] = result4_1PARSED.entries[i].deathsTotal;
                   audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result4_1PARSED.entries[i].username + " just got " +  setkomma(result4_2PARSED.entries[i].timeTotal - result4_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result4_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result4_2PARSED.entries[i].killsTotal - result4_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result4_2PARSED.entries[i].gemsTotal - result4_1PARSED.entries[i].gemsTotal + "  ");
                  if(result4_2PARSED.entries[i].daggersFiredTotal == result4_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result4_2PARSED.entries[i].daggersHitTotal - result4_1PARSED.entries[i].daggersHitTotal ) / ( (result4_2PARSED.entries[i].daggersFiredTotal - result4_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                 }
               }             


              //?top 500 mode
              for(let i = 0; i < 100; i++)
              {
                if(result5_1PARSED.entries[i].deathsTotal != result5_2PARSED.entries[i].deathsTotal && result5_1PARSED.entries[i].deathsTotal != doubleCheckCounter[4])
                {
                  doubleCheckCounter[4] = result5_1PARSED.entries[i].deathsTotal;
                  audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result5_1PARSED.entries[i].username + " just got " +  setkomma(result5_2PARSED.entries[i].timeTotal - result5_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result5_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result5_2PARSED.entries[i].killsTotal - result5_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result5_2PARSED.entries[i].gemsTotal - result5_1PARSED.entries[i].gemsTotal + "  ");
                  if(result5_2PARSED.entries[i].daggersFiredTotal == result5_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result5_2PARSED.entries[i].daggersHitTotal - result5_1PARSED.entries[i].daggersHitTotal ) / ( (result5_2PARSED.entries[i].daggersFiredTotal - result5_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                }
              }     
              
               //?top 600 mode
               for(let i = 0; i < 100; i++)
               {
                 if(result6_1PARSED.entries[i].deathsTotal != result6_2PARSED.entries[i].deathsTotal && result6_1PARSED.entries[i].deathsTotal != doubleCheckCounter[5])
                 {
                   doubleCheckCounter[5] = result6_1PARSED.entries[i].deathsTotal;
                   audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result6_1PARSED.entries[i].username + " just got " +  setkomma(result6_2PARSED.entries[i].timeTotal - result6_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result6_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result6_2PARSED.entries[i].killsTotal - result6_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result6_2PARSED.entries[i].gemsTotal - result6_1PARSED.entries[i].gemsTotal + "  ");
                  if(result6_2PARSED.entries[i].daggersFiredTotal == result6_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result6_2PARSED.entries[i].daggersHitTotal - result6_1PARSED.entries[i].daggersHitTotal ) / ( (result6_2PARSED.entries[i].daggersFiredTotal - result6_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                 }
               } 
               
               //?top 700 mode
               for(let i = 0; i < 100; i++)
               {
                 if(result7_1PARSED.entries[i].deathsTotal != result7_2PARSED.entries[i].deathsTotal && result7_1PARSED.entries[i].deathsTotal != doubleCheckCounter[6])
                 {
                   doubleCheckCounter[6] = result7_1PARSED.entries[i].deathsTotal;
                   audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result7_1PARSED.entries[i].username + " just got " +  setkomma(result7_2PARSED.entries[i].timeTotal - result7_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result7_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result7_2PARSED.entries[i].killsTotal - result7_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result7_2PARSED.entries[i].gemsTotal - result7_1PARSED.entries[i].gemsTotal + "  ");
                  if(result7_2PARSED.entries[i].daggersFiredTotal == result7_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result7_2PARSED.entries[i].daggersHitTotal - result7_1PARSED.entries[i].daggersHitTotal ) / ( (result7_2PARSED.entries[i].daggersFiredTotal - result7_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                 }
               }   
               
              //?top 800 mode
              for(let i = 0; i < 100; i++)
              {
                if(result8_1PARSED.entries[i].deathsTotal != result8_2PARSED.entries[i].deathsTotal && result8_1PARSED.entries[i].deathsTotal != doubleCheckCounter[7])
                {
                  doubleCheckCounter[7] = result8_1PARSED.entries[i].deathsTotal;
                  audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result8_1PARSED.entries[i].username + " just got " +  setkomma(result8_2PARSED.entries[i].timeTotal - result8_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result8_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result8_2PARSED.entries[i].killsTotal - result8_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result8_2PARSED.entries[i].gemsTotal - result8_1PARSED.entries[i].gemsTotal + "  ");
                  if(result8_2PARSED.entries[i].daggersFiredTotal == result8_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result8_2PARSED.entries[i].daggersHitTotal - result8_1PARSED.entries[i].daggersHitTotal ) / ( (result8_2PARSED.entries[i].daggersFiredTotal - result8_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);


                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                }
              }  
              
              //?top 900 mode
              for(let i = 0; i < 100; i++)
              {
                if(result9_1PARSED.entries[i].deathsTotal != result9_2PARSED.entries[i].deathsTotal && result9_1PARSED.entries[i].deathsTotal != doubleCheckCounter[8])
                {
                  doubleCheckCounter[8] = result9_1PARSED.entries[i].deathsTotal;
                  audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result9_1PARSED.entries[i].username + " just got " +  setkomma(result9_2PARSED.entries[i].timeTotal - result9_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result9_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result9_2PARSED.entries[i].killsTotal - result9_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result9_2PARSED.entries[i].gemsTotal - result9_1PARSED.entries[i].gemsTotal + "  ");
                  if(result9_2PARSED.entries[i].daggersFiredTotal == result9_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result9_2PARSED.entries[i].daggersHitTotal - result9_1PARSED.entries[i].daggersHitTotal ) / ( (result9_2PARSED.entries[i].daggersFiredTotal - result9_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                }
              }  
              
              //?top 1000 mode
              for(let i = 0; i < 100; i++)
              {
                if(result10_1PARSED.entries[i].deathsTotal != result10_2PARSED.entries[i].deathsTotal && result10_1PARSED.entries[i].deathsTotal != doubleCheckCounter[9])
                {
                  doubleCheckCounter[9] = result10_1PARSED.entries[i].deathsTotal;
                  audio.play();
                  var imageKills = document.createElement("IMG");
                  imageKills.setAttribute("src", "resource/icondagger.png");
                  imageKills.setAttribute("width", "16");
                  imageKills.setAttribute("height", "16");
                  imageKills.setAttribute("alt", "dagger icon");
              
                  var imageGem = document.createElement("IMG");
                  imageGem.setAttribute("src", "resource/icongem.png");
                  imageGem.setAttribute("width", "16");
                  imageGem.setAttribute("height", "16");
                  imageGem.setAttribute("alt", "gem icon");
              
                  var imageAcc = document.createElement("IMG");
                  imageAcc.setAttribute("src", "resource/iconcrosshair.png");
                  imageAcc.setAttribute("width", "16");
                  imageAcc.setAttribute("height", "16");
                  imageAcc.setAttribute("alt", "dagger Accuracy");

                  var newRun = result10_1PARSED.entries[i].username + " just got " +  setkomma(result10_2PARSED.entries[i].timeTotal - result10_1PARSED.entries[i].timeTotal) + " seconds.   ";
                  var node = document.createElement("SPAN");
                  node.setAttribute('title', "Rank "+result10_1PARSED.entries[i].rank + " Player");
                  var textnode = document.createTextNode(newRun);
                  var textnode2 = document.createTextNode(result10_2PARSED.entries[i].killsTotal - result10_1PARSED.entries[i].killsTotal + "  ");
                  var textnode3 = document.createTextNode(result10_2PARSED.entries[i].gemsTotal - result10_1PARSED.entries[i].gemsTotal + "  ");
                  if(result10_2PARSED.entries[i].daggersFiredTotal == result10_1PARSED.entries[i].daggersFiredTotal)
                  {
                    var textnode4 = document.createTextNode("0.00%");
                  }else
                  {
                    var textnode4 = document.createTextNode((( (result10_2PARSED.entries[i].daggersHitTotal - result10_1PARSED.entries[i].daggersHitTotal ) / ( (result10_2PARSED.entries[i].daggersFiredTotal - result10_1PARSED.entries[i].daggersFiredTotal) /100)).toFixed(2) + "%"));
                  }
                  
                  node.appendChild(textnode);
                  node.appendChild(imageKills);
                  node.appendChild(textnode2);
                  node.appendChild(imageGem);
                  node.appendChild(textnode3);
                  node.appendChild(imageAcc);
                  node.appendChild(textnode4);
                  holder.appendChild(node);

                  if(!isPageActive){
                    gone++;
                    document.title = pageTitle + " (" + gone + ")";
                  }else {
                    document.title = pageTitle;
                  }

                  if(maindiv.childNodes.length > 10)
                  {
                    maindiv.removeChild(maindiv.firstChild);
                  }
                }
              }   


         

                  
               
                                  //! END OF CHECKING FOR CHANGES AND ONTO XHR SECOND REQUESTS CATCH BLOCKS


                              }).catch(function() 
                              {
                                  alert("shits not working inside result10_2");
                              });
                            }).catch(function() 
                            {
                                alert("shits not working inside result9_2");
                            });
                          }).catch(function() 
                          {
                              alert("shits not working inside result8_2");
                          });
                        }).catch(function() 
                        {
                            alert("shits not working inside result7_2");
                        });
                      }).catch(function() 
                      {
                          alert("shits not working inside result6_2");
                      });
                    }).catch(function() 
                    {
                        alert("shits not working inside result5_2");
                    });
                  }).catch(function() 
                  {
                      alert("shits not working inside result4_2");
                  });
                }).catch(function() 
                {
                    alert("shits not working inside result3_2");
                });
              }).catch(function() 
              {
                  alert("shits not working inside result2_2");
              });
        
            }).catch(function() 
            {
                alert("shits not working inside result1_2");
            });
          }, 3000);


                                    //! END OF SECOND 11 XHR REQUESTS
                                    //! START OF FIRST 11 XHR REQUEST ERROR CATCH BLOCKS

                               }).catch(function() 
                               {
                                   alert("shits not working in result10_1");
                               });
                            }).catch(function() 
                            {
                                alert("shits not working in result9_1");
                            });
                         }).catch(function() 
                         {
                             alert("shits not working in result8_1");
                         });
                      }).catch(function() 
                      {
                          alert("shits not working in result7_1");
                      });
                   }).catch(function() 
                   {
                       alert("shits not working in result6_1");
                   });
                }).catch(function() 
                {
                    alert("shits not working in result5_1");
                });
             }).catch(function() 
             {
                 alert("shits not working in result4_1");
             });
          }).catch(function() 
          {
              alert("shits not working in result3_1");
          });

       }).catch(function() 
       {
           alert("shits not working in result2_1");
       });

    }).catch(function() 
    {
        alert("shits not working in result1_1");
    });
  }, 6000);
  }else
  {
    document.getElementById("livetitle").innerHTML = "watch the empty darkness my friend";
  }
});




function getTop100(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  });
}


String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function setkomma(numba)
{
  if(numba.toString().length == 8)
  {
      return numba.toString().splice(4,0,".");
  }else if(numba.toString().length== 7)
  {
      return numba.toString().splice(3,0,".");
  }else if(numba.toString().length== 6)
  {
      return numba.toString().splice(2,0,".");
  }
  else if(numba.toString().length== 5)
  {
      return numba.toString().splice(1,0,".");
  }else
  {
    return 0;
  }
}

function callMeCarson(car)
{
  return carsoncity(5,5);
}

function carsoncity(x,x)
{
  //for those in need i as the maker will open my arms for those in wrath i will endevour the entrepolistic man
  // sense is perspective you are on a mission but you have reached no destination
  return "Calimbra"
}

function theunit(jehova)
{

  if(0)
  true; 
  else
  return true;

}

function fin(person)
{
  return person == "infinitus" ? true : false;
}