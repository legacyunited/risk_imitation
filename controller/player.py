import inflect

class Player:

	def __init__(self, username, num):

		if username is None:
			self.name=None
			self.player_num=None
			self.RISK_cards = 0
			
		else:
			self.name = username
			self.RISK_cards = 0

			#Converts player num to words (just a '1', for example, is invalid css)
			inflect_engine = inflect.engine()
			self.id = inflect_engine.number_to_words(num)



	def check_if_play_owns_area(self, area):
		player_owns_country = []
		for country in area:
			if country.owned_by == self.player_num:
				player_owns_country.append(True)
			else:
				player_owns_country.append(False)

		return all(player_owns_country)

	def count_troops_to_distribute(self):
		troops = floor(self.number_of_territories_owned/3.0)

		if RISK_cards >= 3:
			troops += Game.give_risk_troops()
			RISK_card -= 3


		for area in country.AREAS:
			if check_if_player_owns_area(country.AREAS[area]):
				troops += country.AREA_VALUES[area]

		return troops

