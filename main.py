from flask import Flask, request, render_template
from random import random
from controller.game import Game


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

		return render_template("index.html", countries=result)

	else:
		game = Game(4, 1, "Fred").setup_game()

		return render_template("index.html", countries=game.countries)


@app.route('/new_game/', methods=["POST", "GET"])
def new_game():
	if request.method == "GET":
		return render_template("new_game.html")

	if request.method == "POST":
		if new_game_input_is_good(request.form):
			return home()
		else:
			return render_template("new_game.html", request.form)

