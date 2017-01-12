function log_in(logged_in) {
	if (logged_in) {
		log_out = confirm("Are you sure you want to log out? Your current game will be saved.")
			if(log_out) {
				window.location = "/log_out"
			}
	}
	else {
		window.location = "/log_in"
	}
}