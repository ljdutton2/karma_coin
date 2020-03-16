
score = 0

def multiple_choice():
    global score
    answer=input("1. THIS country was formerly known as Yugoslavia: a) Romania b) Russia c) The Netherlands d) Montenegro    ")
    if answer == ("d"):
        score += 1
        print(" :) ")
        print(f"Current Score: {score}")
    else:
        print(" :( the correct answer is d) Montenegro")
    
    

def multiple_choice_2():
    global score
    answer_2=input("2. Which is the only sea without any coasts? a) Adriatic Sea b) Red Sea c) Sargasso Sea d) Mediterranean sea      ")
    if answer_2 == ("c"):
        score += 1
        print(" :) ")
        print(f"Current Score: {score}")
    else:
        print(" :( the correct answer is c) The Sargasso Sea")
        print(f"Current Score: {score}")

def bool_question():
    global score 
    answer_3=input("3. Voted the World's 'most dissapointing landmark' Plymouth Rock is located in Maine. Enter 1 for True and 0 for False.   ")
    if answer_3 == "1":
        print(" :( the correct answer was False, Plymouth Rock is in Massachussets ")
        print(f"Current Score: {score}")
    elif answer_3 == "0":
        score += 1
        print(" :) ")
        print(f"Current Score: {score}")
    else:
        print("Please enter a proper response")

def bool_question_2():
    global score 
    answer_4=input("4. The 'A' in UAE stands for Arab. Please enter 1 for True and 0 for False.    ")
    if answer_4 == "1":
        score += 1
        print(" :) ")
        print(f"Current Score: {score}")
    else:
        print(" :( the correct answer was True")
        print(f"Current Score: {score}")

def num_question():
    global score
    answer_5=input("5. What is the furthest western country in Europe? Please enter your response here:    ")
    if answer_5 == ("portugal"):
        score += 1
        print(" :) ")
        print(f"Current Score: {score}")
    else:
        print(" :( the correct answer was portugal")
        print(f"Current Score: {score}")

def num_question2():
    global score
    answer_5=input("5. Which mountain range means 'House of Snow' in Sanskrit? Please enter your response here:   ")
    if answer_5 == ("himalaya"):
        score += 1
        print(" :) ")
        print(f"Current Score: {score}")
    
    else:
        print(" :( the correct answer was himalaya")
        print(f"TOTAL SCORE: {score}")

def again():
   repeat= input("Would you like to play again? y/n")
   if repeat == ('y'):
       run_quiz()
   else:
        print("Thank you for playing!!")




    




def run_quiz():
    
    multiple_choice()
    multiple_choice_2()
    bool_question()
    bool_question_2()
    num_question()
    num_question2()
    again()
    


run_quiz()




