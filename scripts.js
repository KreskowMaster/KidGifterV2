window.onload = function () {
    var formtitle = document.getElementById("formtitle");
    var formdescription = document.getElementById("formdescription");
    var formimage = document.getElementById("formimage");
    var submit = document.getElementById("sub");
    var body = document.getElementsByTagName("body");
    var end = document.getElementById("end");
    var list = new Array();
    var clear = document.getElementById("delete");
    function isEmpty(value) {
    return /^\s*$/.test(value);
}
    submit.onclick = function(event) {
        event.preventDefault();
        if (!isEmpty(formtitle.value)) {
        var giftinfo = "<div class='gifttext'>";
        if (formimage != null) {
        giftinfo += "<img class='GiftImage omega' src='" + formimage.value + "'>";
        }
        giftinfo += "<p class='GiftTitle'>" + formtitle.value + "</p>";
        giftinfo += "<p class='GiftDescription'>" + formdescription.value + "</p>";
        giftinfo += "</div>";
        var div = document.createElement("div");
        div.className = "gift";
        div.innerHTML = giftinfo;
        document.body.appendChild(div);
        list = giftinfo.push;
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
        var link = "www.kidgifter.pl/" + sitename;
        alert(link);
        $.post('generate.php', {sitename: sitename});
        
}
}
