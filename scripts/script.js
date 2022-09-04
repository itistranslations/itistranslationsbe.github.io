// JavaScript Document
function scrollcontrol(klein){

	if(klein){
		document.getElementById('container').style.position="absolute";
		document.getElementById('container').style.marginTop="0px";
		document.getElementById('container').style.marginLeft="0px";
		document.getElementById('container').style.top="0px";
		document.getElementById('container').style.left="0px";
		
	}
	else{
	//	document.getElementById('placeholder').style.position="fixed";
		document.getElementById('container').style.position="absolute";
		document.getElementById('container').style.top="50%";
		document.getElementById('container').style.left="50%";
		document.getElementById('container').style.marginTop="-300px";
		document.getElementById('container').style.marginLeft="-512px";
			
	}
}

function valid_url(url){
	url2="http://"+ url.replace("http://","");
	var regexp =  /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;

	return regexp.test(url2);			
}


function email_gen(){
	var mail="<a href=\"mail";
	mail+="to:info@";
	mail+="itistranslations.";
	mail+="be\">info@";
	mail+="itistranslations.be</a>";
	document.write(mail);	
}

//contactform

function checkcontactformulier(formulier){
if ((formulier.afzender.value=="") || (formulier.bericht.value=="") || (formulier.mailafzender.value=="") || (formulier.subject.value=="") || (formulier.captcha.value=="")){
	alert('Formulier wordt alleen verzonden indien alle velden zijn ingevuld!');
	return(false);
}
if (formulier.bericht.value.length>100000){
	alert('Uw bericht mag maximaal 20000 karakters bevatten');
	return(false);
}
//if (!(valid_url(formulier.mailafzender.value)))
//{
//	alert('U hebt geen geldige url ingegeven!');
//	return(false);
//}

}

function checkgb(formulier){
if (formulier.naam.value.length<1){
	alert('Gelieve uw naam in te vullen!');
	return(false);
}
if (formulier.bericht.value.length<1){
	alert('Gelieve uw bericht in te vullen!');
	return(false);
}
if (formulier.captcha.value.length<1){
	alert('Gelieve de anti-spamcode in te vullen!');
	return(false);
}

if (formulier.naam.value.length>50){
	alert('De lengte van uw naam is te lang. Gelieve deze in te korten.');
	return(false);
}
if (formulier.locatie.value.length>50){
	alert('De lengte van de locatienaam is te lang. Gelieve deze in te korten.');
	return(false);
}
if (formulier.firma.value.length>50){
	alert('De lengte van de firmanaam is te lang. Gelieve deze in te korten.');
	return(false);
}
if (formulier.website.value.length>50){
	alert('De lengte van de url is te lang. Gelieve deze in te korten.');
	return(false);
}
if (formulier.bericht.value.length>1450){
	alert('De lengte van uw bericht is te lang. Gelieve dit in te korten.');
	return(false);
}
if (!(valid_url(formulier.website.value))&&(!formulier.website.value=="")){
	alert('U hebt een ongeldige url ingegeven.');
	return(false);
}

}

function captcha_vraag()
{
	var var1=(6-3);
	var var2=(4/2);
	var eindstr="("+var1+"+"+var2+"=)";
	document.write(eindstr);
	
	
}

function updateresolution()
{
var breedte= 0;
var hoogte = 0;

 if( typeof( window.innerWidth ) == 'number' ) {
    breedte = window.innerWidth;
    hoogte = window.innerHeight;
 } 
 else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    breedte = document.documentElement.clientWidth;
    hoogte = document.documentElement.clientHeight;
  } 
 else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    breedte = document.body.clientWidth;
    hoogte = document.body.clientHeight;
  }

if((breedte<1100)||(hoogte<400)){
	scrollcontrol(true);
}
else{
	scrollcontrol(false);
}	
	
}


function backbuttonreload()
{
	var cookies=document.cookie.split(/;/);
	var browser = navigator.userAgent.indexOf("Safari");
	var browser1 = navigator.userAgent.indexOf("Chrome");
	var isnot_safari=true;
	var reloaded="no";
	var cookies_enable="no";
	var tijd1=new Date();
	var tijd2=new Date();
	var milli1=Date.parse(tijd1)+10000;
	var milli2=Date.parse(tijd2)+5000;
	tijd1=tijd1.setTime(milli1);
	tijd2=tijd2.setTime(milli2);
	var expires1= "expires=" +tijd1.toUTCString;
	var pad1="path=/";
	
	if ((browser != -1) && (browser1 == -1))
	{
		isnot_safari=false;	
	}
	else
	{
		isnot_safari=true;	
	}
	
	if (isnot_safari)
	{
		return(false);	
	}
	else
	{
		return(false);
	}
	
	document.cookie="cookies_enable=" +escape("yes")+";"+expires1+";"+pad1;
	
	for (var i=0; i<cookies.length; i++){
		cookies[i]=cookies[i].split(/=/);
		cookies[i][1]=unescape(cookies[i][1]);
		var getcookie=cookies[i][0];
		if(getcookie.indexOf("reloaded")>=0)
		{
			reloaded=unescape(cookies[i][1]);
		}
		if(getcookie.indexOf("cookies_enable")>=0)
		{
			cookies_enable=unescape(cookies[i][1]);
		}
	}
	
	if (cookies_enable=="no")
	{
		return (true);	
	}
	if (reloaded=="no")
	{
		var expires= "expires=" +tijd2.toUTCString;
		var pad="path=/";
		document.cookie="reloaded=" +escape("yes")+";"+expires+";"+pad;
		location.reload();
		return(true);
	}
	else
	{
		return(true);
	}	
}




//steeds af te handelen

window.onresize=function(){
	updateresolution();

}



