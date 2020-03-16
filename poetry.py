import random
from random import randint

poem = "1 Oh sunflower! The queen of all flowers,\n 2 No other with you can compare, \n 3 The roadside and fields are made golden \n 4 Because of your bright presence there. \n 5 Above all the weeds that surround you \n 6 You raise to the sun your bright head, \n 7 Embroidering beautiful landscapes \n 8 Your absence would leave brown and dead."
# get poem string into seperate lines using split function

poem_spanish = "1 ¡Oh, girasol! La reina de todas las flores, \ n 2 Ninguna otra contigo puede compararse, \ n 3 La carretera y los campos están dorados \ n 4 Debido a tu brillante presencia allí. \ N 5 Por encima de todas las malezas que rodean tú \ n 6 Levantas al sol tu cabeza brillante, \ n 7 Bordando hermosos paisajes \ n 8 Tu ausencia dejaría marrón y muerto "

lines_list = poem.split('\n')

#prints the lines in random orders
def lines_random(lines_list):
    random.shuffle(lines_list)
    return lines_list

#prints the lines in descending order
def lines_backwards(lines_list):
#use loop to print items in a list
    line = lines_list.reverse()
    for line in lines_list:
        print(line) 

#function prints poem written in spanish
def translate_poem():
    print(poem_spanish)

#testing code
#random_poem = translate_poem()
#print(random_poem)




