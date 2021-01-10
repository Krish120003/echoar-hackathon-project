import requests
url = "https://console.echoAR.xyz/upload"
payload = {'key': 'orange-term-2430',
           'email': 'krish120003@gmail.cokm',
           'target_type': '0',
           'hologram_type': '1',
           'type': 'upload'}

files = {"file_image": open('test/1.jpg', 'rb'),
         "file_image_hologram": open('test/2.png', 'rb')}


headers = {}
response = requests.request(
    "POST", url, headers=headers, data=payload, files=files)
print(response.text)
