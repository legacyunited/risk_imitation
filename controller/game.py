import Random
class Game:
	def __init__(self, number_of_players, login_name):
		self.won = ""
		self.number_of_players = number_of_players
		self.risk_cards_claimed = 0
		self.login_name = login_name

	def roll_die()
		return Random.randint(1, 6)

	def give_risk_troops();
		if self.risk_cards_claimed == 0:
			self.risk_cards_claimed += 1
			return 4
		if self.risk_cards_claimed == 1:
			self.risk_cards_claimed += 1
			return 6
		if self.risk_cards_claimed == 2:
			self.risk_cards_claimed += 1
			return 8
		if self.risk_cards_claimed > 2:
			self.risk_cards_claimed += 1
			return (self.risk_cards_claimed-1) * 5