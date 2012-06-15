var cssTransitionSupported = false;
var teamTotal = 4;
var curMemberIndex = 1;
var servicesMenuHeight = 24;

$(document).ready(function(){isCssTransitionSupported();init()});

function init(){
	$("#honeContactForm").validate();
}



function prevMember(){
	if(curMemberIndex != 1){
    	doEffect('#honeTeamMemberContainer',{left:curMemberIndex - curMemberIndex/$('.honeTeamMember').width()},12,true);
    	curMemberIndex -= 1;
    }
}

function nextMember(){
	if(curMemberIndex != teamTotal){
    	doEffect('#honeTeamMemberContainer',{left:-(curMemberIndex*$('.honeTeamMember').width())-(curMemberIndex*$('.honeTeamMember').css('marginRight').replace('px',''))},12,true);
	    curMemberIndex += 1;
	     //$('.honeTeamMemberSocial').html(curMemberIndex);
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
	var itemHeight = $(this).height();
	doEffect('.honeServicesCategory',{height:servicesMenuHeight},40);
	doEffect(this,{height:itemHeight>100?servicesMenuHeight:200},15); //'100%'
	
	/* TEMP til math based */
	if($(this).html().search( /Strategy/i ) != -1){var magic = -66}
	if($(this).html().search( /Design/i ) != -1){var magic = -25}
	if($(this).html().search( /Development/i ) != -1){var magic = 22}
	if($(this).html().search( /Mobile/i ) != -1){var magic = 70}
		
	var offset = $(this).offset().top - ($(this).offset().top + magic);
	if(itemHeight<100){scroll($('.honeServicesCategory'),magic);}
});


$(window).resize(function() {});
/*$(document).bind("contextmenu",function(e){return false;});*/

function isCssTransitionSupported(){return false; cssTransitionSupported = $('#test').transition({opacity:1}) ? false : true}

function doEffect(o,props,speed,isJS){$(o)[isCssTransitionSupported()==false&isJS==false?'transition':'animate'](props,((10/speed)*1000))}

function scroll(o,offset){$('html,body').animate({scrollTop: $(o).offset().top + (!offset ? 0 : offset)}, 800);}