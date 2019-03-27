     var app=Class.extend({

    init: function () {
            events=[{btnId:'registerBtn',evt:'click',handler:alert('hi')},
                    {btnId:'assignOverlayBtn',evt:'click',handler:alert('hey')}];
            
            var btnObj;
            for(var i=0;i<events.length;i++)
             {
                btnObj=events[i];
                document.getElementById(btnObj.btnId).addEventListener(btnObj.evt,btnObj.handler);
             }

    },


    makeAjaxRequest:function(ajaxObj){
         console.log(ajaxObj.data);
         var  methodName=ajaxObj.type || 'GET',
         fileName=ajaxObj.fileName,
         postData=ajaxObj.data,
         callback=ajaxObj.callback;
         var xhttp,loader,res;

        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xhttp.onreadystatechange = function() {
           if(this.readyState !=4){
                loader= document.getElementById('loader');
                loader.className="loader";
            }
            else if (xhttp.readyState === 4 && xhttp.status === 404) {
                loader.className='';
                alert ('Sorry,Requested page not found');
                return;
            }
            else if (xhttp.readyState === 4 && xhttp.status === 500) {
                loader.className='';
                alert ('Internal Server Error');
                return;
            }
            else if (xhttp.readyState == 4 && xhttp.status == 401) {
                loader.className='';
                alert('Unauthorized Error');
                return;
            }
            else{
               loader.className='';
               res=  this.responseText;
              // if(callback ==null)return res;
               else  callback(res);
           }

        };
        if(methodName =='GET') {
            xhttp.open(methodName, fileName,true);
            xhttp.send();
        }
        else {
            xhttp.open(methodName, fileName,true);
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhttp.send(postData);
        }
      

        return  res;

    },



             inputAlphabet: function(parameters){
                 var inputId = parameters.inputId, alertMsg=parameters.alertMsg, spanId = parameters.spanId;
                 inputId=document.getElementById(inputId);
                 var alphaExp =new RegExp("^[a-zA-z ]+$");
                 spanId=document.getElementById(spanId);
                 if(inputId.value.match(alphaExp)){
                     spanId.innerHTML="";
                     return true;
                 }
                 else{
                     spanId.innerHTML=alertMsg;
                     return false;

                 }},

             inputNumber: function(parameters){
                 var inputId = parameters.inputId, alertMsg=parameters.alertMsg, spanId = parameters.spanId;
                 inputId=document.getElementById(inputId);
                 var numExp=new RegExp("^[0-9]+$");
                 spanId=document.getElementById(spanId);
                 if(inputId.value.match(numExp)){
                     spanId.innerHTML="";
                     return true;
                 }


                 else{
                     spanId.innerHTML=alertMsg;

                     return false;
                 }
             },

             inputEmail: function(parameters){
                 var inputId = parameters.inputId, alertMsg=parameters.alertMsg, spanId = parameters.spanId;
                 inputId=document.getElementById(inputId);
                 var emailExp = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z_]+?[.][a-zA-Z]{2,3}$");
                 spanId=document.getElementById(spanId);


                 if(inputId.value.match(emailExp)){
                     spanId.innerHTML="";
                     return true;
                 }

                 else{
                     spanId.innerHTML=alertMsg;

                     return false;
                 }
             },

             dropDownCheck: function(parameters){
                 var dropDownId=parameters.dropDownId, alertMsg=parameters.alertMsg, spanId = parameters.spanId;
                 dropDownId=document.getElementById(dropDownId);
                 var dropDownValue=dropDownId.options[dropDownId.selectedIndex].value;
                 spanId=document.getElementById(spanId);
                 if(dropDownValue==0){


                     spanId.innerHTML=alertMsg;
                     return false;

                 }

                 else{
                     spanId.innerHTML="";
                     return true;
                 }

             },
             passwordStrength: function(parameters){
                 var password=parameters.password, passwordStrength=parameters.passwordStrength;
                 password=document.getElementById(password).value;
                 var strongPassExp=new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#\$%\^&\*])(?=.{8,})');
                 var mediumPassExp=new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[-!@#\$%\^&\*]))|((?=.*[-!@#\$%\^&\*])(?=.*[A-Z]))|((?=.*[0-9])(?=.*[-!@#\$%\^&\*]))(?=.{6,}))');
                 passwordStrength=document.getElementById(passwordStrength);

                 passwordStrengthChildren=passwordStrength.children;
                 passwordStrengthChildren[3].style.display="block";

                 if(password.length<7){
                     passwordStrengthChildren[3].innerHTML="Enter at least 6 characters";
                     passwordStrengthChildren[0].style.background="";
                     passwordStrengthChildren[1].style.background="";
                     passwordStrengthChildren[2].style.background="";
                     return false;


                 }

                 else if(password.match(strongPassExp)){



                     passwordStrengthChildren[0].style.background="#4C9900";
                     passwordStrengthChildren[1].style.background="#4C9900";
                     passwordStrengthChildren[2].style.background="#4C9900";
                     passwordStrengthChildren[3].innerHTML="strong strength password";
                     return true;

                 }

                 else if (password.match(mediumPassExp)){


                     passwordStrengthChildren[0].style.background="#FF4500";
                     passwordStrengthChildren[1].style.background="#FF4500";
                     passwordStrengthChildren[2].style.background="";
                     passwordStrengthChildren[3].innerHTML="medium strength password";
                     return true;

                 }


                 else {


                     passwordStrengthChildren[0].style.background="#ff0000";
                     passwordStrengthChildren[1].style.background="";
                     passwordStrengthChildren[2].style.background="";
                     passwordStrengthChildren[3].style.display="block";
                     passwordStrengthChildren[3].innerHTML="Enter a stronger password";
                     return false;

                 }
             },

             passwordMatch: function(parameters){
                 var passwordId=parameters.passwordId, confirmPasswordId=parameters.confirmPasswordId, spanId=parameters.spanId;
                 passwordId=document.getElementById(passwordId).value;
                 confirmPasswordId=document.getElementById(confirmPasswordId).value;
                 spanId=document.getElementById(spanId);

                 if(passwordId===confirmPasswordId){
                     spanId.innerHTML="";
                     return true;
                 }

                 else{

                     spanId.innerHTML="Passwords do not match";
                     return false;
                 }
             },

             oracleIdCheck: function(parameters){
                 var inputId = parameters.inputId, alertMsg=parameters.alertMsg, spanId = parameters.spanId;
                 inputId=document.getElementById(inputId).value;
                 if(inputId.length<7){
                     spanId=document.getElementById(spanId);

                     spanId.innerHTML=alertMsg;
                     return false;
                 }

                 else{
                     return true;
                 }
             },

             inputPhone: function(parameters){
                 var inputId = parameters.inputId, alertMsg=parameters.alertMsg, spanId = parameters.spanId;
                 inputId=document.getElementById(inputId).value;
                 spanId=document.getElementById(spanId);
                 if(inputId.length!=10){

                     spanId.innerHTML=alertMsg;
                     return false;

                 }

                 else{

                     spanId.innerHTML="";

                     return true;
                 }
             },








         popup:function(popupObject)
         {

                 var overlay=document.createElement('div');
                 overlay.id=popupObject.divId;
                 overlay.className=popupObject.classId;
                 var cover;
                 if(popupObject.parentObjectClass)
                 {
                     cover= document.getElementsByClassName(popupObject.parentObjectClass);
                     console.log(cover);
                     if(cover.length)
                     {
                         cover = cover[0];
                     }
                     else {
                         return false;
                     }
                     cover.appendChild(overlay);

                 }
                 if(popupObject.overlayFlag)
                 {
                     document.getElementById(popupObject.overlayFlag).style.display='none';
                     overlay.style.display='inline-block';
                 }
                 else{
                     cover= document.getElementById('cover');
                     cover.style.display = 'block';
                 }
                 var heading=document.createElement('heading');
                 overlay.appendChild(heading);
                 heading.innerHTML=popupObject.header;
                 var section=document.createElement('section');
                 overlay.appendChild(section);
                 section.innerHTML=popupObject.contentText;
                 if((Object.keys(popupObject.btns)).length===2)
                 {
                     var para= document.createElement('p');
                     overlay.appendChild(para);
                     buttonCreated(para,popupObject.btns.btn1,popupObject.events.btn1);
                     buttonCreated(para,popupObject.btns.btn2,popupObject.events.btn2);
                 }
                 else if((Object.keys(popupObject.btns)).length===1)
                 {
                     buttonCreated(overlay,popupObject.btns.btn1,popupObject.events.btn1);
                 }

                 function buttonCreated(parent,objVal,event1)
                 {
                     var buttonName=document.createElement('input');
                     parent.appendChild(buttonName);
                     buttonName.type='button';
                     buttonName.value=objVal;
                     buttonName.addEventListener('click',event1);
                     buttonName.id='okBtn';
                     buttonName.className='global-btn okBtn';
                 }
                 function removeElement(divClass,divNum){
                     var d = document.getElementsByClassName(divClass)[0];

                     var olddiv = document.getElementById(divNum);
                     d.removeChild(olddiv);
                 }


         },

  /*       hideOverlay: function(div1, div2)
              {
                document.getElementById(div1).style.display = "none";
                document.getElementById(div2).style.display = "none";
              },*/
         header:function() {
             var headerBurgerMenu = document.querySelectorAll(".sapient-logo button");
             var navigationdropdown = document.getElementsByClassName("global-nav");
             if (headerBurgerMenu.length) {
                 headerBurgerMenu[0].addEventListener("click", function () {
                     toggleClass(navigationdropdown[0], "hidden-xs", "global-nav hidden-sm");
                 });
             }

             function toggleClass(object, classToBeToggled, classList) {
                 if (object.className.indexOf(classToBeToggled) != -1) {
                     object.className = classList;
                 }
                 else {
                     object.className = object.className + " " + classToBeToggled;
                 }
             }
         },

      logOut:function(){
             logoutButtonDesktop = document.querySelectorAll(".user-info");
             logoutButtonMobile = document.querySelectorAll(".user-info");
             profileFlyout = document.getElementsByClassName("profile-flyout");
             if(logoutButtonDesktop.length) {
                 logoutButtonDesktop[0].addEventListener("click", function(e){
                     toggleClass(profileFlyout[0],"hidden-xs","profile-flyout");
                     e.stopPropagation();
                 });
                 logoutButtonMobile[1].addEventListener("click", function(e){
                     toggleClass(profileFlyout[1],"hidden-xs","profile-flyout");
                     e.stopPropagation();
                    
                 });
             }

             function toggleClass(object, classToBeToggled, classList) {
                 if(object.className.indexOf(classToBeToggled)!=-1) {
                     object.className = classList;
                     window.addEventListener('click', windowHide);
                 }
                 else {
                   //  window.removeEventListener('click', windowHide);
                     object.className=object.className+" "+classToBeToggled;
                 }
             }
             function windowHide(){
                if(profileFlyout[0].classList.length===1){
                   profileFlyout[0].classList.add('hidden-xs');
                   window.removeEventListener('click', windowHide);

                }
                 if(profileFlyout[1].classList.length===1){
                   profileFlyout[1].classList.add('hidden-xs');
                   window.removeEventListener('click', windowHide);

                }
                

             }
         }







});