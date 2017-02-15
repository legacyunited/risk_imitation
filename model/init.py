#Intializes database if it doesn't exist--only use during setup.

import sqlite3 as lite

con = lite.connect("data.db")

with con:
	con.execute("DROP TABLE IF EXISTS Users")
	con.execute("DROP TABLE IF EXISTS Games")
	con.execute("DROP TABLE IF EXISTS Game")
	con.execute("DROP TABLE IF EXISTS Countries")
	#Creates table Users contiaining all imporant information about each user
	con.execute("CREATE TABLE Users(id INTEGER PRIMARY KEY, name TEXT, password TEXT, games_won INTEGER)")
	#Creates table Games containing information about all the games that have been played are active
	con.execute("CREATE TABLE Games(game_id INTEGER PRIMARY KEY, player_1 Integer, player_2 Integer, player_3 Integer, player_4 Integer, won_by Integer)")
	#Creates table Game which contains all the relevant game data contained in each game referenced by Games table
	con.execute("CREATE TABLE Game(game_id Integer, turn Integer, risk_cards_claimed Integer, player_1_cards Integer, player_2_cards Integer, player_3_cards Integer, player_4_cards Integer)")
	#Creates table Countries which contains all the relevant info on each country in every game
	con.execute("CREATE TABLE Countries(game_id Integer, name TEXT, owned_by Integer, troops INTEGER)")

	#Dummie values
	con.execute("INSERT INTO Users(name, password) VALUES(?, ?)", ("Isaac", "Samuel"))
	con.execute("INSERT INTO Users(name, password) VALUES(?, ?)", ("Samuel", "Isaac"))

