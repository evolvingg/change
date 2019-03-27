var template,
  	response,
    html;

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "response.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = this.responseText;
    xhttp.open("GET", "content.hbs", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       template = Handlebars.compile(this.responseText);
       html = template(JSON.parse(response));
       document.getElementById("targetDiv").innerHTML = html;
      }
    };
  }
};

//block helper function
Handlebars.registerHelper('ifEqual', function(a, b, opts) {
    if(a === b)
        return opts.fn(this);
    else
        return opts.inverse(this);
});