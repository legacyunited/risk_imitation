from flask import *
from random import random
from controller.game import Game
import sqlite3 as lite


app = Flask(__name__)
app.debug = True

@app.route('/')
def home():
	logged_in = True #True for debugging
	
	if not logged_in:
		result = []
		with open("countries.txt", "r") as file:
			for line in file:
				country = line.rstrip()
				result.append(Country(country, 0))

		return render_template("map.html", countries=result)

	else:
		game = Game(4, 1, "Fred")
		game.setup_game()

		return render_template("map.html", countries=game.countries)
		
def home(game):
	return render_template("map.html", countries=game.countries)


@app.route('/new_game/', methods=["POST", "GET"])
def new_game():
	if request.method == "GET":
		return render_template("new_game.html")

	'''if request.method == "POST":
		if new_game_input_is_good(request.form):
			game = [request.form["user_name"],request.form["user_password"],request.form["number_of_players"], request.form["number_of_user_players"], request.form["name_of_game_owner"]]
			game.setup_game()
			return home(game)
		else:
			return render_template("new_game.html", request.form)'''


@app.route('/log_in/', methods=["POST", "GET"])
def log_in():
	if request.method == "GET":
		return render_template("log_in.html")

	if request.method == "POST":
		found_combo = search_users(request.form["user_name"], request.form["user_password"])

		#If username/password combo found, pass onto main game game or create a new game
		if found_combo[0]:
			if bool(found_combo[1]):
				session["user"] = request.form["user_name"]
				session["game"] = found_combo[1]
				flash("found user and game")
				return home()
			else:
				session["user"] = request.form["user_name"]
				flash("found username/password, no game " + str(session["user"]))
				return redirect(url_for('new_game'))

		else:
			flash("Username/password not found.")
			return redirect(url_for('log_in'))



@app.route('/create_new_user/', methods=["POST"])
def create_new_user():
	if request.method == "POST":
		if request.form["user_password"] == request.form["user_password_confirm"]:
			if not search_users(request.form["user_name"],request.form["user_password"])[0]:
				con = lite.connect("./model/data.db")

				with con:
					con.row_factory = lite.Row
					cur = con.cursor()
					#If it didn't find a matching combo, passes values into the table
					cur.execute("INSERT INTO Users(name, password) VALUES(?, ?)", (request.form["user_name"], request.form["user_password"]))

				#Successfully inserted, go to new game page
				session["user"] = request.form["user_name"]
				flash("Username/password inserted into userbase. " + str(session["user"])
				return redirect(url_for('new_game'))

			else:
				flash("That username was found, please try something else.")
				return redirect(url_for('log_in'))
		else:
			flash("Passwords did not match.")
			return redirect(url_for('log_in'))




#searches database for users which are passed, returns tuple (if found username/password, current game if found), else returns false
def search_users(username, password):
	con = lite.connect("./model/data.db")

	with con:
		#Returns queries as a dictionary
		con.row_factory = lite.Row

		cur = con.cursor()
		#Finds username, if not exists, creates it
		query = cur.execute("SELECT name, password, current_game FROM Users")

		#checks all the users for a matching username/password combo
		for item in query:
			if (username == item["name"]) and (password == item["password"]):
				return(True, item['current_game'])

		#If none are found, return False
		return(False, False)

app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'