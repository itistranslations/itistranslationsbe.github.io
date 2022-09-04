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
	alert('Le formulaire ne peut pas \xEAtre envoy\xE9 si certains champs obligatoires ne sont pas remplis.');
	return(false);
}
if (formulier.bericht.value.length>20000){
	alert('Votre message peut contenir au maximum 20000 caract\xE8res.');
	return(false);
}
//if (!(valid_url(formulier.mailafzender.value)))
//{
//	alert('Veuillez indiquer une adresse e-mail valide.');
//	return(false);
//}
}

function checkgb(formulier){
if (formulier.naam.value.length<1){
	alert('Veuillez remplir votre nom!');
	return(false);
}
if (formulier.bericht.value.length<1){
	alert('Veuillez remplir votre message!');
	return(false);
}
if (formulier.captcha.value.length<1){
	alert('Veuillez remplir le code antispam!');
	return(false);
}

if (formulier.naam.value.length>50){
	alert('Votre nom est trop long. Veuillez le raccourcir.');
	return(false);
}
if (formulier.locatie.value.length>50){
	alert('Le nom de votre place est trop long. Veuillez le raccourcir.');
	return(false);
}
if (formulier.firma.value.length>50){
	alert('Le nom de votre soci\xE9t\xE9 est trop long. Veuillez le raccourcir.');
	return(false);
}
if (formulier.website.value.length>50){
	alert('L\' URL est trop long. Veuillez le raccourcir.');
	return(false);
}
if (formulier.bericht.value.length>1450){
	alert('Votre message est trop long. Veuillez le raccourcir.');
	return(false);
}
if (!(valid_url(formulier.website.value))&&(!formulier.website.value=="")){
	alert('Vous avez ins\xE9r\xE9 un URL non valable.');
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




//steeds af te handelen

window.onresize=function(){
	updateresolution();

}



