window.onload = function () {
    var formtitle = document.getElementById("formtitle");
    var formdescription = document.getElementById("formdescription");
    var formimage = document.getElementById("formimage");
    var submit = document.getElementById("sub");
    var body = document.getElementsByTagName("body");
    var end = document.getElementById("end");
    var list = new Array();
    var clear = document.getElementById("delete");
    var giftsArray = new Array();
    var endlink = document.getElementById("endlink");
    function isEmpty(value) {
    return /^\s*$/.test(value);
}
    submit.onclick = function(event) {
        event.preventDefault();
        if (!isEmpty(formtitle.value)) {
        var giftinfo = "<div class='gifttext'>";
        giftinfo += "<img class='GiftImage omega' src='" + formimage.value + "'>";
        giftinfo += "<p>" + formtitle.value + "</p>";
        giftinfo += "<p>" + formdescription.value + "</p>";
        giftinfo += "</div>";
        var div = document.createElement("div");
        div.className = "gift";
        div.innerHTML = giftinfo;
        document.body.appendChild(div);
        div.style = "font-family: Caviar Dreams; font-size: 1.5em; color: white; background: #E0003F; text-align: justify;";
        list = giftinfo.push;
        giftsArray.push(giftinfo);
        alert(giftsArray);
        formdescription.value = null;
        formtitle.value = null;
        formimage.value = null;
} else {
    alert("Tytuł jest wymagany!");
}
}
    end.onclick = function() {
        var giftPanel = document.getElementById("list_help");
        if(giftPanel) {
            giftPanel.parentNode.removeChild(giftPanel);    
        }
        var Current = new Array();
        var MaxValue=100; 
        var NumUnique=3; 
        var Count=0;
        var Current = new Array(NumUnique);
        GetUnique();

        alert("The unique numbers are: " + Current[0] + Current[1] + Current[2]);
          function GetUnique()
          {
            for (i = 0; Count<NumUnique; Count++)
            {
              var rndValue = get_random();
              var rndMultipication = get_random();
              var rndName = rndValue * rndMultipication;
              var j=0;
              Current[Count]=rndName;
            }
          }
          function get_random()
          {
            var ranNum= Math.round(Math.random()*MaxValue);
            return ranNum;
          }
        var sitename = Current[0] + "a" + Current[1] + "b" + Current[2] + "c"; 
        var link = "www.kidgifter.pl/test/" + sitename;
        var ended = true;
        var go = document.createElement("a");
        go.innerHTML = "Dalej";
        go.className = "go";
        go.href = sitename + ".php";
        endlink.className = "endlink";
        endlink.href = sitename + ".php";
        document.body.appendChild(go);
        var allGifts = "";
        for($i = 0; i<=giftsArray.length; i++) {
            allGifts += giftsArray[i];    
        }
        alert(link);
        $.post('generate.php', {
            allGifts: allGifts,
            sitename: sitename,
            ended: ended,
            giftsArray: giftsArray,
        });
        
}
}
