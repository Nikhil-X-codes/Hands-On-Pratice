import requests

def get_user_info():

  url = "https://jsonplaceholder.typicode.com/users"
  try:
   response = requests.get(url)

   data = response.json()

   return data

  except:
    return None


users = get_user_info()

if users is not None:
    for user in users:
        print(user["name"])

else:
    print("Error")

    