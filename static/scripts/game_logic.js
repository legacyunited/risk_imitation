/* The metaphorical "cursor" that controls the behavior when you click on a country */
function select_country(country_name, turn_id, country_owner) {
	/* If it's your turn and you click on a country that's yours, that becomes the attacking country */
	if (turn_id == country_owner) {
		/*Unbolds the previous selected item before bolding the new one. */
		if (localStorage.selected_country != "null") {
			document.getElementById(localStorage.selected_country).style.fontWeight = "normal";
		}

		localStorage.selected_country = country_name;
		localStorage.attacking_country_name = country_name
		localStorage.attacking_troops = document.getElementById(country_name).textContent;

		document.getElementById(country_name).style.fontWeight = "bold";
	}
	/* If you have already selected an offensive country: */
	/* If you are attacking a country that doesn't belong to you, calls attack function*/
	else if ((localStorage.selected_country != "null") && (turn_id != country_owner)) {
		if (adjacent_to(localStorage.attacking_country_name, country_name)) {
			document.getElementById(localStorage.selected_country).style.fontWeight = "normal";
			localStorage.defending_country_name = country_name;
			localStorage.defending_country_troops = document.getElementById(country_name).textContent;
			attack(localStorage.country_name, localStorage.attacking_troops, localStorage.defending_country_name, localStorage.defending_country_troops);
			localStorage.selected_country = null;
		}
		else {
			alert("Sorry! You must choose an adjacent country to attack!")
		}
	}
}


/* Logic that defines what happens when one country attacks another. */ 

function attack(attacking_country_name, attacking_country_troops, defending_country_name, defending_country_troops) {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = alertContents;
	httpRequest.open("POST", SCRIPT_ROOT+"/attack/", true);
	httpRequest.setRequestHeader('Content-Type', 'application/json; charset=utf8');
	var d = {"attacking_troops": attacking_country_troops, "defending_troops": defending_country_troops};
	httpRequest.send(JSON.stringify(d));
}

function alertContents() {
	if (httpRequest.readyState == XMLHttpRequest.DONE) {
		if (httpRequest.status == 200) {
			var a = JSON.parse(httpRequest.responseText);
			if (a.successful) {
				document.getElementById(localStorage.attacking_country_name).innerHTML = ("<p>" + String(a.attacking_country_troops) + "</p>");

				/*changes defending country to attacking country */
				document.getElementById(localStorage.defending_country_name).innerHTML = ("<p>" + a.defending_country_troops + "</p>");
				document.getElementById(localStorage.defending_country_name).className = document.getElementById(localStorage.attacking_country_name).className;
			}
			else {
				document.getElementById(localStorage.attacking_country_name).innerHTML = ("<p>" + String(a.attacking_country_troops) + "</p>");

				document.getElementById(localStorage.defending_country_name).innerHTML = ("<p>" + String(a.attacking_country_troops) + "</p>");

			}
		}
		else {
			alert(httpRequest.responseText);
		}
	}
}



window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}