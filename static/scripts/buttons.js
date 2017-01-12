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

function show_high_scores() {
	window.location.href='high_scores'
}

function new_game(logged_in) {
	if (logged_in) {
		confirmation = confirm("Are you sure you want to make a new game? Your current game and your progress will be lost.")
			if(confirmation) {
				window.location = "/new_game"
			}
	}
	else {
		alert("To start a new game, you must first log in. Press the Log in / Log out button.")
	}
}