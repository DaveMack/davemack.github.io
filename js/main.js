//animate smooth scroll

$('#viewWork').on('click', function(){
	const images = $('#images').position().top;

	$('html, bode').animate(
	{
		scrollTop: images
	},
	900
	);

});