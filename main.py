from flask import Flask, request, render_template
from routing import routing


app = Flask(__name__)
app.debug = True

@app.route('/')
def home():
	return render_template("index.html")
