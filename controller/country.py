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

	def __init__(self, country, player_number_that_owns_country):
		self.name = country
		self.troops = 0
		self.owned_by = player_number_that_owns_country


	def attack(self, defending_country):
		def roll(number_of_rolls):
			highest = []
			for roll in range(number_of_rolls):
					value = Game.roll_die()

					highest.append(defensive_value)

			while len(highest) <= 3:
				highest.append(0)

			return sorted(highest)

		def list_of_rules_from_high_to_low(type_of_attack):
			if type_of_attack=="defensive":
				if defending_country.troops >= 3:
					roll(3)
				elif defending_country.troops == 2:
					roll(2)
				else:
					roll(1)

			if type_of_attack=="offensive":
				if defending_country.troops >= 4:
					roll(3)
				elif defending_country.troops == 3:
					roll(2)
				elif defending_country.troops == 2:
					roll(1)


		while self.troops > 1 and defending_country.troops > 0:
			defense = list_of_rolls_from_high_to_low("defensive")
			offense = list_of_rolls_from_high_to_low("offensive")


			for each in range(3):
				if offense > defense:
					defending_country.troops -= 1
				elif defense > offense:
					self.troops -= 1

		if defending_country.troops == 0:
			defending_country.owned_by(self.owned_by)
			Game.successful_attack = True
			for troop in offense:
				if troop != 0:
					self.troops -= 1
					defending_country += 1