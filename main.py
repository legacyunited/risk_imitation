from flask import *
from random import random
from controller.game import Game
from controller.country import Country
import sqlite3 as lite
import inflect


app = Flask(__name__)
app.debug = True

@app.route('/')
@app.route('/index/')
def home():
	if session["game_id"]:
		game_info = retrieve_game(int(session["game_id"]))
		
		return render_template("map.html", countries=game_info[2], turn=str(game_info[1]["turn"]))

	else:
		return render_template("map.html")
		

@app.route('/new_game/', methods=["POST", "GET"])
def new_game():
	if request.method == "GET":
		return render_template("new_game.html")

	if request.method == "POST":
		users = [session["user"]]
		i = 1;
		num = int(request.form["num"])

		while (i < num):
			user = "user" + str(i)
			print(user)
			if (request.form[user] != session["user"]):
				if (search_users(request.form[user], request.form[(user+"_password")])):
					users.append(request.form[user])
				else:
					flash("Username and password combo not found!")
					return redirect(url_for('new_game'))
			else:
				flash("You cannot play against yourself!")
				return redirect(url_for('new_game'))
			i += 1

		#if less than four players are playing, add some None type players to the users array
		while len(users) < 4:
			users.append(None)

		#Setup game
		game = Game(users)
		game.setup_game()
		session["game_id"] = game.game_id

		return redirect("/")


@app.route('/log_in/', methods=["POST", "GET"])
def log_in():
	if request.method == "GET":
		return render_template("log_in.html")

	if request.method == "POST":
		found_combo = search_users(request.form["user_name"], request.form["user_password"])

		#If username/password combo found, pass onto main game game or create a new game
		if found_combo:
			session["user"] = request.form["user_name"]
			flash("found username/password, no game " + str(session["user"]))
			return redirect(url_for('new_game'))

		else:
			flash("Username/password not found.")
			return redirect(url_for('log_in'))



@app.route('/create_new_user/', methods=["POST"])
def create_new_user():
	if not find_if_username_taken(request.form["user_password"]):
		if request.form["user_password"] == request.form["user_password_confirm"]:
			if not search_users(request.form["user_name"],request.form["user_password"]):
				con = lite.connect("./model/data.db")

				with con:
					con.row_factory = lite.Row
					cur = con.cursor()
					#If it didn't find a matching combo, passes values into the table
					cur.execute("INSERT INTO Users(name, password) VALUES(?, ?)", (request.form["user_name"], request.form["user_password"]))

				#Successfully inserted, go to new game page
				session["user"] = request.form["user_name"]
				flash("Username/password inserted into userbase. " + str(session["user"]))
				return redirect(url_for('new_game'))

			else:
				flash("That username was found, please try something else.")
				return redirect(url_for('log_in'))
		else:
			flash("Passwords did not match.")
			return redirect(url_for('log_in'))
	else: 
		flash("Sorry, username already exists.")
		return redirect(url_for('log_in'))

@app.route('/log_out/', methods=["GET"])
def log_out():
	if session["user"]:
		session.pop("user")
		if "/new_game/" in request.referrer:
			return redirect("/")
		else:
			return redirect(request.referrer)
	else:
		return redirect("/")




#searches database for users which are passed, returns tuple (if found username/password, current game if found), else returns false
def search_users(username, password):
	con = lite.connect("./model/data.db")

	with con:
		#Returns queries as a dictionary
		con.row_factory = lite.Row

		cur = con.cursor()
		#Finds all usernames and passwords
		query = cur.execute("SELECT name, password FROM Users")

		#checks all the users for a matching username/password combo
		for item in query:
			if (username == item["name"]) and (password == item["password"]):
				return True

		#If none are found, return False
		return False


def find_if_username_taken(username):
	con = lite.connect("./model/data.db")

	with con:
		#Returns queries as a dictionary
		con.row_factory = lite.Row

		cur = con.cursor()
		#Finds all usernames
		query = cur.execute("SELECT name FROM Users")

		#checks all the users for a matching username
		for item in query:
			if (username == item["name"]):
				return True

		#If none are found, return False
		return False


def retrieve_game(game_id):
	con = lite.connect("./model/data.db")

	with con:
		cur = con.cursor()

		info = con.execute("SELECT * FROM Game WHERE game_id = ?", (game_id,))
		info = info.fetchall()
		players = con.execute("SELECT * FROM Games WHERE game_id = ?", (game_id,))
		players = players.fetchall()
		countries = con.execute("SELECT * FROM Countries WHERE game_id = ?", (game_id,))
		countries = countries.fetchall()

	game = {}
	games = []
	games.append(players[0][1])
	games.append(players[0][2])
	games.append(players[0][3])
	games.append(players[0][4])
	games.append(players[0][5])

	engine = inflect.engine()

	game["turn"] = engine.number_to_words(int(info[0][1]))
	game["risk_cards_claimed"] = info[0][2]
	game["player_1_cards"] = info[0][3]
	game["player_2_cards"] = info[0][4]
	game["player_3_cards"] = info[0][5]
	game["player_4_cards"] = info[0][6]

	country_container = []
	for country in countries:
		country_container.append(Country(country[1], country[2], country[3]))

	return [games, game, country_container]

app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'