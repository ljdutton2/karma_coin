from google.cloud import vision
import os
import requests
from dotenv import load_dotenv
load_dotenv()
os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="env/key.json"
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
image_uri = 'gs://cloud-samples-data/vision/using_curl/shanghai.jpeg'

client = vision.ImageAnnotatorClient()
image = vision.types.Image()
image.source.image_uri = image_uri

response = client.label_detection(image=image)

print('Labels (and confidence score):')
print('=' * 79)
for label in response.label_annotations:
    print(f'{label.description} ({label.score*100.:.2f}%)')

# curl -v -s -H "Content-Type: application/json" https://vision.googleapis.com/v1/images:annotate\?key\=AIzaSyDgxl6eCbmb-lAPrnd1NTcsCTTMQHd4_aU --data-binary @google_vision.json > results

#Retrieves raw scores
url = 'https://vision.googleapis.com/v1/images:annotate?'
payload = open("google_vision.json")
headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
params = {
    'key': GOOGLE_API_KEY
    }
r = requests.post(url, data=payload, headers=headers, params=params)

labels = ['People']

for i in range(10):
    if r.json()['responses'][0]['labelAnnotations'][i]['description'] not in labels:
        print(r.json()['responses'][0]['labelAnnotations'][i]['score'])
