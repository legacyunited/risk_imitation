function is_checked() {
	if (document.getElementById("check2").checked) {
		document.getElementById("three_form").style.visibility = "hidden";
		document.getElementById("four_form").style.visibility = "hidden";
	}
	if (document.getElementById("check3").checked) {
		document.getElementById("three_form").style.visibility = "visible";
		document.getElementById("four_form").style.visibility = "hidden";
	}
	if (document.getElementById("check4").checked) {
		document.getElementById("three_form").style.visibility = "visible";
		document.getElementById("four_form").style.visibility = "visible";
	}
}


window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}