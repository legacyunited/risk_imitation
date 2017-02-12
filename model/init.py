#Intializes database if it doesn't exist--only use during setup.

import sqlite3 as lite

con = lite.connect("data.db")

with con:
	con.execute("DROP TABLE IF EXISTS Users")
	con.execute("CREATE TABLE Users(id INTEGER PRIMARY KEY, name TEXT, password TEXT, current_game INTEGER)")

