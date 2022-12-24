name = input("Name: ")
address= input("Address typed: ")
address_link = input("Address link: ")
owner = input("Owner: ")
owner_link = input("Owner link: ")
description = input("Description: ")
wikipedia_link = input("Wikipedia link: ")
google_earth_link = input("Google earth link: ")
price = input("Price: ")

all = '<div class="house"><ul><h3>'+name+'</h3><li class="address"><a href="'+address_link+'">'+address+'</a></li><li>Owned by: <a href='+owner_link+'>'+owner+'</a></li><li>Estimated price: '+price+'</li><p>'+description+'</p><div><a target="_blank" href="'+wikipedia_link+'">Wikipedia</a><a style="float: right;" target="_blank" href="'+google_earth_link+'">Google Earth</a></div></ul></div>'
print(all)
