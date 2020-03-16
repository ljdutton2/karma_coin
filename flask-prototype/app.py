from flask import flask
from flask import markup
from flask import render_template
from flast import request
from flask_squalchemy import flask_squalchemy

app = Flask(__name__)

@app.route('/horoscope')
def index():
    return "render_template('index.html')"
@app.route('/submit',methods=['POST'])
def submit():
    if request.method== 'POST' :
        verb= request.form['verb']
        print(verb)
        return remder_template('index.html')
    if __name == '__main__':
        app.debug = True
        app.run()
