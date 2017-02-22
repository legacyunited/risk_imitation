/* In RISK, you can only attack the countries
that are adjacent to the one you are attacking from.

As you can imagine, this was stupidly tedious. */

function adjacent_to(curr, attacking) {
	alert(curr);
	alert(attacking);
	if (curr == ("afganistan")) {
		if (
			attacking == ("iran") ||
			attacking == ("pakistan") ||
			attacking == ("turmenistan") ||
			attacking == ("uzbekistan")
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("bangladesh")) {
		if (
			attacking == ("burma") ||
			attacking == ("orissa") ||
			attacking == ("northeast_india")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("bhutan")) {
		if (
			attacking == ("tibet") ||
			attacking == ("northeast_india")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("burma")) {
		if (
			attacking == ("thailand") ||
			attacking == ("bangladesh") ||
			attacking == ("laos") ||
			attacking == ("south_china") ||
			attacking == ("northeast_india")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("cambodia")) {
		if (
			attacking == ("thailand") ||
			attacking == ("laos") ||
			attacking == ("vietnam")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("central_stans")) {
		if (
			attacking == ("turkey") ||
			attacking == ("iran")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("delhi")) {
		if (
			attacking == ("rajasthan") ||
			attacking == ("orissa")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("east_central_siberia")) {
		if (
			attacking == ("mongolia") ||
			attacking == ("east_siberia") ||
			attacking == ("northeast_china")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("east_indonesia")) {
		if (
			attacking == ("west_indonesia")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("east_siberia")) {
		if (
			attacking == ("east_central_siberia") ||
			attacking == ("northeast_china") ||
			attacking == ("best_korea") ||
			attacking == ("north_japan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("hong_kong")) {
		if (
			attacking == ("south_china") ||
			attacking == ("taiwan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("iran")) {
		if (
			attacking == ("iraq") ||
			attacking == ("central_stans") ||
			attacking == ("afganistan") ||
			attacking == ("pakistan") ||
			attacking == ("turmenistan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("iraq")) {
		if (
			attacking == ("saudi_arabia") ||
			attacking == ("iran") ||
			attacking == ("syria") ||
			attacking == ("jordan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("israel_palestine")) {
		if (
			attacking == ("jordan") ||
			attacking == ("syria")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("jammu_kashmir")) {
		if (
			attacking == ("tibet") ||
			attacking == ("rajasthan") ||
			attacking == ("pakistan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("jordan")) {
		if (
			attacking == ("israel_palestine") ||
			attacking == ("syria") ||
			attacking == ("iraq")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("kazakhstan")) {
		if (
			attacking == ("turmenistan") ||
			attacking == ("uzbekistan") ||
			attacking == ("afganistan") ||
			attacking == ("west_siberia") ||
			attacking == ("northwest_china") ||
			attacking == ("west_central_siberia")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("kuwait")) {
		if (
			attacking == ("saudi_arabia") ||
			attacking == ("uae")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("laos")) {
		if (
			attacking == ("burma") ||
			attacking == ("thailand") ||
			attacking == ("cambodia") ||
			attacking == ("south_china") ||
			attacking == ("vietnam")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("mainland_japan")) {
		if (
			attacking == ("north_japan") ||
			attacking == ("okinawa")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("malysia")) {
		if (
			attacking == ("west_indonesia") ||
			attacking == ("philippines") ||
			attacking == ("thailand")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("mongolia")) {
		if (
			attacking == ("northwest_china") ||
			attacking == ("northeast_china") ||
			attacking == ("kazakhstan") ||
			attacking == ("west_central_siberia") ||
			attacking == ("east_central_siberia")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("mumbai")) {
		if (
			attacking == ("south_india") ||
			attacking == ("rajasthan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("nepal")) {
		if (
			attacking == ("rajasthan") ||
			attacking == ("orissa") ||
			attacking == ("northeast_india") ||
			attacking == ("tibet")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr == ("north_china")) {
		if (
			attacking == ("tibet") ||
			attacking == ("northwest_china") ||
			attacking == ("south_china") ||
			attacking == ("northeast_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("north_japan")) {
		if (
			attacking == ("mainland_japan") ||
			attacking == ("east_siberia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("northeast_china")){
		if (
			attacking == ("best_korea") ||
			attacking == ("east_siberia") ||
			attacking == ("east_central_siberia") ||
			attacking == ("mongolia") ||
			attacking == ("northwest_china") 
			){
			return(true);
			}
		else {
			return(false); 
		}
	}

	else if (curr == ("northeast_india")) {
		if (
			attacking == ("orissa") ||
			attacking == ("nepal") ||
			attacking == ("bangladesh") ||
			attacking == ("bhutan") ||
			attacking == ("burma") ||
			attacking == ("tibet") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("northwest_china")) {
		if (
			attacking == ("tibet") ||
			attacking == ("mongolia") ||
			attacking == ("uzbekistan") ||
			attacking == ("kazakhstan") ||
			attacking == ("northeast_china") ||
			attacking == ("north_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("best_korea")) {
		if (
			attacking == ("northeast_china") ||
			attacking == ("east_siberia") ||
			attacking == ("south_korea") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("okinawa")) {
		if (
			attacking == ("orissa") ||
			attacking == ("nepal") ||
			attacking == ("bangladesh") ||
			attacking == ("bhutan") ||
			attacking == ("burma") ||
			attacking == ("tibet") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("oman")) {
		if (
			attacking == ("yemen") ||
			attacking == ("saudi_arabia") ||
			attacking == ("uae") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("orissa")) {
		if (
			attacking == ("south_india") ||
			attacking == ("rajasthan") ||
			attacking == ("delhi") ||
			attacking == ("nepal") ||
			attacking == ("bangladesh") ||
			attacking == ("northeast_india") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("pakistan")) {
		if (
			attacking == ("rajasthan") ||
			attacking == ("afganistan") ||
			attacking == ("iran") ||
			attacking == ("jammu_kashmir") ||
			attacking == ("tibet") ||
			attacking == ("uzbekistan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("philippines")) {
		if (
			attacking == ("malysia") ||
			attacking == ("taiwan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("rajasthan")) {
		if (
			attacking == ("pakistan") ||
			attacking == ("nepal") ||
			attacking == ("jammu_kashmir") ||
			attacking == ("delhi") ||
			attacking == ("orissa") ||
			attacking == ("south_india") ||
			attacking == ("mumbai") ||
			attacking == ("tibet") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("saudi_arabia")) {
		if (
			attacking == ("uae") ||
			attacking == ("kuwait") ||
			attacking == ("yemen") ||
			attacking == ("oman") ||
			attacking == ("iraq") ||
			attacking == ("jordan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("south_china")) {
		if (
			attacking == ("burma") ||
			attacking == ("laos") ||
			attacking == ("vietnam") ||
			attacking == ("hong_kong") ||
			attacking == ("north_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("south_india")) {
		if (
			attacking == ("rajasthan") ||
			attacking == ("orissa") ||
			attacking == ("mumbai") ||
			attacking == ("delhi") ||
			attacking == ("tamil_nadu") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("south_korea")) {
		if (
			attacking == ("best_korea") ||
			attacking == ("okinawa") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("sri_lanka")) {
		if (
			attacking == ("tamil_nadu") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("syria")) {
		if (
			attacking == ("israel_palestine") ||
			attacking == ("iraq") ||
			attacking == ("jordan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("taiwan")) {
		if (
			attacking == ("hong_kong") ||
			attacking == ("philippines") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("tamil_nadu")) {
		if (
			attacking == ("south_india") ||
			attacking == ("sri_lanka") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("thailand")) {
		if (
			attacking == ("cambodia") ||
			attacking == ("laos") ||
			attacking == ("malysia") ||
			attacking == ("burma") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("tibet")) {
		if (
			attacking == ("jammu_kashmir") ||
			attacking == ("pakistan") ||
			attacking == ("uzbekistan") ||
			attacking == ("northwest_china") ||
			attacking == ("north_china") ||
			attacking == ("south_china") ||
			attacking == ("northeast_india") ||
			attacking == ("nepal") ||
			attacking == ("rajasthan") ||
			attacking == ("bhutan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("turkey")) {
		if (
			attacking == ("central_stans") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("turmenistan")) {
		if (
			attacking == ("iraq") ||
			attacking == ("afganistan") ||
			attacking == ("uzbekistan") ||
			attacking == ("kazakhstan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("uae")) {
		if (
			attacking == ("saudi_arabia") ||
			attacking == ("kuwait") ||
			attacking == ("oman") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("uzbekistan")) {
		if (
			attacking == ("turmenistan") ||
			attacking == ("afganistan") ||
			attacking == ("pakistan") ||
			attacking == ("tibet") ||
			attacking == ("northwest_china") ||
			attacking == ("kazakhstan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("vietnam")) {
		if (
			attacking == ("cambodia") ||
			attacking == ("laos") ||
			attacking == ("south_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("west_central_siberia")) {
		if (
			attacking == ("west_siberia") ||
			attacking == ("kazakhstan") ||
			attacking == ("mongolia") ||
			attacking == ("east_central_siberia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("west_indonesia")) {
		if (
			attacking == ("malysia") ||
			attacking == ("east_indonesia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("west_siberia")) {
		if (
			attacking == ("kazakhstan") ||
			attacking == ("west_central_siberia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr == ("yemen")) {
		if (
			attacking == ("saudi_arabia") ||
			attacking == ("oman") 
			){
			return(true);
			}
		else{
			return(false);
		}
	}
}