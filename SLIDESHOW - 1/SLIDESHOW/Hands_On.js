var count = 0;

function slideShow() 
{
    var imgTitle = [];
    var imgPath = [];
    document.onkeydown = function(key) { reactKey(key); }

    function reactKey(evt) 
    {
        if (evt.keyCode == 39) 
         {
            moveForward();
        }
        if (evt.keyCode == 37) 
        {
            moveBackward();
        }
    }
    document.getElementsByClassName("back-button")[0].addEventListener("click", moveBackward);
    document.getElementsByClassName("forward-button")[0].addEventListener("click", moveForward);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
         {
            console.log(xhttp.responseText);
            response1 = JSON.parse(xhttp.responseText);
            imgDetail = response1.images;
            for (var k = 0; k < imgDetail.length; k++) 
             {
                var urlImage = 'url(' + imgDetail[k].path + ')';
                var li = document.createElement('li');
                var img = document.createElement('img');
                var span = document.createElement("span")
                var heading = document.createTextNode(imgDetail[k].title);
                span.appendChild(heading);
                span.style.color = "bloack";
                span.style.fontSize = "46px";
                span.style.position = "relative";
                span.style.top = "40%";
                span.style.margin = "40%";
                li.id = "my-image" + k;
                li.style.backgroundImage = urlImage;
                li.style.backgroundRepeat = "no-repeat";
                li.style.display = "inline-block";
                li.style.verticalAlign = "top";
                li.style.height = "700px";
                li.style.width = "1344px";

                document.getElementById('image-list').appendChild(li);
                li.appendChild(span);

            }
            document.getElementById('image-list').appendChild(document.createElement('li'));

        }
    };

    xhttp.open("GET", "data.json", true);
    xhttp.send();

}

k = 0;

function moveBackward() {
    if (count > 0) {

        console.log(count + " back");
        count -= 1;

        var spf1 = "my-image" + (count + 1);
        var spf = "my-image" + (count);


        document.getElementById(spf1).style.WebkitTransform = "translate(-100px,0)";
        document.getElementById(spf1).style.position = "absolute";
        document.getElementById(spf1).style.top = "30";

        document.getElementById(spf1).style.left = "1500px";

        document.getElementById(spf1).style.transitionDuration = "3s";
        document.getElementById(spf1).style.transitionTimingFunction = "ease-in";
        console.log(document.getElementById(spf1));


    }
}

function moveForward() {
    if (count < imgDetail.length - 1) {


        count += 1;
        console.log(count);



        var spf = "my-image" + (count - 1);
        var spf1 = "my-image" + (count);


        document.getElementById(spf1).style.WebkitTransform = "translate(-1300px,0)";
        document.getElementById(spf1).style.position = "absolute";
        document.getElementById(spf1).style.top = "0";

        document.getElementById(spf1).style.left = "1300px";

        document.getElementById(spf1).style.transitionDuration = "3s";
        document.getElementById(spf1).style.transitionTimingFunction = "ease-in";
       

    }
}

function reset() {

}
