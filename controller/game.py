import random
from controller.player import Player
from controller.country import Country


class Game:
	def __init__(self, number_of_players, number_of_user_players, login_name):
		self.won = ""
		self.number_of_players = number_of_players
		self.risk_cards_claimed = 0
		self.login_name = login_name

		self.players = []
		for each in range(number_of_players):
			if number_of_user_players > 0:
				self.players.append(Player(True, each))
				number_of_user_players -= 1
			else:
				self.players.append(Player(False, each))

	def roll_die():
		return random.randint(1, 6)

	def give_risk_troops(self):
		#Gives bonus troops based on number of risk cards earned
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

	def setup_game(self):
		#gets a list of all countries
		all_countries = []
		with open("countries.txt", "r") as file:
			for line in file:
				country = line.rstrip()
				all_countries.append(Country(country))


		#assigns each player to a random country
		self.countries = all_countries
		current_player = 0
		for country in self.countries:
			if current_player == (self.number_of_players - 1):
				current_player = 0
			country.owned_by = current_player

			current_player += 1

		self.current_player = random.randint(0, self.number_of_players)
