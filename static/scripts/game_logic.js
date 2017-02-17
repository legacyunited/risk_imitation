/* The metaphorical "cursor" that controls the behavior when you click on a country */
function select_country(country_name, turn_id, country_owner) {
	/* If it's your turn and you click on a country that's yours, that becomes the attacking country */
	if (turn_id == country_owner) {
		/*Unbolds the previous selected item before bolding the new one. */
		if (localStorage.selected_country != "null") {
			document.getElementById(localStorage.selected_country).style.fontWeight = "normal";
		}

		localStorage.selected_country = country_name;
		document.getElementById(country_name).style.fontWeight = "bold";
	}
	/* If you have already selected an offensive country: */
	/* If you are attacking a country that doesn't belong to you, calls attack function*/
	else if ((localStorage.selected_country != "null") && (turn_id != country_owner)) {
		alert(localStorage.selected_country + " attacks " + country_name);
		document.getElementById(localStorage.selected_country).style.fontWeight = "normal";
		localStorage.selected_country = null;
	}
}

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}