class Player:

	def __init__(is_user_player, player_num, countries_owned):
		#True if player is a user instead of an AI
		self.is_user_player = is_user_player

		#The players identifier AND the order they play in
		self.player_num = player_num
		
		self.RISK_cards = 0
		self.number_of_territories_owned

	def check_if_play_owns_area(area):
		player_owns_country = []
		for country in area:
			if country.owned_by == self.player_num:
				player_owns_country.append(True)
			else:
				player_owns_country.append(False)

		return all(player_owns_country)

	def count_troops_to_distribute():
		troops = floor(self.number_of_territories_owned/3.0)

		if RISK_cards >= 3:
			troops += Game.give_risk_troops()
			RISK_card -= 3


		for area in country.AREAS:
			if check_if_player_owns_area(country.AREAS[area]):
				troops += country.AREA_VALUES[area]

		return troops

