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
			#Returns queries as a dictionary
			con.row_factory = lite.Row

			con.execute("INSERT INTO Games (player1, player2, player3, player4, won_by) VALUES (?, ?, ?, ?, ?)", user[0], user[1], user[2], user[3], self.won)
			self.game_id = con.lastrowid

			con.execute("INSERT INTO Game (game_id, turn, risk_cards_claimed, player_1_cards, player_2_cards, player_3_cards, player_4_cards) VALUES (?, ?, ?, ?, ?, ?, ?)", game_id, self.current_player, self.risk_cards_claimed, self.players[0].RISK_cards, self.players[1].RISK_cards, self.players[2].RISK_cards, self.players[3].RISK_cards)
			
			for each in self.countries:
				con.execute("INSERT INTO Countries (game_id, name, owned_by, troops) VALUES (?, ?, ?, ?)", game_id, each.name, each.owned_by, each.troops)



	#Used at the end of every turn to save the game
	def save_state_to_database(self):
		con = lite.connect("./model/data.db")

		with con:
			#Returns queries as a dictionary
			con.row_factory = lite.Row

			con.execute("UPDATE Game SET turn = ?, risk_cards_claimed = ?, player_1_cards = ?, player_2_cards = ?, player_3_cards = ?, player_4_cards = ? WHERE game_id = ? ", self.current_player, self.risk_cards_claimed, self.players[0].RISK_cards, self.players[1].RISK_cards, self.players[2].RISK_cards, self.players[3].RISK_cards, game_id)
			
			for each in self.countries:
				con.execute("UPDATE Countries SET name = ?, owned_by = ?, troops = ? WHERE game_id = ?", each.name, each.owned_by, each.troops, game_id)



