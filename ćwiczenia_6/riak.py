import requests

# 1) wstawianie do bazy

headers = {'Content-Type': 'application/json'}

document_version_1 = '{\'title\': \'AssasinsCreed\'}'

response_put_1version = requests.put('http://localhost:49153/buckets/s24215/keys/assasinscreed', headers=headers, data=document_version_1)

print('-----------------------------------')
print("Riak - komunikaty")
print('-----------------------------------')
print("Wstawianie dokumentu do bazy - response: ", response_put_1version.status_code)

# 2) pobranie dokumentu z bazy

response_get_1version = requests.get('http://localhost:49153/buckets/s24215/keys/assasinscreed')

print("Pobranie dokumentu z bazy: ")
print("Odpowiedz serwera: ", response_get_1version.status_code),
print("Wynik: ", response_get_1version.text)

# 3) modyfikacja dokumentu

document_version_2 = '{\'title\': \'AssasinsCreed\', \'number_of_items\': 1, \'prize\': 249.99}'

response_put_2version = requests.put('http://localhost:49153/buckets/s24215/keys/assasinscreed', headers=headers, data=document_version_2)

print('-----------------------------------')
print("Modyfikacja dokumentu - odpowiedz serwera: ", response_put_2version.status_code)

# 4) ponowne pobranie dokumentu z bazy

response_get_2version = requests.get('http://localhost:49153/buckets/s24215/keys/assasinscreed')

print('-----------------------------------')
print("Pobranie zmodyfikowanego dokumentu z bazy: ")
print("Odpowiedz serwera: ", response_get_2version.status_code),
print("Wynik: ", response_get_2version.text)

# 5) usuniecie dokumentu z bazy

response_delete = requests.delete('http://localhost:49153/buckets/s24215/keys/assasinscreed')

print('-----------------------------------')
print("Usuniecie dokumentu - odpowiedz serwera: ", response_delete.status_code)

# 6) proba pobrania z bazy usunietego dokumentu

response_get_deleted_doc = requests.get('http://localhost:49153/buckets/s24215/keys/assasinscreed')

print('-----------------------------------')
print("Proba pobrania usunietego dokumentu - odpowiedz serwera: ", response_get_deleted_doc.status_code)
print("Wynik: ", response_get_deleted_doc.text)
