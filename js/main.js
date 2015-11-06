var width = $("img").width();
var height = $("img").height();

$('img').each(function(){

    console.log(width);
    console.log(height);
});

var resizeboxes = (function(){

	$(this).css('width', width);
	width = width + ; 

}

$('img').each(function(){
if (width > height){







	$('gallery').addclass('.landscape');
}
else if (width < height){
	$('gallery').addclass('.portrait');
}