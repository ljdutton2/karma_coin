from flask import Flask


app = Flask(__name__)


from random import choice

horoscopes =['have a large sum of money coming your way', 'should be specifically careful crossing the street today', ' should expect good news at 12:03 pm']

def get_horoscope():
    horoscope = choice(horoscopes)
    return f'Dear Sagitarrius, You: {horoscope}'

    @app.route('/horoscope',methods=['POST'])

print(get_horoscope())

if __name == '__main__':
    app.debug = True
    app.run()
