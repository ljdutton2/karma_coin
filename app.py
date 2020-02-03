from google.cloud import vision
import os
import requests
from dotenv import load_dotenv
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="env/key.json"
# image_uri = 'gs://cloud-samples-data/vision/using_curl/shanghai.jpeg'
# client = vision.ImageAnnotatorClient()
# image = vision.types.Image()
# image.source.image_uri = image_uri
#
# response = client.label_detection(image=image)
#
# print('Labels (and confidence score):')
# print('=' * 79)
# for label in response.label_annotations:
#     print(f'{label.description} ({label.score*100.:.2f}%)')


# curl -v -s -H "Content-Type: application/json" https://vision.googleapis.com/v1/images:annotate\?key\=AIzaSyDgxl6eCbmb-lAPrnd1NTcsCTTMQHd4_aU --data-binary @google_vision.json > results
#Retrieves raw scores
url = 'https://vision.googleapis.com/v1/images:annotate?'
payload = open("google_vision.json")
headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
params = {
    'key': GOOGLE_API_KEY
    }
r = requests.post(url, data=payload, headers=headers, params=params)

labels = ['Food', 'Junk food', 'Dish', 'Cuisine', 'Fast food', 'Ingredient', 'Meat', 'Produce',
'Dessert', 'Frozen dessert', 'Baked goods', 'Comfort food', 'Staple food', 'Recipe', 'Italian food',
'Vegetarian food', 'American food', 'Vegetable', 'Plant', 'Natural foods', 'Fruit', 'Superfood',
'Red', 'Banana family', 'Yellow', 'Citrus', 'Citric acid', 'Side dish', 'Local food', 'Juice',
'Drink', 'Orange drink', 'Breakfast', 'Meal', 'Lunch', 'Dinner', 'Bilberry', 'Hendl', 'Kai yang'
'Roasting', 'Green', 'Leaf', 'Corn kernels', 'Animal fat', 'Crocus', 'Flower', 'Nut', 'Leaf vegetable',
'Herb', 'Grass']

print(r.json())

for i in range(10):
    if r.json()['responses'][0]['labelAnnotations'][i]['description'] not in labels:
        print(r.json()['responses'][0]['labelAnnotations'][i]['description'])
