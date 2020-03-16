
from random import choice
from flask import Flask
from flask import render_templates


app = Flask(__name__)


from random import choice

horoscopes =['have a large sum of money coming your way', 'should be specifically careful crossing the street today', ' should expect good news at 12:03 pm']



@app.route('/horoscope')
def get_horoscope():
    horoscope = choice(horoscopes)
    return f'Dear Sagitarrius, You: {horoscope}'

print(get_horoscope()



if __name__ == '__main__':
    app.run(debug=True)
