from flask import request, render_template

def routing(app):
	@app.route('/')
	def home():
		return render_template("index.html")