import requests

url = ''
response = requests.post(url,data ={'username': 'admin','password':'123123'})

print(response.text)

myToken = response.json()

header ={'Authorization' : 'Token ' + myToken['token']}
response = requests.get(url,headers=header)
print(response)