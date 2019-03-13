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

//Inline helper function
Handlebars.registerHelper("makeLink", function(text, url){
  // to escape any HTML expression - make sure it is safe to use string
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);

  var theLink = '<a href="' + url + '">' + text + '</a>';

  // SafeString prevents the string from being escaped
  return new Handlebars.SafeString(theLink);
});