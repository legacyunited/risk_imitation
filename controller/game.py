import random
from controller.player import Player
from controller.country import Country
import sqlite3 as lite


class Game:

	def __init__(self, users):
		#won variable is set to a user only when game is finished
		self.won = ""

		#players variables contains all the players in the game, but also holds null players if not all four are playing.
		#sorry, I already modelled the database that way :P
		self.players = []
		for each in users:
			self.players.append(Player(each))

		#number of actually playing players
		self.number_of_players = 0
		for each in self.players:
			if each is not None:
				self.number_of_players += 1


		#risk_cards_claimed variable helps us to determine the number of RISK troops to distribute in give_risk_troops
		self.risk_cards_claimed = 0


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
		self.countries = []
		with open("countries.txt", "r") as file:
			for line in file:
				country = line.rstrip()
				self.countries.append(Country(country))


		#assigns each player to a random country
		#kind of twisty logic. Change to circular linked list?
		current_player = 0
		for country in self.countries:
			if current_player == (self.number_of_players - 1):
				current_player = 0
			country.owned_by = current_player

			current_player += 1

		self.current_player = random.randint(0, self.number_of_players)


		#Inserts everything into the database for the first time.
		con = lite.connect("./model/data.db")

		with con:
			c = con.cursor()

			c.execute("INSERT INTO Games (player_1, player_2, player_3, player_4, won_by) VALUES (?, ?, ?, ?, ?)", (self.players[0].name, self.players[1].name, self.players[2].name, self.players[3].name, self.won))
			self.game_id = c.lastrowid

			c.execute("INSERT INTO Game (game_id, turn, risk_cards_claimed, player_1_cards, player_2_cards, player_3_cards, player_4_cards) VALUES (?, ?, ?, ?, ?, ?, ?)", (self.game_id, self.current_player, self.risk_cards_claimed, self.players[0].RISK_cards, self.players[1].RISK_cards, self.players[2].RISK_cards, self.players[3].RISK_cards))
			
			for each in self.countries:
				c.execute("INSERT INTO Countries (game_id, name, owned_by, troops) VALUES (?, ?, ?, ?)", (self.game_id, each.name, each.owned_by, each.troops))



	#Used at the end of every turn to save the game
	def save_state_to_database(self):
		con = lite.connect("./model/data.db")

		with con:
			c = con.cursor()

			c.execute("UPDATE Game SET turn = ?, risk_cards_claimed = ?, player_1_cards = ?, player_2_cards = ?, player_3_cards = ?, player_4_cards = ? WHERE game_id = ? ", (self.current_player, self.risk_cards_claimed, self.players[0].RISK_cards, self.players[1].RISK_cards, self.players[2].RISK_cards, self.players[3].RISK_cards, self.game_id))
			
			for each in self.countries:
				c.execute("UPDATE Countries SET name = ?, owned_by = ?, troops = ? WHERE game_id = ?", (each.name, each.owned_by, each.troops, self.game_id))



