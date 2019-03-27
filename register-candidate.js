var candidateRegister= app.extend({

                    makeAjaxRequest:function()
                    {
                       response = this._super('GET', "../assets/JSON/candidate-list.json", "");
                       return response;
                    },
  
                    createCandiadte:function()
                    {
                    	var xhr = new XMLHttpRequest();
                    	var dom=RegisterCanddate.domain;
                    	var career=RegisterCanddate.careerStage;
                    	var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth()+1; //January is 0!
                        var yyyy = today.getFullYear();
                        if(dd<10)
                           dd='0'+dd;
                        if(mm<10){
                           mm='0'+mm; 
                        today = dd+'/'+mm+'/'+yyyy; 
                        var postData = 'name='+RegisterCanddate.userName.value+'&contact='+RegisterCanddate.phonenumber.value +'&email='+
                                       RegisterCanddate.email.value+'&domain='+dom.options[dom.selectedIndex].text+
                                       '&career-stage='+career.options[dom.selectedIndex].text+'&reg-date='+today+
                                       "&assigned="+0+"&score="+(-1);

                        xhr.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                          console.log(postData);
                           }
                    };
                    xhr.open('POST', '../../hr/register-candidate.html', true);
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xhr.send(postData);
    
      

    



var yesBtn=document.getElementById('yesButton');
var noBtn=document.getElementById('noButton');

var preventBtn = document.getElementById("registerBtn");
if(preventBtn) {
    preventBtn.addEventListener("click", function(event){
        event.preventDefault();
    });
}

var registerBtn= document.getElementById('registerBtn');
if(registerBtn)
{
registerBtn.addEventListener('click',onRegister);
}


function onRegister()
{
  sendData();
  showOverlay('cover','thankyouOverlay');
}


function showOverlay(div1, div2){
    document.getElementById(div1).style.display = "block";
    document.getElementById(div2).style.display = "block"; 
}

yesBtn.addEventListener('click',function(){ location.href = "../../hr/register-candidate.html";})
noBtn.addEventListener('click',function(){ location.href = "../../hr/hr-dashboard.html";})


function sendData()
{
	var xmlHttpreq=new XMLHttpRequest();

  //  var ele=document.getElementById('user');
 	//	url  += ele.value + ".js"; 

    xmlHttpreq.onreadystatechange = function(){
    if( xmlHttpreq.readyState ===4  &&  xmlHttpreq.status==200)
	  {
	   //show d mesg
	   var uname=RegisterCanddate.userName.value;
	   var contact=RegisterCanddate.phonenumber.value;
	   var email=RegisterCanddate.email.value;
	   var persondetail=JSON.parse(xmlHttpreq.responseText);
	  // var im=document.getElementById('img1');
	                 //eof onreadystatechange
	   }
     }
 //   xmlHttpreq.open('POST',url,true);   //configuration
//	xmlHttpreq.send();
}