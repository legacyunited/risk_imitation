function adjacent_to(curr, attacking) {
	if (curr.equals("afganistan")) {
		if (
			attacking.equals("iran") ||
			attacking.equals("pakistan") ||
			attacking.equals("turmenistan") ||
			attacking.equals("uzbekistan")
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("bangladesh")) {
		if (
			attacking.equals("burma") ||
			attacking.equals("orissa") ||
			attacking.equals("northeast_india")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("bhutan")) {
		if (
			attacking.equals("tibet") ||
			attacking.equals("northeast_india")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("burma")) {
		if (
			attacking.equals("thailand") ||
			attacking.equals("bangladesh") ||
			attacking.equals("laos") ||
			attacking.equals("south_china") ||
			attacking.equals("northeast_india")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("cambodia")) {
		if (
			attacking.equals("thailand") ||
			attacking.equals("laos") ||
			attacking.equals("vietnam")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("central_stans")) {
		if (
			attacking.equals("turkey") ||
			attacking.equals("iran")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("delhi")) {
		if (
			attacking.equals("rajasthan") ||
			attacking.equals("orissa") ||
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("east_central_siberia")) {
		if (
			attacking.equals("mongolia") ||
			attacking.equals("east_siberia") ||
			attacking.equals("northeast_china")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("east_indonesia")) {
		if (
			attacking.equals("west_indonesia")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("east_siberia")) {
		if (
			attacking.equals("east_central_siberia") ||
			attacking.equals("northeast_china") ||
			attacking.equals("best_korea") ||
			attacking.equals("north_japan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("hong_kong")) {
		if (
			attacking.equals("south_china") ||
			attacking.equals("taiwan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("iran")) {
		if (
			attacking.equals("iraq") ||
			attacking.equals("central_stans") ||
			attacking.equals("afganistan") ||
			attacking.equals("pakistan") ||
			attacking.equals("turmenistan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("iraq")) {
		if (
			attacking.equals("saudi_arabia") ||
			attacking.equals("iran") ||
			attacking.equals("syria") ||
			attacking.equals("jordan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("israel_palestine")) {
		if (
			attacking.equals("jordan") ||
			attacking.equals("syria")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("jammu_kashmir")) {
		if (
			attacking.equals("tibet") ||
			attacking.equals("rajasthan") ||
			attacking.equals("pakistan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("jordan")) {
		if (
			attacking.equals("israel_palestine") ||
			attacking.equals("syria") ||
			attacking.equals("iraq")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("kazakhstan")) {
		if (
			attacking.equals("turmenistan") ||
			attacking.equals("uzbekistan") ||
			attacking.equals("afganistan") ||
			attacking.equals("west_siberia") ||
			attacking.equals("northwest_china") ||
			attacking.equals("west_central_siberia")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("kuwait")) {
		if (
			attacking.equals("saudi_arabia") ||
			attacking.equals("uae")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("laos")) {
		if (
			attacking.equals("burma") ||
			attacking.equals("thailand") ||
			attacking.equals("cambodia") ||
			attacking.equals("south_china") ||
			attacking.equals("vietnam")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("mainland_japan")) {
		if (
			attacking.equals("north_japan") ||
			attacking.equals("okinawa")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("malysia")) {
		if (
			attacking.equals("west_indonesia") ||
			attacking.equals("philippines") ||
			attacking.equals("thailand")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("mongolia")) {
		if (
			attacking.equals("northwest_china") ||
			attacking.equals("northeast_china") ||
			attacking.equals("kazakhstan") ||
			attacking.equals("west_central_siberia") ||
			attacking.equals("east_central_siberia")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("mumbai")) {
		if (
			attacking.equals("south_india") ||
			attacking.equals("rajasthan")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("nepal")) {
		if (
			attacking.equals("rajasthan") ||
			attacking.equals("orissa") ||
			attacking.equals("northeast_india") ||
			attacking.equals("tibet")
			){return(true);}
		else{
			return(false); 
		}
	}

	else if (curr.equals("north_china")) {
		if (
			attacking.equals("tibet") ||
			attacking.equals("northwest_china") ||
			attacking.equals("south_china") ||
			attacking.equals("northeast_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("north_japan")) {
		if (
			attacking.equals("mainland_japan") ||
			attacking.equals("east_siberia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("northeast_china")){
		if (
			attacking.equals("best_korea") ||
			attacking.equals("east_siberia") ||
			attacking.equals("east_central_siberia") ||
			attacking.equals("mongolia") ||
			attacking.equals("northwest_china") 
			){
			return(true);
			}
		else {
			return(false); 
		}
	}

	else if (curr.equals("northeast_india")) {
		if (
			attacking.equals("orissa") ||
			attacking.equals("nepal") ||
			attacking.equals("bangladesh") ||
			attacking.equals("bhutan") ||
			attacking.equals("burma") ||
			attacking.equals("tibet") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("northwest_china")) {
		if (
			attacking.equals("tibet") ||
			attacking.equals("mongolia") ||
			attacking.equals("uzbekistan") ||
			attacking.equals("kazakhstan") ||
			attacking.equals("northeast_china") ||
			attacking.equals("north_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("best_korea")) {
		if (
			attacking.equals("northeast_china") ||
			attacking.equals("east_siberia") ||
			attacking.equals("south_korea") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("okinawa")) {
		if (
			attacking.equals("orissa") ||
			attacking.equals("nepal") ||
			attacking.equals("bangladesh") ||
			attacking.equals("bhutan") ||
			attacking.equals("burma") ||
			attacking.equals("tibet") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("oman")) {
		if (
			attacking.equals("yemen") ||
			attacking.equals("saudi_arabia") ||
			attacking.equals("uae") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("orissa")) {
		if (
			attacking.equals("south_india") ||
			attacking.equals("rajasthan") ||
			attacking.equals("delhi") ||
			attacking.equals("nepal") ||
			attacking.equals("bangladesh") ||
			attacking.equals("northeast_india") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("pakistan")) {
		if (
			attacking.equals("rajasthan") ||
			attacking.equals("afganistan") ||
			attacking.equals("iran") ||
			attacking.equals("jammu_kashmir") ||
			attacking.equals("tibet") ||
			attacking.equals("uzbekistan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("philippines")) {
		if (
			attacking.equals("malysia") ||
			attacking.equals("taiwan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("rajasthan")) {
		if (
			attacking.equals("pakistan") ||
			attacking.equals("nepal") ||
			attacking.equals("jammu_kashmir") ||
			attacking.equals("delhi") ||
			attacking.equals("orissa") ||
			attacking.equals("south_india") ||
			attacking.equals("mumbai") ||
			attacking.equals("tibet") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("saudi_arabia")) {
		if (
			attacking.equals("uae") ||
			attacking.equals("kuwait") ||
			attacking.equals("yemen") ||
			attacking.equals("oman") ||
			attacking.equals("iraq") ||
			attacking.equals("jordan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("south_china")) {
		if (
			attacking.equals("burma") ||
			attacking.equals("laos") ||
			attacking.equals("vietnam") ||
			attacking.equals("hong_kong") ||
			attacking.equals("north_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("south_india")) {
		if (
			attacking.equals("rajasthan") ||
			attacking.equals("orissa") ||
			attacking.equals("mumbai") ||
			attacking.equals("delhi") ||
			attacking.equals("tamil_nadu") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("south_korea")) {
		if (
			attacking.equals("best_korea") ||
			attacking.equals("okinawa") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("sri_lanka")) {
		if (
			attacking.equals("tamil_nadu") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("syria")) {
		if (
			attacking.equals("israel_palestine") ||
			attacking.equals("iraq") ||
			attacking.equals("jordan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("taiwan")) {
		if (
			attacking.equals("hong_kong") ||
			attacking.equals("philippines") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("tamil_nadu")) {
		if (
			attacking.equals("south_india") ||
			attacking.equals("sri_lanka") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("thailand")) {
		if (
			attacking.equals("cambodia") ||
			attacking.equals("laos") ||
			attacking.equals("malysia") ||
			attacking.equals("burma") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("tibet")) {
		if (
			attacking.equals("jammu_kashmir") ||
			attacking.equals("pakistan") ||
			attacking.equals("uzbekistan") ||
			attacking.equals("northwest_china") ||
			attacking.equals("north_china") ||
			attacking.equals("south_china") ||
			attacking.equals("northeast_india") ||
			attacking.equals("nepal") ||
			attacking.equals("rajasthan") ||
			attacking.equals("bhutan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("turkey")) {
		if (
			attacking.equals("central_stans") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("turmenistan")) {
		if (
			attacking.equals("iraq") ||
			attacking.equals("afganistan") ||
			attacking.equals("uzbekistan") ||
			attacking.equals("kazakhstan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("uae")) {
		if (
			attacking.equals("saudi_arabia") ||
			attacking.equals("kuwait") ||
			attacking.equals("oman") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("uzbekistan")) {
		if (
			attacking.equals("turmenistan") ||
			attacking.equals("afganistan") ||
			attacking.equals("pakistan") ||
			attacking.equals("tibet") ||
			attacking.equals("northwest_china") ||
			attacking.equals("kazakhstan") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("vietnam")) {
		if (
			attacking.equals("cambodia") ||
			attacking.equals("laos") ||
			attacking.equals("south_china") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("west_central_siberia")) {
		if (
			attacking.equals("west_siberia") ||
			attacking.equals("kazakhstan") ||
			attacking.equals("mongolia") ||
			attacking.equals("east_central_siberia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("west_indonesia")) {
		if (
			attacking.equals("malysia") ||
			attacking.equals("east_indonesia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("west_siberia")) {
		if (
			attacking.equals("kazakhstan") ||
			attacking.equals("west_central_siberia") 
			){
			return(true);
			}
		else{
			return(false); 
		}
	}

	else if (curr.equals("yemen")) {
		if (
			attacking.equals("saudi_arabia") ||
			attacking.equals("oman") 
			){
			return(true);
			}
		else{
			return(false);
		}
	}
}