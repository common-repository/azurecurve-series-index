jQuery(document).ready(function(){
	jQuery(".azc_si_toggle_container").hide();
	jQuery(".azc_si_toggle").click(function() {
		jQuery(this).toggleClass("azc_si_toggle_active").next().slideToggle('fast');
		return false;
	});
});