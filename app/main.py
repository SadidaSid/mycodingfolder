# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import flask
from flask import render_template
import Jsonfunction as p
app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/')
def index():
    return render_template('index.html')

#@app.route('/', methods=['GET'])
#def home():
#    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"



@app.route('/api/jsondata', methods=['GET'])
def api_all():
    return p.myjsonfunction()

app.run()