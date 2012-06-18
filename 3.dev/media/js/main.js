var cssTransitionSupported = false;
var teamTotal = 4;
var curMemberIndex = 1;
var servicesMenuHeight = 24;

$(document).ready(function(){isCssTransitionSupported();init()});

function init(){
	$("#honeContactForm").validate();
	$('input[placeholder], textarea[placeholder]').placeholder();
	/*
      SOME CODE
    */
    document.ontouchstart = document.ontouchdown = document.onmousedown = function(event)
    {
    $('#debug').html(event);    }
    document.ontouchend = document.ontouchup = document.onmouseup = function(event)
    {
    /*
      SOME CODE
    */
    }
    document.ontouchmove = document.onmousemove = function(event)
    {
    //alert(event);
    
    /*
      SOME CODE
    */
    }


$('#sendmail').click(function() {
    sendEmail();
});


	
}

function contactSuccess(){
	alert('contactSuccess'); 
 }  
 
 function contactFail(){
	 
	 alert('contactFail');
 }

function prevMember(){
	if(curMemberIndex != 1){
    	doEffect('#teamMemberContainer',{left:curMemberIndex - curMemberIndex/$('.teamMember').width()},20,true);
    	curMemberIndex -= 1;
    }
}

function nextMember(){
	if(curMemberIndex != teamTotal){
    	doEffect('#teamMemberContainer',{left:-(curMemberIndex*$('.teamMember').width())-(curMemberIndex*$('.teamMember').css('marginRight').replace('px',''))},20,true);
	    curMemberIndex += 1;
	     //$('.teamMemberSocial').html(curMemberIndex);
    }
}


/* EVENTS ********************************************* */

$('#buttonPrev').click(function() {
	prevMember();
});


$('#buttonNext').click(function() {
	nextMember();
});


$('.honeServicesCategory').click(function() {

   var itemHeight = $('.honeServicesList',this).height();
   doEffect($('.honeServicesList'),{height:0},55); //'100%'
   //doEffect($('.honeServicesList',this),{height:servicesMenuHeight},55);
   doEffect($('.honeServicesList',this),{height:itemHeight==100?0:100},30); //'100%'
   
   $('.honeServicesList',this).css('color','#fff')
   
   /*
	var itemHeight = $('honeServicesList').height(); 
	doEffect($('.honeServicesList'),{height:itemHeight>100?servicesMenuHeight:200},15); //'100%'
	doEffect($('#honeServicesDevelopment'),{height:100},15); //'100%'
	*/
	
	/* TEMP til math based */		
	if($(this).html().search(/Strategy/i) != -1){var magic = -72}
	if($(this).html().search(/Brand Identity/i) != -1){var magic = -25}
	if($(this).html().search(/Development/i) != -1){var magic = 21}
	if($(this).html().search(/Mobile/i) != -1){var magic = 68}
		
		
	//var offset = $(this).offset().top - ($(this).offset().top + magic);
	if(itemHeight<100){scroll($('.honeServicesCategory'),magic);}
});


$(window).resize(function() {});
/*$(document).bind("contextmenu",function(e){return false;});*/

function isCssTransitionSupported(){return false; cssTransitionSupported = $('#test').transition({opacity:1}) ? false : true}

function doEffect(o,props,speed,isJS){$(o)[isCssTransitionSupported()==false&isJS==false?'transition':'animate'](props,((10/speed)*1000))}

function scroll(o,offset){$('html,body').animate({scrollTop: $(o).offset().top + (!offset ? 0 : offset)}, 800);}

function sendEmail(datastr){

	var valid = false;
	var name = $("#contactName").val();
	var mail = $("#contactEmail").val();
	var message = $("#contactMessage").val();
	
	if (name.length<1) {
		valid = false;
		$("#contactName").css('borderColor','red');
		$("#contactName").attr('placeholder','Please type your name');	
		}
	
	if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
		valid = false;
		$("#contactEmail").css('borderColor','red');
	}
	
	if (message.length<1) {
		valid = false;
		$("#contactMessage").css('borderColor','red');
	}
	
	if (valid==true) {
		var datastr ='contactName=' + name + '&contactEmail=' + mail + '&contactMessage=' + message;
		//$("#contactFormStatus").css("display", "block");
		//$("#contactFormStatus").fadeIn("slow");
		setTimeout("send('"+datastr+"')",2000);
	}
	else {
		//$("#contactFormStatus").fadeIn("slow");
		//$("#contactFormStatus").html(valid);
	}
	return false;
}


function send(datastr){
	$.ajax({
	type: "POST",
	url: "http://gomove.mobi/sendmail.php",
	data: datastr,
	cache: false,
	success: function(html){
	$("#contactFormStatus").fadeIn("slow");
	$("#contactFormStatus").html(html);
	setTimeout('$("#contactFormStatus").fadeOut("slow")',2000);
	}
	})

}

