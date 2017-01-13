from flask import Flask, request, render_template
from routing import routing

app = Flask(__name__)
app.debug = True


@app.route('/')
def home():
	logged_in = False

	if not logged_in:
		blank_game = Game()
		return render_template("index.html")
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

