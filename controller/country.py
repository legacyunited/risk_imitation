class Country:

	AREAS = {
		"east asia": ["mainland_japan", "okinawa", "best_korea", "south_korea", "north_china", "northeast_china", "south_china", "hong_kong", "taiwan"],
		"southeast asia": ["cambodia", "thailand", "burma", "laos", "vietnam", "philippines", "malaysia", "west_indonesia", "east_indonesia"],
		"south asia": ["northeast_india", "bangladesh", "bhutan", "nepal", "tibet", "delhi", "orissa", "rajasthan", "mumbai", "south_india", "tamil_nadu", "sri_lanka", "pakistan"],
		"middle east": ["afghanistan", "iran", "iraq", "central_stans", "turkey", "syria", "israel_palestine", "jordan", "saudi_arabia", "oman", "kuwait", "uae", "yeman"],
		"central asia": ["turmenistan", "uzbekistan", "kazakhstan", "northwest", "west_siberia", "west_central_siberia", "east_central_siberia", "east_siberia"]
	}

	AREA_VALUES = {
		"east asia": 7,
		"southeast asia": 4,
		"south asia": 5,
		"middle east": 4,
		"central asia": 6
	}


	def __init__(self, country, owned_by, troops):
		self.name = country
		self.troops = troops
		self.owned_by = owned_by
