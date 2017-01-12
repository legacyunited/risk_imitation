from flask import Flask, request, render_template
from routing import routing


app = Flask(__name__, template_folder="templates/")
routing(app)
