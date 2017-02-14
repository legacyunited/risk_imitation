/* Checks which buttons are checked on the new_game form,, then displays the user and password fields required. */
function is_checked() {
	if (document.getElementById("check2").checked) {
		document.getElementsByClassName("three_form")[0].style.visibility = "hidden";
		document.getElementsByClassName("four_form")[0].style.visibility = "hidden";
		document.getElementsByClassName("three_form")[1].style.visibility = "hidden";
		document.getElementsByClassName("four_form")[1].style.visibility = "hidden";
	}
	if (document.getElementById("check3").checked) {
		document.getElementsByClassName("three_form")[0].style.visibility = "visible";
		document.getElementsByClassName("four_form")[0].style.visibility = "hidden";
		document.getElementsByClassName("three_form")[1].style.visibility = "visible";
		document.getElementsByClassName("four_form")[1].style.visibility = "hidden";
	}
	if (document.getElementById("check4").checked) {
		document.getElementsByClassName("three_form")[0].style.visibility = "visible";
		document.getElementsByClassName("four_form")[0].style.visibility = "visible";
		document.getElementsByClassName("three_form")[1].style.visibility = "visible";
		document.getElementsByClassName("four_form")[1].style.visibility = "visible";
	}
}

