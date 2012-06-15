function touchScroll(id){
    var el=document.getElementById(id);
    var scrollStartPos=0;

    document.getElementById(id).addEventListener("touchstart", function(event) {
        scrollStartPos=this.scrollTop+event.touches[0].pageY;
        event.preventDefault();
    },false);

    document.getElementById(id).addEventListener("touchmove", function(event) {
        this.scrollTop=scrollStartPos-event.touches[0].pageY;
        event.preventDefault();
    },false);
}
