from flask import Flask, request, render_template

app = Flask(__name__)
app.debug = True

class Country:
	def __init__(self, country):
		self.country_name = country
		self.troops = 0


@app.route('/')
def home():
	logged_in = False
	
	if not logged_in:
		result = []
		with open("countries.txt", "r") as file:
			for line in file:
				country = line.rstrip()
				result.append(Country(country))

		return render_template("index.html", countries=result)

	else:
		return render_template("index.html", Game(User.name))


@app.route('/new_game/', methods=["POST", "GET"])
def new_game():
	if request.method == "GET":
		return render_template("new_game.html")

	if request.method == "POST":
		if new_game_input_is_good(request.form):
			return home()
		else:
			return render_template("new_game.html", request.form)

