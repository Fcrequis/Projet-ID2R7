$(document).on("pagecreate",function(event){
	
	// Enleve les fleches des elements <li>
	var bool = $('.ui-btn').hasClass('ui-btn-icon-right');
	if(bool){$('.ui-btn').removeClass('ui-btn-icon-right');}

	$.mobile.page.prototype.options.domCache = true;
	
	//Redirige vers d'autres pages
		//Accueil - *
		$('#Accueil-ListeRecettes').on('tap', function(){
		})
});