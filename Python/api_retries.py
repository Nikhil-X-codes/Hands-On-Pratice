import requests

max_retries = 3

def retries_api():
    url = "https://jsonplaceholder.typicode.com/users"

    try:
        response = requests.get(url)

        data = response.json()
        return data

    except:
        
        if max_retries > 0:
            print("retrying")
            max_retries -= 1
            retries_api()
        else:
            return None


