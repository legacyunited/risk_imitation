import Random
class Game:
	def __init__(self, number_of_players, login_name):
		self.won = ""
		self.number_of_players = number_of_players
		self.risk_cards_claimed = 0
		self.login_name = login_name

	def roll_die()
		return Random.randint(1, 6)