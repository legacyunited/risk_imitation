function log_in(logged_in) {
	if (logged_in) {
		log_out = confirm("Are you sure you want to log out? Your current game will be saved.")
			if(log_out) {
				window.location = "/log_out/"
			}
	}
	else {
		window.location = "/log_in/"
	}
}

function show_high_scores() {
	window.location.href='/high_scores'
}

function go_to_new_game(logged_in) {
	if (logged_in) {
		window.location = "/new_game/"
	}
	else {
		alert("To start a new game, you must first log in. Press the Log in / Log out button.")
	} 
}

function go_back() {
    window.history.back();
}
